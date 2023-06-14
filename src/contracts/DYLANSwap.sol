pragma solidity ^0.4.24;

import "./SafeMath.sol";
import "./Demula.sol";
import "./DYLANSwapLP.sol";
import "./Ownable.sol";

/*
FUNCTIONS NEEEDED:

price of eth; gets balance of eth in this sol contract and calls getbalanceof() on demula.sol to get balance of dem in this sol contract
price of dem; gets balance of eth in this sol contract and calls getbalanceof() on demula.sol to get balance of dem in this sol contract
get dem liquity; gets balance of dem in this sol contract with getbalanceof() on demula.sol
get eth liquitity; gets balance of eth in this sol contract
remove liquidity; calls function on lp token to burn user lp token; use send() from this contract to send eth back to user and call transfer() on demula.sol to send dem back to user
swap dem for eth; call function on demula.sol to send user's demula to this sol contract and then use send() to send eth back to user



the following functions will be on blockchaindataholder.js because i cant call function to remove eth from user with solidity, i need web3 to do that
add liquidity; web3 in bdh.js will call function to send user's eth to this sol cotract, and then call function on demula.sol to send user's demula to this sol contract, then mint lp tokens which is equal to amount of tokens added and send to user 
swap eth for dem; web3 in bdh.js will call function to send user's eth to this sol contract, make sure it went through because it returns bool, and then call transfer() on demula.sol to send dem back to user
*/

contract DYLANSwapInterface {
    function SetLPAddress(address dylanSwaplp) public returns (bool success);
    function DEMLiquidity() public constant returns (uint);
    function ETHLiquidity() public constant returns (uint);
    function CreateLiquidity(address user, uint DEMAmount) public returns (bool success);
    function AddLiquidity(address user, uint ETHAmount) public returns (bool success);
    function RemoveLiquidity(address user, uint percent) public returns (bool success);
    function DEMToETH(address user, uint DEMAmount) public returns (bool success);
    function ETHToDEM(address user, uint ETHAmount) public returns (bool success);
    function demula() external constant returns (address);
    function dylanSwapLP() external constant returns (address);
}

contract DYLANSwap is DYLANSwapInterface, SafeMath, Ownable {
    address public Owner;
    address private _Demula;
    address private _DYLANSwapLP;
    bool private LPTokenSet;
    uint Multiplier;
 
    constructor(address demula) public 
    {
        Owner = msg.sender;
        _Demula = demula;
        Multiplier = 1000000000000000000000000;

        /*use multiplier in order to make it so that if amounttoremove/lptotal supply has values after decimal point, 
        it will not cut them all off, allowing for an accurate calculation. This makers it so it will only round after 
        being divided by multiplier. For example, if amounttoremove/lptotal supply was 1/9, the value would result in 0.111111 
        and so on, which solidity would round to 0 without the multiplier. The multiplier makes it 
        111,111,111,111,111,111,111,111.111 with infinite 1's after the decimal place, which solidity will automatically 
        cut off. This value could then accurately be used to multiply by ethliquidity(), and rounded when dividing by multiplier.*/
    }
    function SetLPAddress(address dylanSwaplp) public returns (bool success) 
    {
        require(!LPTokenSet, 'LP Already Set!');
       _DYLANSwapLP = dylanSwaplp;
       LPTokenSet = true;
       return true;
    }
    function DEMLiquidity() public constant returns (uint) 
    {
        return Demula(_Demula).balanceOf(address(this));
    }
    function ETHLiquidity() public constant returns (uint)
    {
        return address(this).balance;
    }
    function CreateLiquidity(address user, uint DEMAmount) public returns (bool success) 
    {
        uint UserDEMReturn = safeSub(DEMAmount, 100000000);
        require(Demula(_Demula).transferFrom(user, address(this), DEMAmount), 'Demula Transaction Failed!');
        require(DYLANSwapLP(_DYLANSwapLP).mint(address(this), 100000000), 'LP Transaction Part 1 Failed!');
        require(DYLANSwapLP(_DYLANSwapLP).mint(user, UserDEMReturn), 'LP Transaction Part 2 Failed!');
        return true;
    }
    function AddLiquidity(address user, uint ETHAmount) public returns (bool success) 
    {
        uint ETHLiquidityBeforeETHTransaction = safeSub(ETHLiquidity(), ETHAmount);
        uint DEMAmount = safeMul(ETHAmount, safeDiv(DEMLiquidity(), ETHLiquidityBeforeETHTransaction));
        require(Demula(_Demula).transferFrom(user, address(this), DEMAmount), 'Demula Transaction Failed!');
        require(DYLANSwapLP(_DYLANSwapLP).mint(user, DEMAmount), 'Lp Transaction Failed!');
        return true;
    }
    function RemoveLiquidity(address user, uint percent) public returns (bool success)
    {
        uint UserLpBalance = DYLANSwapLP(_DYLANSwapLP).balanceOf(user);
        uint AmountToRemove = safeMul(safeDiv(UserLpBalance, 100), percent);
        uint LPTotalSupplyBeforeBurn = DYLANSwapLP(_DYLANSwapLP).totalSupply();
        require(DYLANSwapLP(_DYLANSwapLP).burn(user, AmountToRemove), 'LP Burn Failed!');
        uint SharePercentWithMultiplier = safeDiv(safeMul(AmountToRemove, Multiplier), LPTotalSupplyBeforeBurn); 
        require(user.send(safeDiv(safeMul(SharePercentWithMultiplier, ETHLiquidity()), Multiplier)), 'Ethereum Transaction Failed!');
        require(Demula(_Demula).transfer(user, safeDiv(safeMul(SharePercentWithMultiplier, DEMLiquidity()), Multiplier)), 'Demula Transaction Failed!');
        return true;
    }
    function DEMToETH(address user, uint DEMAmount) public returns (bool success) 
    {
        uint ETHOutputWithMultiplier = safeMul(DEMAmount, safeDiv(safeMul(ETHLiquidity(), Multiplier), DEMLiquidity()));
        require(safeDiv(ETHOutputWithMultiplier, Multiplier)<ETHLiquidity(), 'Insufficient Liquidity!');
        require(Demula(_Demula).transferFrom(user, address(this), DEMAmount), 'Demula Transaction Failed!');
        require(user.send(safeDiv(ETHOutputWithMultiplier, Multiplier)), 'Ethereum Transaction Failed!');
        return true;
    }
    function ETHToDEM(address user, uint ETHAmount) public returns (bool success) 
    {
        uint ETHLiquidityBeforeETHTransaction = safeSub(ETHLiquidity(), ETHAmount);
        uint DEMOutputWithMultiplier = safeMul(ETHAmount, safeDiv(safeMul(DEMLiquidity(), Multiplier), ETHLiquidityBeforeETHTransaction));
        require(safeDiv(DEMOutputWithMultiplier, Multiplier)<DEMLiquidity(), 'Insufficient Liquidity!');
        require(Demula(_Demula).transfer(user, safeDiv(DEMOutputWithMultiplier, Multiplier)), 'Demula Transaction Failed!');
        return true;
    }
    function transferOwnership(address newOwner) public returns (bool success) 
    {
        require(msg.sender==Owner, 'You are not the owner!');
        Owner = newOwner;
        return true;
    }
    function Owner() external constant returns (address)
    {
        return Owner;
    }
    function demula() external constant returns (address)
    {
        return _Demula;
    }
    function dylanSwapLP() external constant returns (address)
    {
        return _DYLANSwapLP;
    }
    function () public payable {
        
    }
}