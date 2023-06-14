var LPTotalSupply;
var UserLP;

setInterval(function() 
{
	SetLP();
}, 10);

function SetLP()
{
	LPTotalSupply = 2000*1000000000000000000;  //use sol contract
	UserLP = 2000*1000000000000000000; //use sol contract
}

export {LPTotalSupply, UserLP};