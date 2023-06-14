import {WalletConnected, NetworkSupported, ConfirmSwap, Approved, ConnectWallet} from "./Default.js";

var ConfirmDiv = document.getElementsByClassName("RemoveConfirmDiv")[0];
var ConfirmButton = ConfirmDiv.children[0];
var ConfirmText = ConfirmButton.children[0];
var PurpleGradient = "url(../assets/Images/PurpleGradient.jpg)";
setInterval(function() 
{
	SetConfirmInfo();
}, 10);

function SetConfirmInfo()
{
	if(WalletConnected)
	{
		ConfirmButton.onclick = null;
		if(NetworkSupported)
		{
			var PercentInputs = document.getElementsByClassName("PercentInput");
			if(PercentInputs[0].value==0)
			{
				ConfirmText.innerHTML = "Enter an Amount";
				ConfirmDiv.style.background = "RGB(255, 0, 0)";
			}
			else if(!Approved)
			{
				ConfirmDiv.style.background = "RGB(65,105,225)";
				ConfirmButton.onclick = Approve;
				ConfirmText.innerHTML = "Approve"
			}
			else
			{
				ConfirmText.innerHTML = "Remove";
				ConfirmButton.onclick = ConfirmSwap;
				ConfirmDiv.style.backgroundImage = PurpleGradient;
				ConfirmDiv.style.backgroundSize = "cover";
			}
		}
		else
		{
			ConfirmDiv.style.background = "RGB(255, 0, 0)";
			ConfirmText.innerHTML = "Wrong Network!"
		}
	}
	else
	{
		ConfirmDiv.style.background = "RGB(65,105,225)";
		ConfirmButton.onclick = ConnectWallet;
		ConfirmText.innerHTML = "Connect Wallet"
		
	}
}