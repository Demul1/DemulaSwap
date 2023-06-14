
pragma solidity ^0.4.24;
 
import "./SafeMath.sol";
import "./ERC20Interface.sol";
import "./Ownable.sol";

contract Demula is ERC20Interface, SafeMath, Ownable {
    string public _symbol;
    string public  _name;
    uint8 public _decimals;
    uint public _totalSupply;
    address public Owner;
 
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;
 
    constructor() public {
        _symbol = "DEM";
        _name = "Demula";
        _decimals = 18;
        _totalSupply = safeMul(100000000, 1000000000000000000);
        Owner = msg.sender;
        balances[Owner] = _totalSupply;
        emit Transfer(address(0), Owner, _totalSupply);
    }
    function name() external constant returns (string) { 
        return _name;
    }
    function symbol() external constant returns (string) { 
        return _symbol;
    }
    function decimals() external constant returns (uint) { 
        return _decimals;
    }
    function totalSupply() public constant returns (uint) { 
        return _totalSupply;
    }
    function balanceOf(address tokenOwner) public constant returns (uint balance) {
        return balances[tokenOwner];
    }
 
    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        require(allowance(from, msg.sender)>=tokens, "Not enough allowance!");
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowance(from, msg.sender), tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }
    function burn(address burner, uint tokens) public returns (bool success) {
        require(msg.sender==burner, 'You can only burn your own Demula!');
        require(balances[burner]>=tokens, 'Not enough Demula!');
        balances[burner] = safeSub(balances[burner], tokens);
        _totalSupply = safeSub(_totalSupply, tokens);
        emit Transfer(burner, address(0), tokens);
        return true;
    }
    function mint(address to, uint tokens) public returns (bool success) {
        require(msg.sender==Owner, 'You are not the owner!');
        balances[to] = safeAdd(balances[to], tokens);
        _totalSupply = safeAdd(_totalSupply, tokens);
        emit Transfer(address(0), to, tokens);
        return true;
    }
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {
        return allowed[tokenOwner][spender];
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
    function () public payable {
        revert();
    }
}
