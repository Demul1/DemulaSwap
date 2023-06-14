pragma solidity ^0.4.24;

//Ownable 

contract Ownable {
	function transferOwnership(address newOwner) public returns (bool);
	function Owner() external constant returns (address);
}