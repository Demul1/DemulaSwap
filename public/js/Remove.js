import {LPTotalSupply, UserLP} from './LPInfo.js';
import {web3} from './Default.js';

var ETHLiquidity = 1000*1000000000000000000;
var DEMLiquidity = 2000*1000000000000000000;

var ETHReceive;
var DEMReceive;
var PercentInput = document.getElementsByClassName("PercentInput")[0];

PercentInput.addEventListener('input', function(e){
    if(PercentInput.value>100)
	{
		var PercentInputList = PercentInput.value.split("");
		PercentInputList.pop();
		PercentInput.value = PercentInputList.join("");
	}
})

setInterval(function() 
{
	SetLiquidity();
	SetReceive();
	SetReceiveHTML();;
}, 10);

function PercentLimiter(PercentInput)
{
    let max = PercentInput.max;
    let value = parseInt(PercentInput.value);
    if (value>max) {
        PercentInput.value = 100;
    }
}
function SetLiquidity()
{
	ETHLiquidity = ETHLiquidity;//use function in sol contract
	DEMLiquidity = DEMLiquidity;//use function in sol contract
}
function SetReceive()
{
	var LPWithdrawal = UserLP*(PercentInput.value/100);
	var Percent = LPWithdrawal/LPTotalSupply;
	ETHReceive = Percent*ETHLiquidity/1000000000000000000; //use big number
	DEMReceive = Percent*DEMLiquidity/1000000000000000000; //use big number
}
function SetReceiveHTML()
{
	var ReceiveTexts = document.getElementsByClassName("YouWillReceiveText");
	ReceiveTexts[0].innerHTML = ETHReceive+" ETH";
	ReceiveTexts[1].innerHTML = DEMReceive+" DEM";
}