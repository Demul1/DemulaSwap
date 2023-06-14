/*
Demula - done
LP - done
DYLANSwap - owner stuff done, lp and demula done, just need to test DEMLiquidity()==>ETHToDEM()
*/

const Demula = artifacts.require("Demula");
const DYLANSwap = artifacts.require("DYLANSwap");
const DYLANSwapLP = artifacts.require("DYLANSwapLP");

var _Demula;
var _DYLANSwap;
var _DYLANSwapLP;
var User = '0xd034369E3C803aF3124B22f995bE293D3CFc3aF9';
var Alt = '0x4311fB7937d74916E7E2689819E8a82850e703a3';
var Deployer = '0xd034369E3C803aF3124B22f995bE293D3CFc3aF9';

const Web3 = require('web3');
var web3 = new Web3('HTTP://127.0.0.1:7545')
require('chai')
	.use(require('chai-as-promised'))
	.should()
contract('DYLANSwap', ([deployer, investor]) => {
	before(async () => {
		_Demula = await Demula.new();
		_DYLANSwap = await DYLANSwap.new(await _Demula.address);
		_DYLANSwapLP = await DYLANSwapLP.new(await _DYLANSwap.address);
	})
	/*
	describe('Demula Deployment', async () => {
		it('Demula owner correct', async() => {
			const DemulaOwner = await _Demula.Owner();
			assert.equal(DemulaOwner, Deployer);
		})
		it('Demula owner has correct balance', async() => {
			const DemulaOwner = await _Demula.Owner();
			const OwnerBalance = await _Demula.balanceOf(DemulaOwner);
			assert.equal(OwnerBalance, '100000000000000000000000000');
		})
		it('Demula owner transfer works', async() => {
			const DemulaOwner = await _Demula.Owner();
			await _Demula.transferOwnership(Alt);
			const NewDemulaOwner = await _Demula.Owner()
			assert.equal(NewDemulaOwner, Alt);
		})
	})
	describe('DYLANSwapLP Deployment', async () => {
		it('LP DYLANSwap address correct', async() => {
			const LPDYLANSwap = await _DYLANSwapLP.dylanSwap();
			const DYLANSwapAddress = await _DYLANSwap.address;
			assert.equal(LPDYLANSwap, DYLANSwapAddress);
		})
	})
	describe('DYLANSwap Deployment', async () => {
		it('DYLANSwap owner correct', async() => {
			const DYLANSwapOwner = await _DYLANSwap.Owner();
			assert.equal(DYLANSwapOwner, Deployer);
		})
		it('DYLANSwap owner transfer works', async() => {
			const DYLANSwapOwner = await _DYLANSwap.Owner();
			await _DYLANSwap.transferOwnership(Alt);
			const NewDYLANSwapOwner = await _DYLANSwap.Owner()
			assert.equal(NewDYLANSwapOwner, Alt);
		})
		it('DYLANSwap Demula address is correct', async() => {
			const DYLANSwapDemula = await _DYLANSwap.demula();
			const DemulaAddress = await _Demula.address;
			assert.equal(DYLANSwapDemula, DemulaAddress);
		})
		it('DYLANSwap LP address is correct', async() => {
			const DYLANSwapLP = await _DYLANSwap.dylanSwapLP();
			const DYLANSwapLPAddress = await _DYLANSwapLP.address;
			assert.equal(DYLANSwapLP, DYLANSwapLPAddress);
		})
	})
	*/
	describe('Liquidity Values', async () => {
		before(async () => {
			_Demula = await Demula.new();
			_DYLANSwap = await DYLANSwap.new(await _Demula.address);
			_DYLANSwapLP = await DYLANSwapLP.new(await _DYLANSwap.address);
		})
		it('DEM Liquidity', async() => {
			const DYLANSwapAddress = await _DYLANSwap.address;
			await _Demula.mint(DYLANSwapAddress, '1000000000000000000');
			const _DEMLiquidity = await _DYLANSwap.DEMLiquidity();
			assert.equal(_DEMLiquidity.toString(), '1000000000000000000');
		})
		it('ETH Liquidity', async() => {
			const _ETHLiquidity = await _DYLANSwap.ETHLiquidity();
			assert.equal(_ETHLiquidity.toString(), 0);
		})
	})
	
	describe('Liquidity Functions', async () => {
		before(async () => {
			_Demula = await Demula.new();
			_DYLANSwap = await DYLANSwap.new(await _Demula.address);
			_DYLANSwapLP = await DYLANSwapLP.new(await _DYLANSwap.address);
			await _Demula.approve(_DYLANSwap.address, '1000000000000000000000000000000000000000000000000');
		})
		it('Create Liquidity', async() => {
			const DYLANSwapAddress = await _DYLANSwap.address;
			await web3.eth.sendTransaction({to: DYLANSwapAddress, from: User, value: 1000000000000000000});//1 eth
			const DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '1000000000000000000');//1 eth
			await _DYLANSwap.CreateLiquidity(User, '10000000000000000000000000');//10,000,000 dem

			DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '10000000000000000000000000');//10,000,000 dem
			const DYLANSwapLPBalance = await _DYLANSwapLP.balanceOf(await _DYLANSwap.address);
			assert.equal(DYLANSwapLPBalance.toString(), '100000000');//0.000000000000000001 lp
			const UserLPBalance = await _DYLANSwapLP.balanceOf(User);
			assert.equal(UserLPBalance.toString(), '9999999999999999900000000');//10,000,000 - 0.0000000000000001 lp
		})
		it('Add Liquidity', async() => {
			const DYLANSwapAddress = await _DYLANSwap.address;
			await web3.eth.sendTransaction({to: DYLANSwapAddress, from: User, value: 1000000000000000000});//1 eth
			const DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '2000000000000000000');//2 eth
			await _DYLANSwap.AddLiquidity(User, '1000000000000000000');//1 eth

			DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '20000000000000000000000000');//20,000,000 dem
			const DYLANSwapLPBalance = await _DYLANSwapLP.balanceOf(await _DYLANSwap.address);
			assert.equal(DYLANSwapLPBalance.toString(), '100000000');//0.000000000000000001 lp
			const UserLPBalance = await _DYLANSwapLP.balanceOf(User);
			assert.equal(UserLPBalance.toString(), '19999999999999999900000000');//20,000,000 - 0.0000000000000001 lp
		})
		it('Remove Liquidity', async() => {
			await _DYLANSwap.RemoveLiquidity(User, '50');
			const DYLANSwapAddress = await _DYLANSwap.address;
			const DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '1000000000000000005');//1 eth
			DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '10000000000000000050000000');//10,000,000 dem
			const DYLANSwapLPBalance = await _DYLANSwapLP.balanceOf(await _DYLANSwap.address);
			assert.equal(DYLANSwapLPBalance.toString(), '100000000');//0.000000000000000001 lp
			const UserLPBalance = await _DYLANSwapLP.balanceOf(User);
			assert.equal(UserLPBalance.toString(), '9999999999999999950000000');//20,000,000 - 0.0000000000000001 lp
		})
	})
	
	describe('Swap Functions', async () => {
		before(async () => {
			_Demula = await Demula.new();
			_DYLANSwap = await DYLANSwap.new(await _Demula.address);
			_DYLANSwapLP = await DYLANSwapLP.new(await _DYLANSwap.address);
			await _Demula.approve(await _DYLANSwap.address, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

			/*create liquidity*/
			let DYLANSwapAddress = await _DYLANSwap.address;
			await web3.eth.sendTransaction({to: DYLANSwapAddress, from: User, value: 1000000000000000000});//1 eth
			let DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '1000000000000000000');//1 eth
			await _DYLANSwap.CreateLiquidity(User, '10000000000000000000000000');//10,000,000 dem
			DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '10000000000000000000000000');//10,000,000 dem
			let DYLANSwapLPBalance = await _DYLANSwapLP.balanceOf(await _DYLANSwap.address);
			assert.equal(DYLANSwapLPBalance.toString(), '100000000');//0.000000000000000001 lp
			let UserLPBalance = await _DYLANSwapLP.balanceOf(User);
			assert.equal(UserLPBalance.toString(), '9999999999999999900000000');//10,000,000 - 0.0000000000000001 lp

			/*add liquidity*/
			await web3.eth.sendTransaction({to: DYLANSwapAddress, from: User, value: 1000000000000000000});//1 eth
			DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '2000000000000000000');//2 eth
			await _DYLANSwap.AddLiquidity(User, '1000000000000000000');//1 eth
			DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '20000000000000000000000000');//20,000,000 dem
			DYLANSwapLPBalance = await _DYLANSwapLP.balanceOf(await _DYLANSwap.address);
			assert.equal(DYLANSwapLPBalance.toString(), '100000000');//0.000000000000000001 lp
			UserLPBalance = await _DYLANSwapLP.balanceOf(User);
			assert.equal(UserLPBalance.toString(), '19999999999999999900000000');//20,000,000 - 0.0000000000000001 lp
		})
		it('DEM TO ETH', async() => {
			let DYLANSwapAddress = await _DYLANSwap.address;
			await _DYLANSwap.DEMToETH(User, '10000000000000000000000000');
			const UserDEMBalance = await _Demula.balanceOf(User);
			assert.equal(UserDEMBalance.toString(), '70000000000000000000000000');
			const DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '30000000000000000000000000');
			const DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '1000000000000000000');//1 eth
		})
		it('ETH TO DEM', async() => {
			let DYLANSwapAddress = await _DYLANSwap.address;
			await web3.eth.sendTransaction({to: DYLANSwapAddress, from: User, value: 500000000000000000});//1 eth
			await _DYLANSwap.ETHToDEM(User, '500000000000000000');//0.5 eth
			const UserDEMBalance = await _Demula.balanceOf(User);
			assert.equal(UserDEMBalance.toString(), '85000000000000000000000000');
			const DYLANSwapDEMBalance = await _Demula.balanceOf(DYLANSwapAddress);
			assert.equal(DYLANSwapDEMBalance.toString(), '15000000000000000000000000');
			const DYLANSwapETHBalance =  await _DYLANSwap.ETHLiquidity();
			assert.equal(DYLANSwapETHBalance.toString(), '1500000000000000000');//1 eth
		})
	})
})