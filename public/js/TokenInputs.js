/*controls token 1 and token 2 inputs*/

import {FromLiquidity, ToLiquidity, FromBalance} from "./TokenInfo.js";
import {WalletConnected} from "./Default.js";

SetMaxFunction();

var UserOnFirstTokenInput = false;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Token1Input').addEventListener('focus', function() {
        UserOnFirstTokenInput = true;
    });
	document.getElementById('Token2Input').addEventListener('focus', function() {
        UserOnFirstTokenInput = false;
    });
});

setInterval(function() 
{
	SetTokenInputs();
	SetMaxActive();
}, 10);

function SetTokenInputs()
{
	var TokenInputs = document.getElementsByClassName("TokenInput");
	/*if tokeninputs 0 has value*/
	if(UserOnFirstTokenInput)
	{
		if(TokenInputs[0].value && parseFloat(TokenInputs[0].value)!=0)
		{
			let FromTokenInput = parseFloat(TokenInputs[0].value);
			let ToTokenAmount = FromTokenInput*(ToLiquidity/FromLiquidity);
			TokenInputs[1].value = ToTokenAmount;
		}
		else
		{
			TokenInputs[1].value = "";
		}
	}
	else
	{
		if(TokenInputs[1].value && parseFloat(TokenInputs[1].value)!=0)
		{
			let ToTokenInput = parseFloat(TokenInputs[1].value);
			let FromTokenAmount = ToTokenInput*FromLiquidity/ToLiquidity;
			TokenInputs[0].value = FromTokenAmount;
		}
		else
		{
			TokenInputs[0].value = "";
		}
	}
}
function SetMaxFunction()
{
	var MaxButton = document.getElementsByClassName("MaxDiv")[0].children;
	MaxButton[0].onclick = SetMax;
}
function SetMaxActive()
{
	var Token1InputDiv = document.getElementsByClassName("Token1InputDiv");
	var MaxDiv = document.getElementsByClassName("MaxDiv");
	if(WalletConnected && FromBalance>0)
	{
		Token1InputDiv[0].style.left = "100px";
		MaxDiv[0].style.display = "block";

	}
	else
	{
		Token1InputDiv[0].style.left = "10px";
		MaxDiv[0].style.display = "none";
	}
}
function SetMax()
{
	var TokenInputs = document.getElementsByClassName("TokenInput");
	if(UserOnFirstTokenInput)
	{
		TokenInputs[0].value = FromBalance.toString();
	}
	else
	{
		let MaxToTokens = FromBalance*ToLiquidity/FromLiquidity;
		TokenInputs[1].value = MaxToTokens;	
	}
}
export {SetMax};