const Demula = artifacts.require("Demula");
const DYLANSwap = artifacts.require("DYLANSwap");
const DYLANSwapLP = artifacts.require("DYLANSwapLP");

function tokens(n){
	return web3.utils.toWei(n, 'ether');
}	

module.exports = async function(deployer) {
	await deployer.deploy(Demula);
	const _Demula = await Demula.deployed();

	await deployer.deploy(DYLANSwap, _Demula.address);
	const _DYLANSwap = await DYLANSwap.deployed();

	await deployer.deploy(DYLANSwapLP, _DYLANSwap.address);
	const _DYLANSwapLP = await DYLANSwapLP.deployed();
}