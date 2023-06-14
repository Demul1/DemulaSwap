import {FromLiquidity, ToLiquidity} from "./TokenInfo.js";
import {WalletConnected, NetworkSupported, ReturnHTMLForBalance, web3, accounts} from "./Default.js";
import {LPTotalSupply} from "./LPInfo.js";

setInterval(function() 
{
	SetShareHTML();
	SetRateHTML();
}, 10);

function SetShareHTML()
{
	var ShareText = document.getElementsByClassName("ShareText");
	var TokenInputs = document.getElementsByClassName("TokenInput");
	if(TokenInputs[1].value!=0)
	{
		var LPToReceive = Web3.utils.toWei(TokenInputs[1].value);
		var LPTotalSupplyAfterTransaction = parseFloat(LPTotalSupply)+parseFloat(LPToReceive);
		var Percent = ((LPToReceive/LPTotalSupplyAfterTransaction)*100);
		if(Percent<0.01)
		{
			ShareText[0].innerHTML = "Share: <0.01%";
		}
		else
		{
			ShareText[0].innerHTML = "Share: "+parseFloat(Percent.toFixed(6))+"%";
		}
	}
	else
	{
		ShareText[0].innerHTML = "Share: 0%";
	}
}
function SetRateHTML()
{
	var RateText = document.getElementsByClassName("RateText");
	var DEMValue = +(FromLiquidity/ToLiquidity).toFixed(6);
	RateText[0].innerHTML = "Rate: 1 DEM = "+DEMValue+" ETH";
}