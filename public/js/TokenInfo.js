/*controls tokens name, logo, value*/
import {WalletConnected, NetworkSupported, GetETHBalance, ReturnHTMLForBalance} from './Default.js'
SetArrowFunction();

var From = "ETH";
var To = "DEM";

var FromLogo = "../assets/Images/ETHLogo.png";
var ToLogo = "../assets/Images/Demula.jpg";

var FromBalance = 0;
var ToBalance = 0;

var FromLiquidity = 1000000000000000000000;
var ToLiquidity = 2000000000000000000000;

var Token1Input = document.getElementById('Token1Input');
Token1Input.addEventListener('input', function(e){
	var Input = Token1Input.value;
	const Decimals = _Input => {
		if (_Input.includes('.')) {
			return _Input.split('.')[1].length;
		};
		return 0;
	}
    if(Decimals(Input)>18)
	{
		var NewInput = Math.floor(Input*1000000000000000000);//use big numbers
		NewInput = NewInput/1000000000000000000;
		Token1Input.value = NewInput;
	}
})

setInterval(function() 
{
	SetTokenInfo();
	SetLiquidity();
	SetBalances();
	SetBalancesHTML();
}, 10);
function SetTokenInfo()
{
	var TokenPicList = document.getElementsByClassName("TokenPic");
	TokenPicList[0].src = FromLogo;
	TokenPicList[1].src = ToLogo;
	var TokensList = document.getElementsByClassName("TokenSymbolText");
	TokensList[0].innerHTML = From;
	TokensList[1].innerHTML = To;
}
function SetArrowFunction()
{
	var ArrowButton = document.getElementsByClassName("ArrowDivButton");
	if(ArrowButton.length!=0)
	{
		ArrowButton[0].onclick = SwitchFromandTo;
	}
}
function SwitchFromandTo()
{
	/*replace from with to*/
	[From, To] = [To, From];
	[FromLogo, ToLogo] = [ToLogo, FromLogo];
}
async function SetBalances()
{
	var ETHBalance = await GetETHBalance();
	if(From=="ETH")
	{
		FromBalance = ETHBalance;
		ToBalance = '1.5';//use demula contract
	}
	else
	{
		FromBalance = '1.5';//use demula contract
		ToBalance = ETHBalance;
	}
}
function SetBalancesHTML()
{
	var Balances = document.getElementsByClassName("BalanceText");
	if(WalletConnected && NetworkSupported)
	{
		Balances[0].innerHTML = "Balance: "+ReturnHTMLForBalance(FromBalance, 7);
		Balances[1].innerHTML = "Balance: "+ReturnHTMLForBalance(ToBalance, 7);
	}
	else
	{
		Balances[0].innerHTML = null;
		Balances[1].innerHTML = null;
	}
}
function SetLiquidity()
{
	if(From=="DEM")
	{
		FromLiquidity = FromLiquidity;//use function in sol contract
		ToLiquidity = ToLiquidity;//use function in sol contract
	}
	else if(From=="ETH")
	{
		FromLiquidity = FromLiquidity;//use function in sol contract
		ToLiquidity = ToLiquidity;//use function in sol contract
	}
}
export {From, To, FromBalance, ToBalance, FromLiquidity, ToLiquidity, SwitchFromandTo};