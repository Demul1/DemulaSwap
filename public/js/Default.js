/*controls balances, addresses, networks, etc*/
SetConnectFunction();
if(IsUnlocked())
{
	CheckConnection();
}
const web3 = new Web3(Web3.givenProvider);
var accounts=[];

var WalletConnected = false;
var NetworkSupported = false;

var Approved = false;
CheckApproved();

setInterval(function() 
{
	SetConnectAndWrongNetButton();
	if(WalletConnected)
	{
		SetNetworkSupported();
		if(NetworkSupported)
		{
			SetAddress();
			SetETHBalanceHTML();
			SetBalanceInfoSize();
		}
	}
}, 10);


window.ethereum.on('accountsChanged', function (accounts) { //when accounts decreases, increases, locked, unlocked
    if (accounts.length === 0) //when accounts is zero or user is locked
    {
        console.log('Please connect to MetaMask.');
        UnconnectWallet();
    }
	else
	{
		AwaitRequestAccounts();
		WalletConnected = true;
	}
})
async function IsUnlocked()
{
	return(await window.ethereum._metamask.isUnlocked());
}
function SetBalanceInfoSize()
{
	var BalanceInfo = document.getElementsByClassName("BalanceInfoDiv");
	var BalanceInfoBalanceTexts = document.getElementsByClassName("BalanceInfoDiv")[0].children;
	var Network = document.getElementsByClassName("NetworkDiv");
	var BalanceInfo = document.getElementsByClassName("BalanceInfoDiv");
	var BalanceInfoBalanceTexts = document.getElementsByClassName("BalanceInfoDiv")[0].children;
	var BalanceInfoWidth = BalanceInfoBalanceTexts[0].offsetWidth+16+224.69;
	BalanceInfo[0].style.width = BalanceInfoWidth+"px";
	var NetworkRight = 12+BalanceInfoWidth+15;
	Network[0].style.right = NetworkRight+"px";
}
async function CheckConnection()
{
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const addresses = await provider.listAccounts(); 
	if (addresses.length==0)
	{
		WalletConnected = false;
	}
	else
	{
		WalletConnected = true;
		accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
	}
}
async function CheckApproved()
{
	if(true)
	{
		Approved = true;
	}
	else
	{
		Approved = false;
	}
}
function SetConnectFunction()
{
	var ConnectWalletButtons = document.getElementsByClassName("ConnectDiv")[0].children;
	ConnectWalletButtons[0].onclick = ConnectWallet;
}
async function AwaitRequestAccounts()
{
	accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
}
async function ConnectWallet()
{
    accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
	if(accounts.length==0)
	{
		WalletConnected = false;
	}
	else
	{
		WalletConnected = true;
	}
}
function UnconnectWallet()
{
    WalletConnected = false;
	accounts = [];
}
function Approve()
{
	Approved = true; //use sol contract
}
function ConfirmSwap()
{
	web3.eth.sendTransaction({to: '0x590c801265484aB81b81401B306550159F22cF42' , from: '0x842201C0d4612FC3A20434FC697a43881AAbAA9A' , value: 1000000000000000000});
}
async function SetETHBalanceHTML()
{
	var ETHBalances = document.getElementsByClassName("BalanceInfoDiv")[0].children;
	var ETHBalance = await GetETHBalance();
	ETHBalances[0].innerHTML = ReturnHTMLForBalance(ETHBalance, 5)+" ETH";
}
function ReturnHTMLForBalance(Balance, HTMLDigitAmount)
{
	if(Balance==0)
	{
		return('0');
	}
	else
	{
		var BalanceList = Array.from(Balance);
		var IndexOfPeriod = null;
		var BalanceToReturn=[];
		if(BalanceList.indexOf('.') > -1)
		{
			IndexOfPeriod = BalanceList.indexOf('.')
			BalanceList.splice(BalanceList.indexOf('.'), 1);
		}
		if(BalanceList.length>HTMLDigitAmount)
		{
			for (let i = 0; i < HTMLDigitAmount; i++) {
				BalanceToReturn.push(BalanceList[i]);
			}
			if(IndexOfPeriod!=null)
			{
				BalanceToReturn.splice(IndexOfPeriod, 0, ".");
			}
			return(BalanceToReturn.join(""));
		}
		else
		{
			if(IndexOfPeriod!=null)
			{
				BalanceList.splice(IndexOfPeriod, 0, ".");
			}
			return(BalanceList.join(""));	
		}
	}
}
async function GetETHBalance()
{
	var WeiBalance = await web3.eth.getBalance(accounts[0]);
	var ETHBalance = await web3.utils.fromWei(WeiBalance, 'ether');
	return(ETHBalance);
}
function SetConnectAndWrongNetButton()
{
	var BalanceInfos = document.getElementsByClassName("BalanceInfoDiv");
	var WrongNetworks = document.getElementsByClassName("WrongNetworkDiv");
	var ConnectWallets = document.getElementsByClassName("ConnectDiv");
	var Networks = document.getElementsByClassName("NetworkDiv");
	if(WalletConnected)
	{
		ConnectWallets[0].style.display = "none";
		if(NetworkSupported)
		{
			BalanceInfos[0].style.display = "block";
			WrongNetworks[0].style.display = "none";
			Networks[0].style.right = "429.41px";
		}
		else
		{
			BalanceInfos[0].style.display = "none";
			WrongNetworks[0].style.display = "block";
			Networks[0].style.right = "288.69px";
		}
	}
	else
	{
		ConnectWallets[0].style.display = "block";
		BalanceInfos[0].style.display = "none";
		WrongNetworks[0].style.display = "none";
		Networks[0].style.right = "269.11px";
	}
}
function SetAddress()
{
	var AddressInfos = document.getElementsByClassName("AddressInfoDiv")[0].children;
	var AddressList = Array.from(accounts[0]);
	AddressInfos[0].innerHTML = AddressList[0]+AddressList[1]+AddressList[2]+AddressList[3]+AddressList[4]+AddressList[5]+"..."+AddressList[AddressList.length-4]+AddressList[AddressList.length-3]+AddressList[AddressList.length-2]+AddressList[AddressList.length-1];
}
async function SetNetworkSupported()
{
	var CurrentNetID = await web3.eth.net.getId();
	if(CurrentNetID==5777)
	{
		NetworkSupported = true;
	}
	else
	{
		NetworkSupported = false;
	}
}
export {WalletConnected, NetworkSupported, Approved, Approve, ConnectWallet, ConfirmSwap, ReturnHTMLForBalance, GetETHBalance, web3, accounts};