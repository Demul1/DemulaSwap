const web3 = new Web3(Web3.givenProvider);
const DemulaJSON = 
{
    "contractName": "Demula",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "_decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "a",
            "type": "uint256"
          },
          {
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "safeSub",
        "outputs": [
          {
            "name": "c",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "_symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "a",
            "type": "uint256"
          },
          {
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "safeDiv",
        "outputs": [
          {
            "name": "c",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "a",
            "type": "uint256"
          },
          {
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "safeMul",
        "outputs": [
          {
            "name": "c",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "_name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "a",
            "type": "uint256"
          },
          {
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "safeAdd",
        "outputs": [
          {
            "name": "c",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "tokenOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenOwner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "balance",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "burner",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenOwner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "remaining",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "Owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"burner\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeSub\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"Owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeDiv\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeMul\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeAdd\",\"outputs\":[{\"name\":\"c\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/src/contracts/Demula.sol\":\"Demula\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/src/contracts/Demula.sol\":{\"keccak256\":\"0x89d72c0d71d2cb701e0a4bb48a18092fba8853098ae4e30b50776d73261fb1ad\",\"urls\":[\"bzzr://a8e0dfa6e2caed7a7e9685784fdc15556b02d9f4368b5217ffde77d7e232d2ad\"]},\"project:/src/contracts/ERC20Interface.sol\":{\"keccak256\":\"0xb952b6e02ec6fa508e2a54eedb335260d862fd2af49cb34f50673598c7495d5e\",\"urls\":[\"bzzr://078e28523dab98b8c3b8dd4906394b96a428430a125d7ca72599003901489018\"]},\"project:/src/contracts/Ownable.sol\":{\"keccak256\":\"0xdb07b10bd2fdc13683d9ea892c54dcd040f64d3134f5a766af439b5e494feb96\",\"urls\":[\"bzzr://9a4a50004b0b823b826822426dc947d46402ac06edcc361b4cbca64a924ded9d\"]},\"project:/src/contracts/SafeMath.sol\":{\"keccak256\":\"0xb3a37752b801707b453d4b9630a11e38056f5d9bb82c057eaf75699390d18ce2\",\"urls\":[\"bzzr://d0800f809b4091c4d5e973b9f838f9bb95c0b7b94a689a72cc20cf5b4c202223\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040805190810160405280600381526020017f44454d0000000000000000000000000000000000000000000000000000000000815250600090805190602001906200005f92919062000264565b506040805190810160405280600681526020017f44656d756c61000000000000000000000000000000000000000000000000000081525060019080519060200190620000ad92919062000264565b506012600260006101000a81548160ff021916908360ff160217905550620000f16305f5e100670de0b6b3a764000062000230640100000000026401000000009004565b60038190555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060035460056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6003546040518082815260200191505060405180910390a362000313565b6000818302905060008314806200025257508183828115156200024f57fe5b04145b15156200025e57600080fd5b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a757805160ff1916838001178555620002d8565b82800160010185558215620002d8579182015b82811115620002d7578251825591602001919060010190620002ba565b5b509050620002e79190620002eb565b5090565b6200031091905b808211156200030c576000816000905550600101620002f2565b5090565b90565b6117d880620003236000396000f30060806040526004361061011d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610122578063095ea7b3146101b257806318160ddd1461021757806323b872dd14610242578063313ce567146102c757806332424aa3146102f25780633eaaf86b1461032357806340c10f191461034e57806370a08231146103b357806395d89b411461040a5780639dc29fac1461049a578063a293d1e8146104ff578063a9059cbb1461054a578063b09f1266146105af578063b4a99a4e1461063f578063b5931f7c14610696578063d05c78da146106e1578063d28d88521461072c578063dd62ed3e146107bc578063e6cb901314610833578063f2fde38b1461087e575b600080fd5b34801561012e57600080fd5b506101376108d9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017757808201518184015260208101905061015c565b50505050905090810190601f1680156101a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101be57600080fd5b506101fd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061097b565b604051808215151515815260200191505060405180910390f35b34801561022357600080fd5b5061022c610a6d565b6040518082815260200191505060405180910390f35b34801561024e57600080fd5b506102ad600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a77565b604051808215151515815260200191505060405180910390f35b3480156102d357600080fd5b506102dc610d15565b6040518082815260200191505060405180910390f35b3480156102fe57600080fd5b50610307610d2f565b604051808260ff1660ff16815260200191505060405180910390f35b34801561032f57600080fd5b50610338610d42565b6040518082815260200191505060405180910390f35b34801561035a57600080fd5b50610399600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d48565b604051808215151515815260200191505060405180910390f35b3480156103bf57600080fd5b506103f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f1d565b6040518082815260200191505060405180910390f35b34801561041657600080fd5b5061041f610f66565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045f578082015181840152602081019050610444565b50505050905090810190601f16801561048c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104a657600080fd5b506104e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611008565b604051808215151515815260200191505060405180910390f35b34801561050b57600080fd5b506105346004803603810190808035906020019092919080359060200190929190505050611298565b6040518082815260200191505060405180910390f35b34801561055657600080fd5b50610595600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112b4565b604051808215151515815260200191505060405180910390f35b3480156105bb57600080fd5b506105c461143d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106045780820151818401526020810190506105e9565b50505050905090810190601f1680156106315780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561064b57600080fd5b506106546114db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106a257600080fd5b506106cb6004803603810190808035906020019092919080359060200190929190505050611505565b6040518082815260200191505060405180910390f35b3480156106ed57600080fd5b506107166004803603810190808035906020019092919080359060200190929190505050611529565b6040518082815260200191505060405180910390f35b34801561073857600080fd5b5061074161155a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107c857600080fd5b5061081d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115f8565b6040518082815260200191505060405180910390f35b34801561083f57600080fd5b50610868600480360381019080803590602001909291908035906020019092919050505061167f565b6040518082815260200191505060405180910390f35b34801561088a57600080fd5b506108bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061169b565b604051808215151515815260200191505060405180910390f35b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109715780601f1061094657610100808354040283529160200191610971565b820191906000526020600020905b81548152906001019060200180831161095457829003601f168201915b5050505050905090565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600354905090565b600081610a8485336115f8565b10151515610afa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4e6f7420656e6f75676820616c6c6f77616e636521000000000000000000000081525060200191505060405180910390fd5b610b43600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611298565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b99610b9385336115f8565b83611298565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c62600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361167f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600260009054906101000a900460ff1660ff16905090565b600260009054906101000a900460ff1681565b60035481565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f7520617265206e6f7420746865206f776e6572210000000000000000000081525060200191505060405180910390fd5b610e58600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361167f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ea76003548361167f565b6003819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ffe5780601f10610fd357610100808354040283529160200191610ffe565b820191906000526020600020905b815481529060010190602001808311610fe157829003601f168201915b5050505050905090565b60008273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f596f752063616e206f6e6c79206275726e20796f7572206f776e2044656d756c81526020017f612100000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561118a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4e6f7420656e6f7567682044656d756c6121000000000000000000000000000081525060200191505060405180910390fd5b6111d3600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611298565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061122260035483611298565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156112a957600080fd5b818303905092915050565b60006112ff600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611298565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061138b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361167f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114d35780601f106114a8576101008083540402835291602001916114d3565b820191906000526020600020905b8154815290600101906020018083116114b657829003601f168201915b505050505081565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000808211151561151557600080fd5b818381151561152057fe5b04905092915050565b600081830290506000831480611549575081838281151561154657fe5b04145b151561155457600080fd5b92915050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115f05780601f106115c5576101008083540402835291602001916115f0565b820191906000526020600020905b8154815290600101906020018083116115d357829003601f168201915b505050505081565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000818301905082811015151561169557600080fd5b92915050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611762576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f7520617265206e6f7420746865206f776e6572210000000000000000000081525060200191505060405180910390fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600190509190505600a165627a7a7230582068f342145aebddf3edde18594e63f2af156036d55814f79daa3728441afa053a0029",
    "deployedBytecode": "0x60806040526004361061011d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610122578063095ea7b3146101b257806318160ddd1461021757806323b872dd14610242578063313ce567146102c757806332424aa3146102f25780633eaaf86b1461032357806340c10f191461034e57806370a08231146103b357806395d89b411461040a5780639dc29fac1461049a578063a293d1e8146104ff578063a9059cbb1461054a578063b09f1266146105af578063b4a99a4e1461063f578063b5931f7c14610696578063d05c78da146106e1578063d28d88521461072c578063dd62ed3e146107bc578063e6cb901314610833578063f2fde38b1461087e575b600080fd5b34801561012e57600080fd5b506101376108d9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017757808201518184015260208101905061015c565b50505050905090810190601f1680156101a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101be57600080fd5b506101fd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061097b565b604051808215151515815260200191505060405180910390f35b34801561022357600080fd5b5061022c610a6d565b6040518082815260200191505060405180910390f35b34801561024e57600080fd5b506102ad600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a77565b604051808215151515815260200191505060405180910390f35b3480156102d357600080fd5b506102dc610d15565b6040518082815260200191505060405180910390f35b3480156102fe57600080fd5b50610307610d2f565b604051808260ff1660ff16815260200191505060405180910390f35b34801561032f57600080fd5b50610338610d42565b6040518082815260200191505060405180910390f35b34801561035a57600080fd5b50610399600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d48565b604051808215151515815260200191505060405180910390f35b3480156103bf57600080fd5b506103f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f1d565b6040518082815260200191505060405180910390f35b34801561041657600080fd5b5061041f610f66565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045f578082015181840152602081019050610444565b50505050905090810190601f16801561048c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104a657600080fd5b506104e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611008565b604051808215151515815260200191505060405180910390f35b34801561050b57600080fd5b506105346004803603810190808035906020019092919080359060200190929190505050611298565b6040518082815260200191505060405180910390f35b34801561055657600080fd5b50610595600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112b4565b604051808215151515815260200191505060405180910390f35b3480156105bb57600080fd5b506105c461143d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106045780820151818401526020810190506105e9565b50505050905090810190601f1680156106315780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561064b57600080fd5b506106546114db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106a257600080fd5b506106cb6004803603810190808035906020019092919080359060200190929190505050611505565b6040518082815260200191505060405180910390f35b3480156106ed57600080fd5b506107166004803603810190808035906020019092919080359060200190929190505050611529565b6040518082815260200191505060405180910390f35b34801561073857600080fd5b5061074161155a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107c857600080fd5b5061081d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115f8565b6040518082815260200191505060405180910390f35b34801561083f57600080fd5b50610868600480360381019080803590602001909291908035906020019092919050505061167f565b6040518082815260200191505060405180910390f35b34801561088a57600080fd5b506108bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061169b565b604051808215151515815260200191505060405180910390f35b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109715780601f1061094657610100808354040283529160200191610971565b820191906000526020600020905b81548152906001019060200180831161095457829003601f168201915b5050505050905090565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600354905090565b600081610a8485336115f8565b10151515610afa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4e6f7420656e6f75676820616c6c6f77616e636521000000000000000000000081525060200191505060405180910390fd5b610b43600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611298565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b99610b9385336115f8565b83611298565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c62600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361167f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600260009054906101000a900460ff1660ff16905090565b600260009054906101000a900460ff1681565b60035481565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f7520617265206e6f7420746865206f776e6572210000000000000000000081525060200191505060405180910390fd5b610e58600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361167f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ea76003548361167f565b6003819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ffe5780601f10610fd357610100808354040283529160200191610ffe565b820191906000526020600020905b815481529060010190602001808311610fe157829003601f168201915b5050505050905090565b60008273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f596f752063616e206f6e6c79206275726e20796f7572206f776e2044656d756c81526020017f612100000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561118a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4e6f7420656e6f7567682044656d756c6121000000000000000000000000000081525060200191505060405180910390fd5b6111d3600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611298565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061122260035483611298565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156112a957600080fd5b818303905092915050565b60006112ff600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611298565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061138b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361167f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114d35780601f106114a8576101008083540402835291602001916114d3565b820191906000526020600020905b8154815290600101906020018083116114b657829003601f168201915b505050505081565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000808211151561151557600080fd5b818381151561152057fe5b04905092915050565b600081830290506000831480611549575081838281151561154657fe5b04145b151561155457600080fd5b92915050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115f05780601f106115c5576101008083540402835291602001916115f0565b820191906000526020600020905b8154815290600101906020018083116115d357829003601f168201915b505050505081565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000818301905082811015151561169557600080fd5b92915050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611762576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f7520617265206e6f7420746865206f776e6572210000000000000000000081525060200191505060405180910390fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600190509190505600a165627a7a7230582068f342145aebddf3edde18594e63f2af156036d55814f79daa3728441afa053a0029",
    "sourceMap": "116:3327:2:-;;;423:299;8:9:-1;5:2;;;30:1;27;20:12;5:2;423:299:2;455:15;;;;;;;;;;;;;;;;;;:7;:15;;;;;;;;;;;;:::i;:::-;;481:16;;;;;;;;;;;;;;;;;;:5;:16;;;;;;;;;;;;:::i;:::-;;520:2;508:9;;:14;;;;;;;;;;;;;;;;;;548:39;556:9;567:19;548:7;;;:39;;;:::i;:::-;533:12;:54;;;;606:10;598:5;;:18;;;;;;;;;;;;;;;;;;645:12;;627:8;:15;636:5;;;;;;;;;;;627:15;;;;;;;;;;;;;;;:30;;;;694:5;;;;;;;;;;;673:41;;690:1;673:41;;;701:12;;673:41;;;;;;;;;;;;;;;;;;116:3327;;333:130:6;387:6;414:1;410;:5;406:9;;439:1;434;:6;:20;;;;453:1;448;444;:5;;;;;;;;:10;434:20;426:29;;;;;;;;333:130;;;;:::o;116:3327:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "116:3327:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3424:8;;;728:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;728:83:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;728:83:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1520:208;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1520:208:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1005:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1005:93:2;;;;;;;;;;;;;;;;;;;;;;;1734:440;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1734:440:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;910:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;910:89:2;;;;;;;;;;;;;;;;;;;;;;;231:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;231:22:2;;;;;;;;;;;;;;;;;;;;;;;;;;;260:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;260:24:2;;;;;;;;;;;;;;;;;;;;;;;2601:320;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2601:320:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1104:124;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1104:124:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;817:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;817:87:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;817:87:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2180:415;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2180:415:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;208:116:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;208:116:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1237:277:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1237:277:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;176:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;176:21:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;176:21:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3291:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3291:89:2;;;;;;;;;;;;;;;;;;;;;;;;;;;472:115:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;472:115:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;333:130;;8:9:-1;5:2;;;30:1;27;20:12;5:2;333:130:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;204:20:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;204:20:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;204:20:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2927:151;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2927:151:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;83:116:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;83:116:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3084:201:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3084:201:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;728:83;771:6;798:5;791:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;728:83;:::o;1520:208::-;1583:12;1639:6;1608:7;:19;1616:10;1608:19;;;;;;;;;;;;;;;:28;1628:7;1608:28;;;;;;;;;;;;;;;:37;;;;1682:7;1661:37;;1670:10;1661:37;;;1691:6;1661:37;;;;;;;;;;;;;;;;;;1716:4;1709:11;;1520:208;;;;:::o;1005:93::-;1053:4;1078:12;;1071:19;;1005:93;:::o;1734:440::-;1811:12;1873:6;1844:27;1854:4;1860:10;1844:9;:27::i;:::-;:35;;1836:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1933:31;1941:8;:14;1950:4;1941:14;;;;;;;;;;;;;;;;1957:6;1933:7;:31::i;:::-;1916:8;:14;1925:4;1916:14;;;;;;;;;;;;;;;:48;;;;2003:44;2011:27;2021:4;2027:10;2011:9;:27::i;:::-;2040:6;2003:7;:44::i;:::-;1975:7;:13;1983:4;1975:13;;;;;;;;;;;;;;;:25;1989:10;1975:25;;;;;;;;;;;;;;;:72;;;;2073:29;2081:8;:12;2090:2;2081:12;;;;;;;;;;;;;;;;2095:6;2073:7;:29::i;:::-;2058:8;:12;2067:2;2058:12;;;;;;;;;;;;;;;:44;;;;2133:2;2118:26;;2127:4;2118:26;;;2137:6;2118:26;;;;;;;;;;;;;;;;;;2162:4;2155:11;;1734:440;;;;;:::o;910:89::-;957:4;982:9;;;;;;;;;;;975:16;;;;910:89;:::o;231:22::-;;;;;;;;;;;;;:::o;260:24::-;;;;:::o;2601:320::-;2656:12;2701:5;;;;;;;;;;;2689:17;;:10;:17;;;2681:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2759:29;2767:8;:12;2776:2;2767:12;;;;;;;;;;;;;;;;2781:6;2759:7;:29::i;:::-;2744:8;:12;2753:2;2744:12;;;;;;;;;;;;;;;:44;;;;2814:29;2822:12;;2836:6;2814:7;:29::i;:::-;2799:12;:44;;;;2880:2;2859:32;;2876:1;2859:32;;;2884:6;2859:32;;;;;;;;;;;;;;;;;;2909:4;2902:11;;2601:320;;;;:::o;1104:124::-;1168:12;1200:8;:20;1209:10;1200:20;;;;;;;;;;;;;;;;1193:27;;1104:124;;;:::o;817:87::-;862:6;889:7;882:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;817:87;:::o;2180:415::-;2239:12;2284:6;2272:18;;:10;:18;;;2264:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2366:6;2348:8;:16;2357:6;2348:16;;;;;;;;;;;;;;;;:24;;2340:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2425:33;2433:8;:16;2442:6;2433:16;;;;;;;;;;;;;;;;2451:6;2425:7;:33::i;:::-;2406:8;:16;2415:6;2406:16;;;;;;;;;;;;;;;:52;;;;2484:29;2492:12;;2506:6;2484:7;:29::i;:::-;2469:12;:44;;;;2554:1;2529:36;;2538:6;2529:36;;;2558:6;2529:36;;;;;;;;;;;;;;;;;;2583:4;2576:11;;2180:415;;;;:::o;208:116:6:-;262:6;294:1;289;:6;;281:15;;;;;;;;315:1;311;:5;307:9;;208:116;;;;:::o;1237:277:2:-;1296:12;1344:37;1352:8;:20;1361:10;1352:20;;;;;;;;;;;;;;;;1374:6;1344:7;:37::i;:::-;1321:8;:20;1330:10;1321:20;;;;;;;;;;;;;;;:60;;;;1407:29;1415:8;:12;1424:2;1415:12;;;;;;;;;;;;;;;;1429:6;1407:7;:29::i;:::-;1392:8;:12;1401:2;1392:12;;;;;;;;;;;;;;;:44;;;;1473:2;1452:32;;1461:10;1452:32;;;1477:6;1452:32;;;;;;;;;;;;;;;;;;1502:4;1495:11;;1237:277;;;;:::o;176:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3291:89::-;3335:7;3367:5;;;;;;;;;;;3360:12;;3291:89;:::o;472:115:6:-;526:6;557:1;553;:5;545:14;;;;;;;;578:1;574;:5;;;;;;;;570:9;;472:115;;;;:::o;333:130::-;387:6;414:1;410;:5;406:9;;439:1;434;:6;:20;;;;453:1;448;444;:5;;;;;;;;:10;434:20;426:29;;;;;;;;333:130;;;;:::o;204:20:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2927:151::-;3008:14;3042:7;:19;3050:10;3042:19;;;;;;;;;;;;;;;:28;3062:7;3042:28;;;;;;;;;;;;;;;;3035:35;;2927:151;;;;:::o;83:116:6:-;137:6;164:1;160;:5;156:9;;189:1;184;:6;;176:15;;;;;;;;83:116;;;;:::o;3084:201:2:-;3145:12;3196:5;;;;;;;;;;;3184:17;;:10;:17;;;3176:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3247:8;3239:5;;:16;;;;;;;;;;;;;;;;;;3273:4;3266:11;;3084:201;;;:::o",
    "source": "\r\npragma solidity ^0.4.24;\r\n \r\nimport \"./SafeMath.sol\";\r\nimport \"./ERC20Interface.sol\";\r\nimport \"./Ownable.sol\";\r\n\r\ncontract Demula is ERC20Interface, SafeMath, Ownable {\r\n    string public _symbol;\r\n    string public  _name;\r\n    uint8 public _decimals;\r\n    uint public _totalSupply;\r\n    address public Owner;\r\n \r\n    mapping(address => uint) balances;\r\n    mapping(address => mapping(address => uint)) allowed;\r\n \r\n    constructor() public {\r\n        _symbol = \"DEM\";\r\n        _name = \"Demula\";\r\n        _decimals = 18;\r\n        _totalSupply = safeMul(100000000, 1000000000000000000);\r\n        Owner = msg.sender;\r\n        balances[Owner] = _totalSupply;\r\n        emit Transfer(address(0), Owner, _totalSupply);\r\n    }\r\n    function name() external constant returns (string) { \r\n        return _name;\r\n    }\r\n    function symbol() external constant returns (string) { \r\n        return _symbol;\r\n    }\r\n    function decimals() external constant returns (uint) { \r\n        return _decimals;\r\n    }\r\n    function totalSupply() public constant returns (uint) { \r\n        return _totalSupply;\r\n    }\r\n    function balanceOf(address tokenOwner) public constant returns (uint balance) {\r\n        return balances[tokenOwner];\r\n    }\r\n \r\n    function transfer(address to, uint tokens) public returns (bool success) {\r\n        balances[msg.sender] = safeSub(balances[msg.sender], tokens);\r\n        balances[to] = safeAdd(balances[to], tokens);\r\n        emit Transfer(msg.sender, to, tokens);\r\n        return true;\r\n    }\r\n    function approve(address spender, uint tokens) public returns (bool success) {\r\n        allowed[msg.sender][spender] = tokens;\r\n        emit Approval(msg.sender, spender, tokens);\r\n        return true;\r\n    }\r\n    function transferFrom(address from, address to, uint tokens) public returns (bool success) {\r\n        require(allowance(from, msg.sender)>=tokens, \"Not enough allowance!\");\r\n        balances[from] = safeSub(balances[from], tokens);\r\n        allowed[from][msg.sender] = safeSub(allowance(from, msg.sender), tokens);\r\n        balances[to] = safeAdd(balances[to], tokens);\r\n        emit Transfer(from, to, tokens);\r\n        return true;\r\n    }\r\n    function burn(address burner, uint tokens) public returns (bool success) {\r\n        require(msg.sender==burner, 'You can only burn your own Demula!');\r\n        require(balances[burner]>=tokens, 'Not enough Demula!');\r\n        balances[burner] = safeSub(balances[burner], tokens);\r\n        _totalSupply = safeSub(_totalSupply, tokens);\r\n        emit Transfer(burner, address(0), tokens);\r\n        return true;\r\n    }\r\n    function mint(address to, uint tokens) public returns (bool success) {\r\n        require(msg.sender==Owner, 'You are not the owner!');\r\n        balances[to] = safeAdd(balances[to], tokens);\r\n        _totalSupply = safeAdd(_totalSupply, tokens);\r\n        emit Transfer(address(0), to, tokens);\r\n        return true;\r\n    }\r\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {\r\n        return allowed[tokenOwner][spender];\r\n    }\r\n    function transferOwnership(address newOwner) public returns (bool success) \r\n    {\r\n        require(msg.sender==Owner, 'You are not the owner!');\r\n        Owner = newOwner;\r\n        return true;\r\n    }\r\n    function Owner() external constant returns (address)\r\n    {\r\n        return Owner;\r\n    }\r\n    function () public payable {\r\n        revert();\r\n    }\r\n}",
    "sourcePath": "C:\\Projects\\DYLANSwap\\src\\contracts\\Demula.sol",
    "ast": {
      "absolutePath": "project:/src/contracts/Demula.sol",
      "exportedSymbols": {
        "Demula": [
          1358
        ]
      },
      "id": 1359,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 948,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".24"
          ],
          "nodeType": "PragmaDirective",
          "src": "2:24:2"
        },
        {
          "absolutePath": "project:/src/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "id": 949,
          "nodeType": "ImportDirective",
          "scope": 1359,
          "sourceUnit": 1615,
          "src": "31:24:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/src/contracts/ERC20Interface.sol",
          "file": "./ERC20Interface.sol",
          "id": 950,
          "nodeType": "ImportDirective",
          "scope": 1359,
          "sourceUnit": 1446,
          "src": "57:30:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/src/contracts/Ownable.sol",
          "file": "./Ownable.sol",
          "id": 951,
          "nodeType": "ImportDirective",
          "scope": 1359,
          "sourceUnit": 1518,
          "src": "89:23:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 952,
                "name": "ERC20Interface",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1445,
                "src": "135:14:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC20Interface_$1445",
                  "typeString": "contract ERC20Interface"
                }
              },
              "id": 953,
              "nodeType": "InheritanceSpecifier",
              "src": "135:14:2"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 954,
                "name": "SafeMath",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1614,
                "src": "151:8:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SafeMath_$1614",
                  "typeString": "contract SafeMath"
                }
              },
              "id": 955,
              "nodeType": "InheritanceSpecifier",
              "src": "151:8:2"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 956,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1517,
                "src": "161:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$1517",
                  "typeString": "contract Ownable"
                }
              },
              "id": 957,
              "nodeType": "InheritanceSpecifier",
              "src": "161:7:2"
            }
          ],
          "contractDependencies": [
            1445,
            1517,
            1614
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 1358,
          "linearizedBaseContracts": [
            1358,
            1517,
            1614,
            1445
          ],
          "name": "Demula",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 959,
              "name": "_symbol",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "176:21:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 958,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "176:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 961,
              "name": "_name",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "204:20:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 960,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "204:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 963,
              "name": "_decimals",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "231:22:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              },
              "typeName": {
                "id": 962,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "231:5:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 965,
              "name": "_totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "260:24:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 964,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "260:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 967,
              "name": "Owner",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "291:20:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 966,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "291:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 971,
              "name": "balances",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "321:33:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 970,
                "keyType": {
                  "id": 968,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "329:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "321:24:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 969,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "340:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 977,
              "name": "allowed",
              "nodeType": "VariableDeclaration",
              "scope": 1358,
              "src": "361:52:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 976,
                "keyType": {
                  "id": 972,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "369:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "361:44:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 975,
                  "keyType": {
                    "id": 973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "388:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "380:24:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 974,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1018,
                "nodeType": "Block",
                "src": "444:278:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 980,
                        "name": "_symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 959,
                        "src": "455:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "44454d",
                        "id": 981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "465:5:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0556e4f95080dd5d1ae572d034dc9ac975a53f9bcc4afa59130e5d0400e07ab5",
                          "typeString": "literal_string \"DEM\""
                        },
                        "value": "DEM"
                      },
                      "src": "455:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 983,
                    "nodeType": "ExpressionStatement",
                    "src": "455:15:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 986,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 984,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 961,
                        "src": "481:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "44656d756c61",
                        "id": 985,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "489:8:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2b32da14b8b98ae3ecae631ccccc4a243ac67d6133281c58321277236ad018da",
                          "typeString": "literal_string \"Demula\""
                        },
                        "value": "Demula"
                      },
                      "src": "481:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 987,
                    "nodeType": "ExpressionStatement",
                    "src": "481:16:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 988,
                        "name": "_decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 963,
                        "src": "508:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "3138",
                        "id": 989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "520:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_18_by_1",
                          "typeString": "int_const 18"
                        },
                        "value": "18"
                      },
                      "src": "508:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 991,
                    "nodeType": "ExpressionStatement",
                    "src": "508:14:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 992,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 965,
                        "src": "533:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "313030303030303030",
                            "id": 994,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "556:9:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100000000_by_1",
                              "typeString": "int_const 100000000"
                            },
                            "value": "100000000"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "31303030303030303030303030303030303030",
                            "id": 995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "567:19:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1000000000000000000"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_100000000_by_1",
                              "typeString": "int_const 100000000"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          ],
                          "id": 993,
                          "name": "safeMul",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1591,
                          "src": "548:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "548:39:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "533:54:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 998,
                    "nodeType": "ExpressionStatement",
                    "src": "533:54:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1002,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 999,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 967,
                        "src": "598:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1000,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1629,
                          "src": "606:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1001,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "606:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "598:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1003,
                    "nodeType": "ExpressionStatement",
                    "src": "598:18:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1004,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "627:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1006,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1005,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 967,
                          "src": "636:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "627:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1007,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 965,
                        "src": "645:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "627:30:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1009,
                    "nodeType": "ExpressionStatement",
                    "src": "627:30:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 1012,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "690:1:2",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "682:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1013,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "682:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1014,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 967,
                          "src": "694:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1015,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 965,
                          "src": "701:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1010,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "673:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "673:41:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1017,
                    "nodeType": "EmitStatement",
                    "src": "668:46:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1019,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 978,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "434:2:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 979,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "444:0:2"
              },
              "scope": 1358,
              "src": "423:299:2",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1026,
                "nodeType": "Block",
                "src": "779:32:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1024,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 961,
                      "src": "798:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 1023,
                    "id": 1025,
                    "nodeType": "Return",
                    "src": "791:12:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1027,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "name",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1020,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "741:2:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1023,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1022,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1027,
                    "src": "771:6:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 1021,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "771:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "770:8:2"
              },
              "scope": 1358,
              "src": "728:83:2",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            {
              "body": {
                "id": 1034,
                "nodeType": "Block",
                "src": "870:34:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1032,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 959,
                      "src": "889:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 1031,
                    "id": 1033,
                    "nodeType": "Return",
                    "src": "882:14:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1035,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "symbol",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1028,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "832:2:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1031,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1030,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1035,
                    "src": "862:6:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 1029,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "862:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "861:8:2"
              },
              "scope": 1358,
              "src": "817:87:2",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            {
              "body": {
                "id": 1042,
                "nodeType": "Block",
                "src": "963:36:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1040,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 963,
                      "src": "982:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "functionReturnParameters": 1039,
                    "id": 1041,
                    "nodeType": "Return",
                    "src": "975:16:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1043,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "decimals",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1036,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "927:2:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1039,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1038,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1043,
                    "src": "957:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1037,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "957:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "956:6:2"
              },
              "scope": 1358,
              "src": "910:89:2",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            {
              "body": {
                "id": 1050,
                "nodeType": "Block",
                "src": "1059:39:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1048,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 965,
                      "src": "1078:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1047,
                    "id": 1049,
                    "nodeType": "Return",
                    "src": "1071:19:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1051,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1044,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1025:2:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1047,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1046,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1051,
                    "src": "1053:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1045,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1053:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1052:6:2"
              },
              "scope": 1358,
              "src": "1005:93:2",
              "stateMutability": "view",
              "superFunction": 1365,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1062,
                "nodeType": "Block",
                "src": "1182:46:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1058,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 971,
                        "src": "1200:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1060,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1059,
                        "name": "tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1053,
                        "src": "1209:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1200:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1057,
                    "id": 1061,
                    "nodeType": "Return",
                    "src": "1193:27:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1063,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1054,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1053,
                    "name": "tokenOwner",
                    "nodeType": "VariableDeclaration",
                    "scope": 1063,
                    "src": "1123:18:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1052,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1123:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1122:20:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1057,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1056,
                    "name": "balance",
                    "nodeType": "VariableDeclaration",
                    "scope": 1063,
                    "src": "1168:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1055,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1168:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1167:14:2"
              },
              "scope": 1358,
              "src": "1104:124:2",
              "stateMutability": "view",
              "superFunction": 1372,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1105,
                "nodeType": "Block",
                "src": "1310:204:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1083,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1072,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "1321:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1075,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1073,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1629,
                            "src": "1330:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1074,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1330:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1321:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1077,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "1352:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1080,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1078,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "1361:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1079,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1361:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1352:20:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1081,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1067,
                            "src": "1374:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1076,
                          "name": "safeSub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "1344:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1344:37:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1321:60:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1084,
                    "nodeType": "ExpressionStatement",
                    "src": "1321:60:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1094,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1085,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "1392:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1087,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1086,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1065,
                          "src": "1401:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1392:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1089,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "1415:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1091,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1090,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1065,
                              "src": "1424:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1415:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1092,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1067,
                            "src": "1429:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1088,
                          "name": "safeAdd",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1541,
                          "src": "1407:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1407:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1392:44:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1095,
                    "nodeType": "ExpressionStatement",
                    "src": "1392:44:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1097,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1629,
                            "src": "1461:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1098,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1461:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1099,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1065,
                          "src": "1473:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1100,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1067,
                          "src": "1477:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1096,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "1452:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1452:32:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1102,
                    "nodeType": "EmitStatement",
                    "src": "1447:37:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1502:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 1071,
                    "id": 1104,
                    "nodeType": "Return",
                    "src": "1495:11:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1106,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1068,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1065,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1106,
                    "src": "1255:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1064,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1255:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1067,
                    "name": "tokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 1106,
                    "src": "1267:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1066,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1267:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1254:25:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1071,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1070,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 1106,
                    "src": "1296:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 1069,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1296:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1295:14:2"
              },
              "scope": 1358,
              "src": "1237:277:2",
              "stateMutability": "nonpayable",
              "superFunction": 1390,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1133,
                "nodeType": "Block",
                "src": "1597:131:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1115,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 977,
                            "src": "1608:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 1119,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1116,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1629,
                              "src": "1616:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1616:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1608:19:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1120,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1118,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1108,
                          "src": "1628:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1608:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1121,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1110,
                        "src": "1639:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1608:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1123,
                    "nodeType": "ExpressionStatement",
                    "src": "1608:37:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1125,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1629,
                            "src": "1670:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1670:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1127,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1108,
                          "src": "1682:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1128,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1110,
                          "src": "1691:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1124,
                        "name": "Approval",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1444,
                        "src": "1661:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1661:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1130,
                    "nodeType": "EmitStatement",
                    "src": "1656:42:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1716:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 1114,
                    "id": 1132,
                    "nodeType": "Return",
                    "src": "1709:11:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1134,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1111,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1108,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 1134,
                    "src": "1537:15:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1107,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1537:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1110,
                    "name": "tokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 1134,
                    "src": "1554:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1109,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1554:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1536:30:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1114,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1113,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 1134,
                    "src": "1583:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 1112,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1583:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1582:14:2"
              },
              "scope": 1358,
              "src": "1520:208:2",
              "stateMutability": "nonpayable",
              "superFunction": 1399,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1202,
                "nodeType": "Block",
                "src": "1825:349:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1147,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1136,
                                "src": "1854:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1148,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1629,
                                  "src": "1860:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 1149,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1860:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 1146,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                1320
                              ],
                              "referencedDeclaration": 1320,
                              "src": "1844:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address,address) view returns (uint256)"
                              }
                            },
                            "id": 1150,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1844:27:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1151,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "1873:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1844:35:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e6f7420656e6f75676820616c6c6f77616e636521",
                          "id": 1153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1881:23:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_3d61b3bdeaf176d082b31bfe58640a9bb4c3f07f111c4db93f76593d182655f2",
                            "typeString": "literal_string \"Not enough allowance!\""
                          },
                          "value": "Not enough allowance!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_3d61b3bdeaf176d082b31bfe58640a9bb4c3f07f111c4db93f76593d182655f2",
                            "typeString": "literal_string \"Not enough allowance!\""
                          }
                        ],
                        "id": 1145,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1632,
                          1633
                        ],
                        "referencedDeclaration": 1633,
                        "src": "1836:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 1154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1836:69:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1155,
                    "nodeType": "ExpressionStatement",
                    "src": "1836:69:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1156,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "1916:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1158,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1157,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1136,
                          "src": "1925:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1916:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1160,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "1941:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1162,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1161,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1136,
                              "src": "1950:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1941:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1163,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "1957:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1159,
                          "name": "safeSub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "1933:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1933:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1916:48:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1166,
                    "nodeType": "ExpressionStatement",
                    "src": "1916:48:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1167,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 977,
                            "src": "1975:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 1171,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1168,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1136,
                            "src": "1983:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1975:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1172,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1169,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1629,
                            "src": "1989:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1989:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1975:25:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1175,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1136,
                                "src": "2021:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1176,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1629,
                                  "src": "2027:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 1177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2027:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 1174,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                1320
                              ],
                              "referencedDeclaration": 1320,
                              "src": "2011:9:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address,address) view returns (uint256)"
                              }
                            },
                            "id": 1178,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2011:27:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1179,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "2040:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1173,
                          "name": "safeSub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "2003:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1180,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2003:44:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1975:72:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1182,
                    "nodeType": "ExpressionStatement",
                    "src": "1975:72:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1183,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "2058:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1185,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1184,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1138,
                          "src": "2067:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2058:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1187,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "2081:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1189,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1188,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1138,
                              "src": "2090:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2081:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1190,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1140,
                            "src": "2095:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1186,
                          "name": "safeAdd",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1541,
                          "src": "2073:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2073:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2058:44:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1193,
                    "nodeType": "ExpressionStatement",
                    "src": "2058:44:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1195,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1136,
                          "src": "2127:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1196,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1138,
                          "src": "2133:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1197,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1140,
                          "src": "2137:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1194,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "2118:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1198,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2118:26:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1199,
                    "nodeType": "EmitStatement",
                    "src": "2113:31:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1200,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2162:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 1144,
                    "id": 1201,
                    "nodeType": "Return",
                    "src": "2155:11:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1203,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1141,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1136,
                    "name": "from",
                    "nodeType": "VariableDeclaration",
                    "scope": 1203,
                    "src": "1756:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1135,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1756:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1138,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1203,
                    "src": "1770:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1137,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1770:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1140,
                    "name": "tokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 1203,
                    "src": "1782:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1139,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1782:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1755:39:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1144,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1143,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 1203,
                    "src": "1811:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 1142,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1811:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1810:14:2"
              },
              "scope": 1358,
              "src": "1734:440:2",
              "stateMutability": "nonpayable",
              "superFunction": 1410,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1257,
                "nodeType": "Block",
                "src": "2253:342:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1213,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1629,
                              "src": "2272:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2272:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1215,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1205,
                            "src": "2284:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2272:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f752063616e206f6e6c79206275726e20796f7572206f776e2044656d756c6121",
                          "id": 1217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2292:36:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a94943c13d351ba33277092cd0328f88a09212d1433f875f92ea78b0e08e6502",
                            "typeString": "literal_string \"You can only burn your own Demula!\""
                          },
                          "value": "You can only burn your own Demula!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a94943c13d351ba33277092cd0328f88a09212d1433f875f92ea78b0e08e6502",
                            "typeString": "literal_string \"You can only burn your own Demula!\""
                          }
                        ],
                        "id": 1212,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1632,
                          1633
                        ],
                        "referencedDeclaration": 1633,
                        "src": "2264:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 1218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2264:65:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1219,
                    "nodeType": "ExpressionStatement",
                    "src": "2264:65:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1221,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "2348:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1222,
                              "name": "burner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1205,
                              "src": "2357:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2348:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1224,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1207,
                            "src": "2366:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2348:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e6f7420656e6f7567682044656d756c6121",
                          "id": 1226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2374:20:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9152ca886bb2f73bca8152f9f635e156e190de6ef1084bcd5cd33753e2fefcf2",
                            "typeString": "literal_string \"Not enough Demula!\""
                          },
                          "value": "Not enough Demula!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_9152ca886bb2f73bca8152f9f635e156e190de6ef1084bcd5cd33753e2fefcf2",
                            "typeString": "literal_string \"Not enough Demula!\""
                          }
                        ],
                        "id": 1220,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1632,
                          1633
                        ],
                        "referencedDeclaration": 1633,
                        "src": "2340:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 1227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2340:55:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1228,
                    "nodeType": "ExpressionStatement",
                    "src": "2340:55:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1229,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "2406:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1231,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1230,
                          "name": "burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1205,
                          "src": "2415:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2406:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1233,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "2433:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1235,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1234,
                              "name": "burner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1205,
                              "src": "2442:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2433:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1236,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1207,
                            "src": "2451:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1232,
                          "name": "safeSub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "2425:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2425:33:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2406:52:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1239,
                    "nodeType": "ExpressionStatement",
                    "src": "2406:52:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1240,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 965,
                        "src": "2469:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1242,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 965,
                            "src": "2492:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1243,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1207,
                            "src": "2506:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1241,
                          "name": "safeSub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1563,
                          "src": "2484:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2484:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2469:44:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1246,
                    "nodeType": "ExpressionStatement",
                    "src": "2469:44:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1248,
                          "name": "burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1205,
                          "src": "2538:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 1250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2554:1:2",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1249,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2546:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2546:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1252,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1207,
                          "src": "2558:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1247,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "2529:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2529:36:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1254,
                    "nodeType": "EmitStatement",
                    "src": "2524:41:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2583:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 1211,
                    "id": 1256,
                    "nodeType": "Return",
                    "src": "2576:11:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1258,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "burn",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1208,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1205,
                    "name": "burner",
                    "nodeType": "VariableDeclaration",
                    "scope": 1258,
                    "src": "2194:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1204,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2194:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1207,
                    "name": "tokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 1258,
                    "src": "2210:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1206,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2210:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2193:29:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1211,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1210,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 1258,
                    "src": "2239:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 1209,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2239:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2238:14:2"
              },
              "scope": 1358,
              "src": "2180:415:2",
              "stateMutability": "nonpayable",
              "superFunction": 1419,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1303,
                "nodeType": "Block",
                "src": "2670:251:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1268,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1629,
                              "src": "2689:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1269,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2689:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1270,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 967,
                            "src": "2701:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2689:17:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206e6f7420746865206f776e657221",
                          "id": 1272,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2708:24:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0e5c8fda9613e9f4e35d39c70f65c376fe2aa900802a86cc025c711db0c9b7c4",
                            "typeString": "literal_string \"You are not the owner!\""
                          },
                          "value": "You are not the owner!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_0e5c8fda9613e9f4e35d39c70f65c376fe2aa900802a86cc025c711db0c9b7c4",
                            "typeString": "literal_string \"You are not the owner!\""
                          }
                        ],
                        "id": 1267,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1632,
                          1633
                        ],
                        "referencedDeclaration": 1633,
                        "src": "2681:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 1273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2681:52:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1274,
                    "nodeType": "ExpressionStatement",
                    "src": "2681:52:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1275,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 971,
                          "src": "2744:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1277,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1276,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1260,
                          "src": "2753:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2744:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1279,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 971,
                              "src": "2767:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1281,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1280,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1260,
                              "src": "2776:2:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2767:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1282,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1262,
                            "src": "2781:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1278,
                          "name": "safeAdd",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1541,
                          "src": "2759:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2759:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2744:44:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1285,
                    "nodeType": "ExpressionStatement",
                    "src": "2744:44:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1291,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1286,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 965,
                        "src": "2799:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1288,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 965,
                            "src": "2822:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1289,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1262,
                            "src": "2836:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1287,
                          "name": "safeAdd",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1541,
                          "src": "2814:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2814:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2799:44:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1292,
                    "nodeType": "ExpressionStatement",
                    "src": "2799:44:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 1295,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2876:1:2",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1294,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2868:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2868:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1297,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1260,
                          "src": "2880:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1298,
                          "name": "tokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1262,
                          "src": "2884:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1293,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "2859:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2859:32:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1300,
                    "nodeType": "EmitStatement",
                    "src": "2854:37:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1301,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2909:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 1266,
                    "id": 1302,
                    "nodeType": "Return",
                    "src": "2902:11:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1304,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "mint",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1263,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1260,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1304,
                    "src": "2615:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1259,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2615:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1262,
                    "name": "tokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 1304,
                    "src": "2627:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1261,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2627:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2614:25:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1266,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1265,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 1304,
                    "src": "2656:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 1264,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2656:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2655:14:2"
              },
              "scope": 1358,
              "src": "2601:320:2",
              "stateMutability": "nonpayable",
              "superFunction": 1428,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1319,
                "nodeType": "Block",
                "src": "3024:54:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1313,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 977,
                          "src": "3042:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 1315,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1314,
                          "name": "tokenOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1306,
                          "src": "3050:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3042:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1317,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1316,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1308,
                        "src": "3062:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3042:28:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1312,
                    "id": 1318,
                    "nodeType": "Return",
                    "src": "3035:35:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1320,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1309,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1306,
                    "name": "tokenOwner",
                    "nodeType": "VariableDeclaration",
                    "scope": 1320,
                    "src": "2946:18:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1305,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2946:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1308,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 1320,
                    "src": "2966:15:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1307,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2966:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2945:37:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1312,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1311,
                    "name": "remaining",
                    "nodeType": "VariableDeclaration",
                    "scope": 1320,
                    "src": "3008:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1310,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3008:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3007:16:2"
              },
              "scope": 1358,
              "src": "2927:151:2",
              "stateMutability": "view",
              "superFunction": 1381,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1341,
                "nodeType": "Block",
                "src": "3165:120:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1328,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1629,
                              "src": "3184:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1329,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3184:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1330,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 967,
                            "src": "3196:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3184:17:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206e6f7420746865206f776e657221",
                          "id": 1332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3203:24:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0e5c8fda9613e9f4e35d39c70f65c376fe2aa900802a86cc025c711db0c9b7c4",
                            "typeString": "literal_string \"You are not the owner!\""
                          },
                          "value": "You are not the owner!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_0e5c8fda9613e9f4e35d39c70f65c376fe2aa900802a86cc025c711db0c9b7c4",
                            "typeString": "literal_string \"You are not the owner!\""
                          }
                        ],
                        "id": 1327,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1632,
                          1633
                        ],
                        "referencedDeclaration": 1633,
                        "src": "3176:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 1333,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3176:52:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1334,
                    "nodeType": "ExpressionStatement",
                    "src": "3176:52:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1335,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 967,
                        "src": "3239:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1336,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1322,
                        "src": "3247:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3239:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1338,
                    "nodeType": "ExpressionStatement",
                    "src": "3239:16:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3273:4:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 1326,
                    "id": 1340,
                    "nodeType": "Return",
                    "src": "3266:11:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1342,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transferOwnership",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1323,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1322,
                    "name": "newOwner",
                    "nodeType": "VariableDeclaration",
                    "scope": 1342,
                    "src": "3111:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1321,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3111:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3110:18:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1326,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1325,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 1342,
                    "src": "3145:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 1324,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3145:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3144:14:2"
              },
              "scope": 1358,
              "src": "3084:201:2",
              "stateMutability": "nonpayable",
              "superFunction": 1511,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1349,
                "nodeType": "Block",
                "src": "3349:31:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1347,
                      "name": "Owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 967,
                      "src": "3367:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 1346,
                    "id": 1348,
                    "nodeType": "Return",
                    "src": "3360:12:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1350,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "Owner",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1343,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3305:2:2"
              },
              "payable": false,
              "returnParameters": {
                "id": 1346,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1345,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1350,
                    "src": "3335:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1344,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3335:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3334:9:2"
              },
              "scope": 1358,
              "src": "3291:89:2",
              "stateMutability": "view",
              "superFunction": 1516,
              "visibility": "external"
            },
            {
              "body": {
                "id": 1356,
                "nodeType": "Block",
                "src": "3413:27:2",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1353,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1634,
                          1635
                        ],
                        "referencedDeclaration": 1634,
                        "src": "3424:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 1354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3424:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1355,
                    "nodeType": "ExpressionStatement",
                    "src": "3424:8:2"
                  }
                ]
              },
              "documentation": null,
              "id": 1357,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1351,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3395:2:2"
              },
              "payable": true,
              "returnParameters": {
                "id": 1352,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3413:0:2"
              },
              "scope": 1358,
              "src": "3386:54:2",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 1359,
          "src": "116:3327:2"
        }
      ],
      "src": "2:3441:2"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/src/contracts/Demula.sol",
        "exportedSymbols": {
          "Demula": [
            1358
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.4",
              ".24"
            ]
          },
          "id": 948,
          "name": "PragmaDirective",
          "src": "2:24:2"
        },
        {
          "attributes": {
            "SourceUnit": 1615,
            "absolutePath": "project:/src/contracts/SafeMath.sol",
            "file": "./SafeMath.sol",
            "scope": 1359,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 949,
          "name": "ImportDirective",
          "src": "31:24:2"
        },
        {
          "attributes": {
            "SourceUnit": 1446,
            "absolutePath": "project:/src/contracts/ERC20Interface.sol",
            "file": "./ERC20Interface.sol",
            "scope": 1359,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 950,
          "name": "ImportDirective",
          "src": "57:30:2"
        },
        {
          "attributes": {
            "SourceUnit": 1518,
            "absolutePath": "project:/src/contracts/Ownable.sol",
            "file": "./Ownable.sol",
            "scope": 1359,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 951,
          "name": "ImportDirective",
          "src": "89:23:2"
        },
        {
          "attributes": {
            "contractDependencies": [
              1445,
              1517,
              1614
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              1358,
              1517,
              1614,
              1445
            ],
            "name": "Demula",
            "scope": 1359
          },
          "children": [
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "ERC20Interface",
                    "referencedDeclaration": 1445,
                    "type": "contract ERC20Interface"
                  },
                  "id": 952,
                  "name": "UserDefinedTypeName",
                  "src": "135:14:2"
                }
              ],
              "id": 953,
              "name": "InheritanceSpecifier",
              "src": "135:14:2"
            },
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "SafeMath",
                    "referencedDeclaration": 1614,
                    "type": "contract SafeMath"
                  },
                  "id": 954,
                  "name": "UserDefinedTypeName",
                  "src": "151:8:2"
                }
              ],
              "id": 955,
              "name": "InheritanceSpecifier",
              "src": "151:8:2"
            },
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "Ownable",
                    "referencedDeclaration": 1517,
                    "type": "contract Ownable"
                  },
                  "id": 956,
                  "name": "UserDefinedTypeName",
                  "src": "161:7:2"
                }
              ],
              "id": 957,
              "name": "InheritanceSpecifier",
              "src": "161:7:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "_symbol",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "string",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "string",
                    "type": "string"
                  },
                  "id": 958,
                  "name": "ElementaryTypeName",
                  "src": "176:6:2"
                }
              ],
              "id": 959,
              "name": "VariableDeclaration",
              "src": "176:21:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "_name",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "string",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "string",
                    "type": "string"
                  },
                  "id": 960,
                  "name": "ElementaryTypeName",
                  "src": "204:6:2"
                }
              ],
              "id": 961,
              "name": "VariableDeclaration",
              "src": "204:20:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "_decimals",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint8",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint8",
                    "type": "uint8"
                  },
                  "id": 962,
                  "name": "ElementaryTypeName",
                  "src": "231:5:2"
                }
              ],
              "id": 963,
              "name": "VariableDeclaration",
              "src": "231:22:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "_totalSupply",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint",
                    "type": "uint256"
                  },
                  "id": 964,
                  "name": "ElementaryTypeName",
                  "src": "260:4:2"
                }
              ],
              "id": 965,
              "name": "VariableDeclaration",
              "src": "260:24:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "Owner",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "address",
                    "type": "address"
                  },
                  "id": 966,
                  "name": "ElementaryTypeName",
                  "src": "291:7:2"
                }
              ],
              "id": 967,
              "name": "VariableDeclaration",
              "src": "291:20:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "balances",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => uint256)",
                "value": null,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => uint256)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 968,
                      "name": "ElementaryTypeName",
                      "src": "329:7:2"
                    },
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 969,
                      "name": "ElementaryTypeName",
                      "src": "340:4:2"
                    }
                  ],
                  "id": 970,
                  "name": "Mapping",
                  "src": "321:24:2"
                }
              ],
              "id": 971,
              "name": "VariableDeclaration",
              "src": "321:33:2"
            },
            {
              "attributes": {
                "constant": false,
                "name": "allowed",
                "scope": 1358,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => mapping(address => uint256))",
                "value": null,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => mapping(address => uint256))"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 972,
                      "name": "ElementaryTypeName",
                      "src": "369:7:2"
                    },
                    {
                      "attributes": {
                        "type": "mapping(address => uint256)"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 973,
                          "name": "ElementaryTypeName",
                          "src": "388:7:2"
                        },
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 974,
                          "name": "ElementaryTypeName",
                          "src": "399:4:2"
                        }
                      ],
                      "id": 975,
                      "name": "Mapping",
                      "src": "380:24:2"
                    }
                  ],
                  "id": 976,
                  "name": "Mapping",
                  "src": "361:44:2"
                }
              ],
              "id": 977,
              "name": "VariableDeclaration",
              "src": "361:52:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": true,
                "modifiers": [
                  null
                ],
                "name": "",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 978,
                  "name": "ParameterList",
                  "src": "434:2:2"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 979,
                  "name": "ParameterList",
                  "src": "444:0:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "string storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 959,
                                "type": "string storage ref",
                                "value": "_symbol"
                              },
                              "id": 980,
                              "name": "Identifier",
                              "src": "455:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "44454d",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"DEM\"",
                                "value": "DEM"
                              },
                              "id": 981,
                              "name": "Literal",
                              "src": "465:5:2"
                            }
                          ],
                          "id": 982,
                          "name": "Assignment",
                          "src": "455:15:2"
                        }
                      ],
                      "id": 983,
                      "name": "ExpressionStatement",
                      "src": "455:15:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "string storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 961,
                                "type": "string storage ref",
                                "value": "_name"
                              },
                              "id": 984,
                              "name": "Identifier",
                              "src": "481:5:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "44656d756c61",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Demula\"",
                                "value": "Demula"
                              },
                              "id": 985,
                              "name": "Literal",
                              "src": "489:8:2"
                            }
                          ],
                          "id": 986,
                          "name": "Assignment",
                          "src": "481:16:2"
                        }
                      ],
                      "id": 987,
                      "name": "ExpressionStatement",
                      "src": "481:16:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint8"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 963,
                                "type": "uint8",
                                "value": "_decimals"
                              },
                              "id": 988,
                              "name": "Identifier",
                              "src": "508:9:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "3138",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 18",
                                "value": "18"
                              },
                              "id": 989,
                              "name": "Literal",
                              "src": "520:2:2"
                            }
                          ],
                          "id": 990,
                          "name": "Assignment",
                          "src": "508:14:2"
                        }
                      ],
                      "id": 991,
                      "name": "ExpressionStatement",
                      "src": "508:14:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 965,
                                "type": "uint256",
                                "value": "_totalSupply"
                              },
                              "id": 992,
                              "name": "Identifier",
                              "src": "533:12:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_100000000_by_1",
                                        "typeString": "int_const 100000000"
                                      },
                                      {
                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                        "typeString": "int_const 1000000000000000000"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1591,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeMul"
                                  },
                                  "id": 993,
                                  "name": "Identifier",
                                  "src": "548:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "313030303030303030",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 100000000",
                                    "value": "100000000"
                                  },
                                  "id": 994,
                                  "name": "Literal",
                                  "src": "556:9:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "31303030303030303030303030303030303030",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 1000000000000000000",
                                    "value": "1000000000000000000"
                                  },
                                  "id": 995,
                                  "name": "Literal",
                                  "src": "567:19:2"
                                }
                              ],
                              "id": 996,
                              "name": "FunctionCall",
                              "src": "548:39:2"
                            }
                          ],
                          "id": 997,
                          "name": "Assignment",
                          "src": "533:54:2"
                        }
                      ],
                      "id": 998,
                      "name": "ExpressionStatement",
                      "src": "533:54:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 967,
                                "type": "address",
                                "value": "Owner"
                              },
                              "id": 999,
                              "name": "Identifier",
                              "src": "598:5:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1629,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 1000,
                                  "name": "Identifier",
                                  "src": "606:3:2"
                                }
                              ],
                              "id": 1001,
                              "name": "MemberAccess",
                              "src": "606:10:2"
                            }
                          ],
                          "id": 1002,
                          "name": "Assignment",
                          "src": "598:18:2"
                        }
                      ],
                      "id": 1003,
                      "name": "ExpressionStatement",
                      "src": "598:18:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1004,
                                  "name": "Identifier",
                                  "src": "627:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 967,
                                    "type": "address",
                                    "value": "Owner"
                                  },
                                  "id": 1005,
                                  "name": "Identifier",
                                  "src": "636:5:2"
                                }
                              ],
                              "id": 1006,
                              "name": "IndexAccess",
                              "src": "627:15:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 965,
                                "type": "uint256",
                                "value": "_totalSupply"
                              },
                              "id": 1007,
                              "name": "Identifier",
                              "src": "645:12:2"
                            }
                          ],
                          "id": 1008,
                          "name": "Assignment",
                          "src": "627:30:2"
                        }
                      ],
                      "id": 1009,
                      "name": "ExpressionStatement",
                      "src": "627:30:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1436,
                                "type": "function (address,address,uint256)",
                                "value": "Transfer"
                              },
                              "id": 1010,
                              "name": "Identifier",
                              "src": "673:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "address",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "type(address)",
                                    "value": "address"
                                  },
                                  "id": 1011,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "682:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "30",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 0",
                                    "value": "0"
                                  },
                                  "id": 1012,
                                  "name": "Literal",
                                  "src": "690:1:2"
                                }
                              ],
                              "id": 1013,
                              "name": "FunctionCall",
                              "src": "682:10:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 967,
                                "type": "address",
                                "value": "Owner"
                              },
                              "id": 1014,
                              "name": "Identifier",
                              "src": "694:5:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 965,
                                "type": "uint256",
                                "value": "_totalSupply"
                              },
                              "id": 1015,
                              "name": "Identifier",
                              "src": "701:12:2"
                            }
                          ],
                          "id": 1016,
                          "name": "FunctionCall",
                          "src": "673:41:2"
                        }
                      ],
                      "id": 1017,
                      "name": "EmitStatement",
                      "src": "668:46:2"
                    }
                  ],
                  "id": 1018,
                  "name": "Block",
                  "src": "444:278:2"
                }
              ],
              "id": 1019,
              "name": "FunctionDefinition",
              "src": "423:299:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "name",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1020,
                  "name": "ParameterList",
                  "src": "741:2:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 1027,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 1021,
                          "name": "ElementaryTypeName",
                          "src": "771:6:2"
                        }
                      ],
                      "id": 1022,
                      "name": "VariableDeclaration",
                      "src": "771:6:2"
                    }
                  ],
                  "id": 1023,
                  "name": "ParameterList",
                  "src": "770:8:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1023
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 961,
                            "type": "string storage ref",
                            "value": "_name"
                          },
                          "id": 1024,
                          "name": "Identifier",
                          "src": "798:5:2"
                        }
                      ],
                      "id": 1025,
                      "name": "Return",
                      "src": "791:12:2"
                    }
                  ],
                  "id": 1026,
                  "name": "Block",
                  "src": "779:32:2"
                }
              ],
              "id": 1027,
              "name": "FunctionDefinition",
              "src": "728:83:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "symbol",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1028,
                  "name": "ParameterList",
                  "src": "832:2:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 1035,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 1029,
                          "name": "ElementaryTypeName",
                          "src": "862:6:2"
                        }
                      ],
                      "id": 1030,
                      "name": "VariableDeclaration",
                      "src": "862:6:2"
                    }
                  ],
                  "id": 1031,
                  "name": "ParameterList",
                  "src": "861:8:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1031
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 959,
                            "type": "string storage ref",
                            "value": "_symbol"
                          },
                          "id": 1032,
                          "name": "Identifier",
                          "src": "889:7:2"
                        }
                      ],
                      "id": 1033,
                      "name": "Return",
                      "src": "882:14:2"
                    }
                  ],
                  "id": 1034,
                  "name": "Block",
                  "src": "870:34:2"
                }
              ],
              "id": 1035,
              "name": "FunctionDefinition",
              "src": "817:87:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "decimals",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1036,
                  "name": "ParameterList",
                  "src": "927:2:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 1043,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1037,
                          "name": "ElementaryTypeName",
                          "src": "957:4:2"
                        }
                      ],
                      "id": 1038,
                      "name": "VariableDeclaration",
                      "src": "957:4:2"
                    }
                  ],
                  "id": 1039,
                  "name": "ParameterList",
                  "src": "956:6:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1039
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 963,
                            "type": "uint8",
                            "value": "_decimals"
                          },
                          "id": 1040,
                          "name": "Identifier",
                          "src": "982:9:2"
                        }
                      ],
                      "id": 1041,
                      "name": "Return",
                      "src": "975:16:2"
                    }
                  ],
                  "id": 1042,
                  "name": "Block",
                  "src": "963:36:2"
                }
              ],
              "id": 1043,
              "name": "FunctionDefinition",
              "src": "910:89:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "totalSupply",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": 1365,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1044,
                  "name": "ParameterList",
                  "src": "1025:2:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 1051,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1045,
                          "name": "ElementaryTypeName",
                          "src": "1053:4:2"
                        }
                      ],
                      "id": 1046,
                      "name": "VariableDeclaration",
                      "src": "1053:4:2"
                    }
                  ],
                  "id": 1047,
                  "name": "ParameterList",
                  "src": "1052:6:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1047
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 965,
                            "type": "uint256",
                            "value": "_totalSupply"
                          },
                          "id": 1048,
                          "name": "Identifier",
                          "src": "1078:12:2"
                        }
                      ],
                      "id": 1049,
                      "name": "Return",
                      "src": "1071:19:2"
                    }
                  ],
                  "id": 1050,
                  "name": "Block",
                  "src": "1059:39:2"
                }
              ],
              "id": 1051,
              "name": "FunctionDefinition",
              "src": "1005:93:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "balanceOf",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": 1372,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokenOwner",
                        "scope": 1063,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1052,
                          "name": "ElementaryTypeName",
                          "src": "1123:7:2"
                        }
                      ],
                      "id": 1053,
                      "name": "VariableDeclaration",
                      "src": "1123:18:2"
                    }
                  ],
                  "id": 1054,
                  "name": "ParameterList",
                  "src": "1122:20:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "balance",
                        "scope": 1063,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1055,
                          "name": "ElementaryTypeName",
                          "src": "1168:4:2"
                        }
                      ],
                      "id": 1056,
                      "name": "VariableDeclaration",
                      "src": "1168:12:2"
                    }
                  ],
                  "id": 1057,
                  "name": "ParameterList",
                  "src": "1167:14:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1057
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 971,
                                "type": "mapping(address => uint256)",
                                "value": "balances"
                              },
                              "id": 1058,
                              "name": "Identifier",
                              "src": "1200:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1053,
                                "type": "address",
                                "value": "tokenOwner"
                              },
                              "id": 1059,
                              "name": "Identifier",
                              "src": "1209:10:2"
                            }
                          ],
                          "id": 1060,
                          "name": "IndexAccess",
                          "src": "1200:20:2"
                        }
                      ],
                      "id": 1061,
                      "name": "Return",
                      "src": "1193:27:2"
                    }
                  ],
                  "id": 1062,
                  "name": "Block",
                  "src": "1182:46:2"
                }
              ],
              "id": 1063,
              "name": "FunctionDefinition",
              "src": "1104:124:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "transfer",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": 1390,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "to",
                        "scope": 1106,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1064,
                          "name": "ElementaryTypeName",
                          "src": "1255:7:2"
                        }
                      ],
                      "id": 1065,
                      "name": "VariableDeclaration",
                      "src": "1255:10:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokens",
                        "scope": 1106,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1066,
                          "name": "ElementaryTypeName",
                          "src": "1267:4:2"
                        }
                      ],
                      "id": 1067,
                      "name": "VariableDeclaration",
                      "src": "1267:11:2"
                    }
                  ],
                  "id": 1068,
                  "name": "ParameterList",
                  "src": "1254:25:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 1106,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 1069,
                          "name": "ElementaryTypeName",
                          "src": "1296:4:2"
                        }
                      ],
                      "id": 1070,
                      "name": "VariableDeclaration",
                      "src": "1296:12:2"
                    }
                  ],
                  "id": 1071,
                  "name": "ParameterList",
                  "src": "1295:14:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1072,
                                  "name": "Identifier",
                                  "src": "1321:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1629,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 1073,
                                      "name": "Identifier",
                                      "src": "1330:3:2"
                                    }
                                  ],
                                  "id": 1074,
                                  "name": "MemberAccess",
                                  "src": "1330:10:2"
                                }
                              ],
                              "id": 1075,
                              "name": "IndexAccess",
                              "src": "1321:20:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1563,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeSub"
                                  },
                                  "id": 1076,
                                  "name": "Identifier",
                                  "src": "1344:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1077,
                                      "name": "Identifier",
                                      "src": "1352:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 1629,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 1078,
                                          "name": "Identifier",
                                          "src": "1361:3:2"
                                        }
                                      ],
                                      "id": 1079,
                                      "name": "MemberAccess",
                                      "src": "1361:10:2"
                                    }
                                  ],
                                  "id": 1080,
                                  "name": "IndexAccess",
                                  "src": "1352:20:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1067,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1081,
                                  "name": "Identifier",
                                  "src": "1374:6:2"
                                }
                              ],
                              "id": 1082,
                              "name": "FunctionCall",
                              "src": "1344:37:2"
                            }
                          ],
                          "id": 1083,
                          "name": "Assignment",
                          "src": "1321:60:2"
                        }
                      ],
                      "id": 1084,
                      "name": "ExpressionStatement",
                      "src": "1321:60:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1085,
                                  "name": "Identifier",
                                  "src": "1392:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1065,
                                    "type": "address",
                                    "value": "to"
                                  },
                                  "id": 1086,
                                  "name": "Identifier",
                                  "src": "1401:2:2"
                                }
                              ],
                              "id": 1087,
                              "name": "IndexAccess",
                              "src": "1392:12:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1541,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeAdd"
                                  },
                                  "id": 1088,
                                  "name": "Identifier",
                                  "src": "1407:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1089,
                                      "name": "Identifier",
                                      "src": "1415:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1065,
                                        "type": "address",
                                        "value": "to"
                                      },
                                      "id": 1090,
                                      "name": "Identifier",
                                      "src": "1424:2:2"
                                    }
                                  ],
                                  "id": 1091,
                                  "name": "IndexAccess",
                                  "src": "1415:12:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1067,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1092,
                                  "name": "Identifier",
                                  "src": "1429:6:2"
                                }
                              ],
                              "id": 1093,
                              "name": "FunctionCall",
                              "src": "1407:29:2"
                            }
                          ],
                          "id": 1094,
                          "name": "Assignment",
                          "src": "1392:44:2"
                        }
                      ],
                      "id": 1095,
                      "name": "ExpressionStatement",
                      "src": "1392:44:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1436,
                                "type": "function (address,address,uint256)",
                                "value": "Transfer"
                              },
                              "id": 1096,
                              "name": "Identifier",
                              "src": "1452:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1629,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 1097,
                                  "name": "Identifier",
                                  "src": "1461:3:2"
                                }
                              ],
                              "id": 1098,
                              "name": "MemberAccess",
                              "src": "1461:10:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1065,
                                "type": "address",
                                "value": "to"
                              },
                              "id": 1099,
                              "name": "Identifier",
                              "src": "1473:2:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1067,
                                "type": "uint256",
                                "value": "tokens"
                              },
                              "id": 1100,
                              "name": "Identifier",
                              "src": "1477:6:2"
                            }
                          ],
                          "id": 1101,
                          "name": "FunctionCall",
                          "src": "1452:32:2"
                        }
                      ],
                      "id": 1102,
                      "name": "EmitStatement",
                      "src": "1447:37:2"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 1071
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 1103,
                          "name": "Literal",
                          "src": "1502:4:2"
                        }
                      ],
                      "id": 1104,
                      "name": "Return",
                      "src": "1495:11:2"
                    }
                  ],
                  "id": 1105,
                  "name": "Block",
                  "src": "1310:204:2"
                }
              ],
              "id": 1106,
              "name": "FunctionDefinition",
              "src": "1237:277:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "approve",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": 1399,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "spender",
                        "scope": 1134,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1107,
                          "name": "ElementaryTypeName",
                          "src": "1537:7:2"
                        }
                      ],
                      "id": 1108,
                      "name": "VariableDeclaration",
                      "src": "1537:15:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokens",
                        "scope": 1134,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1109,
                          "name": "ElementaryTypeName",
                          "src": "1554:4:2"
                        }
                      ],
                      "id": 1110,
                      "name": "VariableDeclaration",
                      "src": "1554:11:2"
                    }
                  ],
                  "id": 1111,
                  "name": "ParameterList",
                  "src": "1536:30:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 1134,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 1112,
                          "name": "ElementaryTypeName",
                          "src": "1583:4:2"
                        }
                      ],
                      "id": 1113,
                      "name": "VariableDeclaration",
                      "src": "1583:12:2"
                    }
                  ],
                  "id": 1114,
                  "name": "ParameterList",
                  "src": "1582:14:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "mapping(address => uint256)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 977,
                                        "type": "mapping(address => mapping(address => uint256))",
                                        "value": "allowed"
                                      },
                                      "id": 1115,
                                      "name": "Identifier",
                                      "src": "1608:7:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 1629,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 1116,
                                          "name": "Identifier",
                                          "src": "1616:3:2"
                                        }
                                      ],
                                      "id": 1117,
                                      "name": "MemberAccess",
                                      "src": "1616:10:2"
                                    }
                                  ],
                                  "id": 1119,
                                  "name": "IndexAccess",
                                  "src": "1608:19:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1108,
                                    "type": "address",
                                    "value": "spender"
                                  },
                                  "id": 1118,
                                  "name": "Identifier",
                                  "src": "1628:7:2"
                                }
                              ],
                              "id": 1120,
                              "name": "IndexAccess",
                              "src": "1608:28:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1110,
                                "type": "uint256",
                                "value": "tokens"
                              },
                              "id": 1121,
                              "name": "Identifier",
                              "src": "1639:6:2"
                            }
                          ],
                          "id": 1122,
                          "name": "Assignment",
                          "src": "1608:37:2"
                        }
                      ],
                      "id": 1123,
                      "name": "ExpressionStatement",
                      "src": "1608:37:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1444,
                                "type": "function (address,address,uint256)",
                                "value": "Approval"
                              },
                              "id": 1124,
                              "name": "Identifier",
                              "src": "1661:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1629,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 1125,
                                  "name": "Identifier",
                                  "src": "1670:3:2"
                                }
                              ],
                              "id": 1126,
                              "name": "MemberAccess",
                              "src": "1670:10:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1108,
                                "type": "address",
                                "value": "spender"
                              },
                              "id": 1127,
                              "name": "Identifier",
                              "src": "1682:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1110,
                                "type": "uint256",
                                "value": "tokens"
                              },
                              "id": 1128,
                              "name": "Identifier",
                              "src": "1691:6:2"
                            }
                          ],
                          "id": 1129,
                          "name": "FunctionCall",
                          "src": "1661:37:2"
                        }
                      ],
                      "id": 1130,
                      "name": "EmitStatement",
                      "src": "1656:42:2"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 1114
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 1131,
                          "name": "Literal",
                          "src": "1716:4:2"
                        }
                      ],
                      "id": 1132,
                      "name": "Return",
                      "src": "1709:11:2"
                    }
                  ],
                  "id": 1133,
                  "name": "Block",
                  "src": "1597:131:2"
                }
              ],
              "id": 1134,
              "name": "FunctionDefinition",
              "src": "1520:208:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "transferFrom",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": 1410,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "from",
                        "scope": 1203,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1135,
                          "name": "ElementaryTypeName",
                          "src": "1756:7:2"
                        }
                      ],
                      "id": 1136,
                      "name": "VariableDeclaration",
                      "src": "1756:12:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "to",
                        "scope": 1203,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1137,
                          "name": "ElementaryTypeName",
                          "src": "1770:7:2"
                        }
                      ],
                      "id": 1138,
                      "name": "VariableDeclaration",
                      "src": "1770:10:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokens",
                        "scope": 1203,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1139,
                          "name": "ElementaryTypeName",
                          "src": "1782:4:2"
                        }
                      ],
                      "id": 1140,
                      "name": "VariableDeclaration",
                      "src": "1782:11:2"
                    }
                  ],
                  "id": 1141,
                  "name": "ParameterList",
                  "src": "1755:39:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 1203,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 1142,
                          "name": "ElementaryTypeName",
                          "src": "1811:4:2"
                        }
                      ],
                      "id": 1143,
                      "name": "VariableDeclaration",
                      "src": "1811:12:2"
                    }
                  ],
                  "id": 1144,
                  "name": "ParameterList",
                  "src": "1810:14:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_3d61b3bdeaf176d082b31bfe58640a9bb4c3f07f111c4db93f76593d182655f2",
                                    "typeString": "literal_string \"Not enough allowance!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  1632,
                                  1633
                                ],
                                "referencedDeclaration": 1633,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 1145,
                              "name": "Identifier",
                              "src": "1836:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "type": "uint256",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          },
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          1320
                                        ],
                                        "referencedDeclaration": 1320,
                                        "type": "function (address,address) view returns (uint256)",
                                        "value": "allowance"
                                      },
                                      "id": 1146,
                                      "name": "Identifier",
                                      "src": "1844:9:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1136,
                                        "type": "address",
                                        "value": "from"
                                      },
                                      "id": 1147,
                                      "name": "Identifier",
                                      "src": "1854:4:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 1629,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 1148,
                                          "name": "Identifier",
                                          "src": "1860:3:2"
                                        }
                                      ],
                                      "id": 1149,
                                      "name": "MemberAccess",
                                      "src": "1860:10:2"
                                    }
                                  ],
                                  "id": 1150,
                                  "name": "FunctionCall",
                                  "src": "1844:27:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1140,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1151,
                                  "name": "Identifier",
                                  "src": "1873:6:2"
                                }
                              ],
                              "id": 1152,
                              "name": "BinaryOperation",
                              "src": "1844:35:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4e6f7420656e6f75676820616c6c6f77616e636521",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Not enough allowance!\"",
                                "value": "Not enough allowance!"
                              },
                              "id": 1153,
                              "name": "Literal",
                              "src": "1881:23:2"
                            }
                          ],
                          "id": 1154,
                          "name": "FunctionCall",
                          "src": "1836:69:2"
                        }
                      ],
                      "id": 1155,
                      "name": "ExpressionStatement",
                      "src": "1836:69:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1156,
                                  "name": "Identifier",
                                  "src": "1916:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1136,
                                    "type": "address",
                                    "value": "from"
                                  },
                                  "id": 1157,
                                  "name": "Identifier",
                                  "src": "1925:4:2"
                                }
                              ],
                              "id": 1158,
                              "name": "IndexAccess",
                              "src": "1916:14:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1563,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeSub"
                                  },
                                  "id": 1159,
                                  "name": "Identifier",
                                  "src": "1933:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1160,
                                      "name": "Identifier",
                                      "src": "1941:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1136,
                                        "type": "address",
                                        "value": "from"
                                      },
                                      "id": 1161,
                                      "name": "Identifier",
                                      "src": "1950:4:2"
                                    }
                                  ],
                                  "id": 1162,
                                  "name": "IndexAccess",
                                  "src": "1941:14:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1140,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1163,
                                  "name": "Identifier",
                                  "src": "1957:6:2"
                                }
                              ],
                              "id": 1164,
                              "name": "FunctionCall",
                              "src": "1933:31:2"
                            }
                          ],
                          "id": 1165,
                          "name": "Assignment",
                          "src": "1916:48:2"
                        }
                      ],
                      "id": 1166,
                      "name": "ExpressionStatement",
                      "src": "1916:48:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "mapping(address => uint256)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 977,
                                        "type": "mapping(address => mapping(address => uint256))",
                                        "value": "allowed"
                                      },
                                      "id": 1167,
                                      "name": "Identifier",
                                      "src": "1975:7:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1136,
                                        "type": "address",
                                        "value": "from"
                                      },
                                      "id": 1168,
                                      "name": "Identifier",
                                      "src": "1983:4:2"
                                    }
                                  ],
                                  "id": 1171,
                                  "name": "IndexAccess",
                                  "src": "1975:13:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1629,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 1169,
                                      "name": "Identifier",
                                      "src": "1989:3:2"
                                    }
                                  ],
                                  "id": 1170,
                                  "name": "MemberAccess",
                                  "src": "1989:10:2"
                                }
                              ],
                              "id": 1172,
                              "name": "IndexAccess",
                              "src": "1975:25:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1563,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeSub"
                                  },
                                  "id": 1173,
                                  "name": "Identifier",
                                  "src": "2003:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "type": "uint256",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          },
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          1320
                                        ],
                                        "referencedDeclaration": 1320,
                                        "type": "function (address,address) view returns (uint256)",
                                        "value": "allowance"
                                      },
                                      "id": 1174,
                                      "name": "Identifier",
                                      "src": "2011:9:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1136,
                                        "type": "address",
                                        "value": "from"
                                      },
                                      "id": 1175,
                                      "name": "Identifier",
                                      "src": "2021:4:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 1629,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 1176,
                                          "name": "Identifier",
                                          "src": "2027:3:2"
                                        }
                                      ],
                                      "id": 1177,
                                      "name": "MemberAccess",
                                      "src": "2027:10:2"
                                    }
                                  ],
                                  "id": 1178,
                                  "name": "FunctionCall",
                                  "src": "2011:27:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1140,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1179,
                                  "name": "Identifier",
                                  "src": "2040:6:2"
                                }
                              ],
                              "id": 1180,
                              "name": "FunctionCall",
                              "src": "2003:44:2"
                            }
                          ],
                          "id": 1181,
                          "name": "Assignment",
                          "src": "1975:72:2"
                        }
                      ],
                      "id": 1182,
                      "name": "ExpressionStatement",
                      "src": "1975:72:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1183,
                                  "name": "Identifier",
                                  "src": "2058:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1138,
                                    "type": "address",
                                    "value": "to"
                                  },
                                  "id": 1184,
                                  "name": "Identifier",
                                  "src": "2067:2:2"
                                }
                              ],
                              "id": 1185,
                              "name": "IndexAccess",
                              "src": "2058:12:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1541,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeAdd"
                                  },
                                  "id": 1186,
                                  "name": "Identifier",
                                  "src": "2073:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1187,
                                      "name": "Identifier",
                                      "src": "2081:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1138,
                                        "type": "address",
                                        "value": "to"
                                      },
                                      "id": 1188,
                                      "name": "Identifier",
                                      "src": "2090:2:2"
                                    }
                                  ],
                                  "id": 1189,
                                  "name": "IndexAccess",
                                  "src": "2081:12:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1140,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1190,
                                  "name": "Identifier",
                                  "src": "2095:6:2"
                                }
                              ],
                              "id": 1191,
                              "name": "FunctionCall",
                              "src": "2073:29:2"
                            }
                          ],
                          "id": 1192,
                          "name": "Assignment",
                          "src": "2058:44:2"
                        }
                      ],
                      "id": 1193,
                      "name": "ExpressionStatement",
                      "src": "2058:44:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1436,
                                "type": "function (address,address,uint256)",
                                "value": "Transfer"
                              },
                              "id": 1194,
                              "name": "Identifier",
                              "src": "2118:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1136,
                                "type": "address",
                                "value": "from"
                              },
                              "id": 1195,
                              "name": "Identifier",
                              "src": "2127:4:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1138,
                                "type": "address",
                                "value": "to"
                              },
                              "id": 1196,
                              "name": "Identifier",
                              "src": "2133:2:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1140,
                                "type": "uint256",
                                "value": "tokens"
                              },
                              "id": 1197,
                              "name": "Identifier",
                              "src": "2137:6:2"
                            }
                          ],
                          "id": 1198,
                          "name": "FunctionCall",
                          "src": "2118:26:2"
                        }
                      ],
                      "id": 1199,
                      "name": "EmitStatement",
                      "src": "2113:31:2"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 1144
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 1200,
                          "name": "Literal",
                          "src": "2162:4:2"
                        }
                      ],
                      "id": 1201,
                      "name": "Return",
                      "src": "2155:11:2"
                    }
                  ],
                  "id": 1202,
                  "name": "Block",
                  "src": "1825:349:2"
                }
              ],
              "id": 1203,
              "name": "FunctionDefinition",
              "src": "1734:440:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "burn",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": 1419,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "burner",
                        "scope": 1258,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1204,
                          "name": "ElementaryTypeName",
                          "src": "2194:7:2"
                        }
                      ],
                      "id": 1205,
                      "name": "VariableDeclaration",
                      "src": "2194:14:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokens",
                        "scope": 1258,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1206,
                          "name": "ElementaryTypeName",
                          "src": "2210:4:2"
                        }
                      ],
                      "id": 1207,
                      "name": "VariableDeclaration",
                      "src": "2210:11:2"
                    }
                  ],
                  "id": 1208,
                  "name": "ParameterList",
                  "src": "2193:29:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 1258,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 1209,
                          "name": "ElementaryTypeName",
                          "src": "2239:4:2"
                        }
                      ],
                      "id": 1210,
                      "name": "VariableDeclaration",
                      "src": "2239:12:2"
                    }
                  ],
                  "id": 1211,
                  "name": "ParameterList",
                  "src": "2238:14:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_a94943c13d351ba33277092cd0328f88a09212d1433f875f92ea78b0e08e6502",
                                    "typeString": "literal_string \"You can only burn your own Demula!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  1632,
                                  1633
                                ],
                                "referencedDeclaration": 1633,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 1212,
                              "name": "Identifier",
                              "src": "2264:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "==",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1629,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 1213,
                                      "name": "Identifier",
                                      "src": "2272:3:2"
                                    }
                                  ],
                                  "id": 1214,
                                  "name": "MemberAccess",
                                  "src": "2272:10:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1205,
                                    "type": "address",
                                    "value": "burner"
                                  },
                                  "id": 1215,
                                  "name": "Identifier",
                                  "src": "2284:6:2"
                                }
                              ],
                              "id": 1216,
                              "name": "BinaryOperation",
                              "src": "2272:18:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "596f752063616e206f6e6c79206275726e20796f7572206f776e2044656d756c6121",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"You can only burn your own Demula!\"",
                                "value": "You can only burn your own Demula!"
                              },
                              "id": 1217,
                              "name": "Literal",
                              "src": "2292:36:2"
                            }
                          ],
                          "id": 1218,
                          "name": "FunctionCall",
                          "src": "2264:65:2"
                        }
                      ],
                      "id": 1219,
                      "name": "ExpressionStatement",
                      "src": "2264:65:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_9152ca886bb2f73bca8152f9f635e156e190de6ef1084bcd5cd33753e2fefcf2",
                                    "typeString": "literal_string \"Not enough Demula!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  1632,
                                  1633
                                ],
                                "referencedDeclaration": 1633,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 1220,
                              "name": "Identifier",
                              "src": "2340:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1221,
                                      "name": "Identifier",
                                      "src": "2348:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1205,
                                        "type": "address",
                                        "value": "burner"
                                      },
                                      "id": 1222,
                                      "name": "Identifier",
                                      "src": "2357:6:2"
                                    }
                                  ],
                                  "id": 1223,
                                  "name": "IndexAccess",
                                  "src": "2348:16:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1207,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1224,
                                  "name": "Identifier",
                                  "src": "2366:6:2"
                                }
                              ],
                              "id": 1225,
                              "name": "BinaryOperation",
                              "src": "2348:24:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4e6f7420656e6f7567682044656d756c6121",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Not enough Demula!\"",
                                "value": "Not enough Demula!"
                              },
                              "id": 1226,
                              "name": "Literal",
                              "src": "2374:20:2"
                            }
                          ],
                          "id": 1227,
                          "name": "FunctionCall",
                          "src": "2340:55:2"
                        }
                      ],
                      "id": 1228,
                      "name": "ExpressionStatement",
                      "src": "2340:55:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1229,
                                  "name": "Identifier",
                                  "src": "2406:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1205,
                                    "type": "address",
                                    "value": "burner"
                                  },
                                  "id": 1230,
                                  "name": "Identifier",
                                  "src": "2415:6:2"
                                }
                              ],
                              "id": 1231,
                              "name": "IndexAccess",
                              "src": "2406:16:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1563,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeSub"
                                  },
                                  "id": 1232,
                                  "name": "Identifier",
                                  "src": "2425:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1233,
                                      "name": "Identifier",
                                      "src": "2433:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1205,
                                        "type": "address",
                                        "value": "burner"
                                      },
                                      "id": 1234,
                                      "name": "Identifier",
                                      "src": "2442:6:2"
                                    }
                                  ],
                                  "id": 1235,
                                  "name": "IndexAccess",
                                  "src": "2433:16:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1207,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1236,
                                  "name": "Identifier",
                                  "src": "2451:6:2"
                                }
                              ],
                              "id": 1237,
                              "name": "FunctionCall",
                              "src": "2425:33:2"
                            }
                          ],
                          "id": 1238,
                          "name": "Assignment",
                          "src": "2406:52:2"
                        }
                      ],
                      "id": 1239,
                      "name": "ExpressionStatement",
                      "src": "2406:52:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 965,
                                "type": "uint256",
                                "value": "_totalSupply"
                              },
                              "id": 1240,
                              "name": "Identifier",
                              "src": "2469:12:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1563,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeSub"
                                  },
                                  "id": 1241,
                                  "name": "Identifier",
                                  "src": "2484:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 965,
                                    "type": "uint256",
                                    "value": "_totalSupply"
                                  },
                                  "id": 1242,
                                  "name": "Identifier",
                                  "src": "2492:12:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1207,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1243,
                                  "name": "Identifier",
                                  "src": "2506:6:2"
                                }
                              ],
                              "id": 1244,
                              "name": "FunctionCall",
                              "src": "2484:29:2"
                            }
                          ],
                          "id": 1245,
                          "name": "Assignment",
                          "src": "2469:44:2"
                        }
                      ],
                      "id": 1246,
                      "name": "ExpressionStatement",
                      "src": "2469:44:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1436,
                                "type": "function (address,address,uint256)",
                                "value": "Transfer"
                              },
                              "id": 1247,
                              "name": "Identifier",
                              "src": "2529:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1205,
                                "type": "address",
                                "value": "burner"
                              },
                              "id": 1248,
                              "name": "Identifier",
                              "src": "2538:6:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "address",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "type(address)",
                                    "value": "address"
                                  },
                                  "id": 1249,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "2546:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "30",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 0",
                                    "value": "0"
                                  },
                                  "id": 1250,
                                  "name": "Literal",
                                  "src": "2554:1:2"
                                }
                              ],
                              "id": 1251,
                              "name": "FunctionCall",
                              "src": "2546:10:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1207,
                                "type": "uint256",
                                "value": "tokens"
                              },
                              "id": 1252,
                              "name": "Identifier",
                              "src": "2558:6:2"
                            }
                          ],
                          "id": 1253,
                          "name": "FunctionCall",
                          "src": "2529:36:2"
                        }
                      ],
                      "id": 1254,
                      "name": "EmitStatement",
                      "src": "2524:41:2"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 1211
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 1255,
                          "name": "Literal",
                          "src": "2583:4:2"
                        }
                      ],
                      "id": 1256,
                      "name": "Return",
                      "src": "2576:11:2"
                    }
                  ],
                  "id": 1257,
                  "name": "Block",
                  "src": "2253:342:2"
                }
              ],
              "id": 1258,
              "name": "FunctionDefinition",
              "src": "2180:415:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "mint",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": 1428,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "to",
                        "scope": 1304,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1259,
                          "name": "ElementaryTypeName",
                          "src": "2615:7:2"
                        }
                      ],
                      "id": 1260,
                      "name": "VariableDeclaration",
                      "src": "2615:10:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokens",
                        "scope": 1304,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1261,
                          "name": "ElementaryTypeName",
                          "src": "2627:4:2"
                        }
                      ],
                      "id": 1262,
                      "name": "VariableDeclaration",
                      "src": "2627:11:2"
                    }
                  ],
                  "id": 1263,
                  "name": "ParameterList",
                  "src": "2614:25:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 1304,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 1264,
                          "name": "ElementaryTypeName",
                          "src": "2656:4:2"
                        }
                      ],
                      "id": 1265,
                      "name": "VariableDeclaration",
                      "src": "2656:12:2"
                    }
                  ],
                  "id": 1266,
                  "name": "ParameterList",
                  "src": "2655:14:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_0e5c8fda9613e9f4e35d39c70f65c376fe2aa900802a86cc025c711db0c9b7c4",
                                    "typeString": "literal_string \"You are not the owner!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  1632,
                                  1633
                                ],
                                "referencedDeclaration": 1633,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 1267,
                              "name": "Identifier",
                              "src": "2681:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "==",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1629,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 1268,
                                      "name": "Identifier",
                                      "src": "2689:3:2"
                                    }
                                  ],
                                  "id": 1269,
                                  "name": "MemberAccess",
                                  "src": "2689:10:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 967,
                                    "type": "address",
                                    "value": "Owner"
                                  },
                                  "id": 1270,
                                  "name": "Identifier",
                                  "src": "2701:5:2"
                                }
                              ],
                              "id": 1271,
                              "name": "BinaryOperation",
                              "src": "2689:17:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "596f7520617265206e6f7420746865206f776e657221",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"You are not the owner!\"",
                                "value": "You are not the owner!"
                              },
                              "id": 1272,
                              "name": "Literal",
                              "src": "2708:24:2"
                            }
                          ],
                          "id": 1273,
                          "name": "FunctionCall",
                          "src": "2681:52:2"
                        }
                      ],
                      "id": 1274,
                      "name": "ExpressionStatement",
                      "src": "2681:52:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 971,
                                    "type": "mapping(address => uint256)",
                                    "value": "balances"
                                  },
                                  "id": 1275,
                                  "name": "Identifier",
                                  "src": "2744:8:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1260,
                                    "type": "address",
                                    "value": "to"
                                  },
                                  "id": 1276,
                                  "name": "Identifier",
                                  "src": "2753:2:2"
                                }
                              ],
                              "id": 1277,
                              "name": "IndexAccess",
                              "src": "2744:12:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1541,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeAdd"
                                  },
                                  "id": 1278,
                                  "name": "Identifier",
                                  "src": "2759:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 971,
                                        "type": "mapping(address => uint256)",
                                        "value": "balances"
                                      },
                                      "id": 1279,
                                      "name": "Identifier",
                                      "src": "2767:8:2"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1260,
                                        "type": "address",
                                        "value": "to"
                                      },
                                      "id": 1280,
                                      "name": "Identifier",
                                      "src": "2776:2:2"
                                    }
                                  ],
                                  "id": 1281,
                                  "name": "IndexAccess",
                                  "src": "2767:12:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1262,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1282,
                                  "name": "Identifier",
                                  "src": "2781:6:2"
                                }
                              ],
                              "id": 1283,
                              "name": "FunctionCall",
                              "src": "2759:29:2"
                            }
                          ],
                          "id": 1284,
                          "name": "Assignment",
                          "src": "2744:44:2"
                        }
                      ],
                      "id": 1285,
                      "name": "ExpressionStatement",
                      "src": "2744:44:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 965,
                                "type": "uint256",
                                "value": "_totalSupply"
                              },
                              "id": 1286,
                              "name": "Identifier",
                              "src": "2799:12:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "uint256",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1541,
                                    "type": "function (uint256,uint256) pure returns (uint256)",
                                    "value": "safeAdd"
                                  },
                                  "id": 1287,
                                  "name": "Identifier",
                                  "src": "2814:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 965,
                                    "type": "uint256",
                                    "value": "_totalSupply"
                                  },
                                  "id": 1288,
                                  "name": "Identifier",
                                  "src": "2822:12:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1262,
                                    "type": "uint256",
                                    "value": "tokens"
                                  },
                                  "id": 1289,
                                  "name": "Identifier",
                                  "src": "2836:6:2"
                                }
                              ],
                              "id": 1290,
                              "name": "FunctionCall",
                              "src": "2814:29:2"
                            }
                          ],
                          "id": 1291,
                          "name": "Assignment",
                          "src": "2799:44:2"
                        }
                      ],
                      "id": 1292,
                      "name": "ExpressionStatement",
                      "src": "2799:44:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1436,
                                "type": "function (address,address,uint256)",
                                "value": "Transfer"
                              },
                              "id": 1293,
                              "name": "Identifier",
                              "src": "2859:8:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "address",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "type(address)",
                                    "value": "address"
                                  },
                                  "id": 1294,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "2868:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "30",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 0",
                                    "value": "0"
                                  },
                                  "id": 1295,
                                  "name": "Literal",
                                  "src": "2876:1:2"
                                }
                              ],
                              "id": 1296,
                              "name": "FunctionCall",
                              "src": "2868:10:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1260,
                                "type": "address",
                                "value": "to"
                              },
                              "id": 1297,
                              "name": "Identifier",
                              "src": "2880:2:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1262,
                                "type": "uint256",
                                "value": "tokens"
                              },
                              "id": 1298,
                              "name": "Identifier",
                              "src": "2884:6:2"
                            }
                          ],
                          "id": 1299,
                          "name": "FunctionCall",
                          "src": "2859:32:2"
                        }
                      ],
                      "id": 1300,
                      "name": "EmitStatement",
                      "src": "2854:37:2"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 1266
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 1301,
                          "name": "Literal",
                          "src": "2909:4:2"
                        }
                      ],
                      "id": 1302,
                      "name": "Return",
                      "src": "2902:11:2"
                    }
                  ],
                  "id": 1303,
                  "name": "Block",
                  "src": "2670:251:2"
                }
              ],
              "id": 1304,
              "name": "FunctionDefinition",
              "src": "2601:320:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "allowance",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": 1381,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokenOwner",
                        "scope": 1320,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1305,
                          "name": "ElementaryTypeName",
                          "src": "2946:7:2"
                        }
                      ],
                      "id": 1306,
                      "name": "VariableDeclaration",
                      "src": "2946:18:2"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "spender",
                        "scope": 1320,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1307,
                          "name": "ElementaryTypeName",
                          "src": "2966:7:2"
                        }
                      ],
                      "id": 1308,
                      "name": "VariableDeclaration",
                      "src": "2966:15:2"
                    }
                  ],
                  "id": 1309,
                  "name": "ParameterList",
                  "src": "2945:37:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "remaining",
                        "scope": 1320,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 1310,
                          "name": "ElementaryTypeName",
                          "src": "3008:4:2"
                        }
                      ],
                      "id": 1311,
                      "name": "VariableDeclaration",
                      "src": "3008:14:2"
                    }
                  ],
                  "id": 1312,
                  "name": "ParameterList",
                  "src": "3007:16:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1312
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "mapping(address => uint256)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 977,
                                    "type": "mapping(address => mapping(address => uint256))",
                                    "value": "allowed"
                                  },
                                  "id": 1313,
                                  "name": "Identifier",
                                  "src": "3042:7:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 1306,
                                    "type": "address",
                                    "value": "tokenOwner"
                                  },
                                  "id": 1314,
                                  "name": "Identifier",
                                  "src": "3050:10:2"
                                }
                              ],
                              "id": 1315,
                              "name": "IndexAccess",
                              "src": "3042:19:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1308,
                                "type": "address",
                                "value": "spender"
                              },
                              "id": 1316,
                              "name": "Identifier",
                              "src": "3062:7:2"
                            }
                          ],
                          "id": 1317,
                          "name": "IndexAccess",
                          "src": "3042:28:2"
                        }
                      ],
                      "id": 1318,
                      "name": "Return",
                      "src": "3035:35:2"
                    }
                  ],
                  "id": 1319,
                  "name": "Block",
                  "src": "3024:54:2"
                }
              ],
              "id": 1320,
              "name": "FunctionDefinition",
              "src": "2927:151:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "transferOwnership",
                "payable": false,
                "scope": 1358,
                "stateMutability": "nonpayable",
                "superFunction": 1511,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "newOwner",
                        "scope": 1342,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1321,
                          "name": "ElementaryTypeName",
                          "src": "3111:7:2"
                        }
                      ],
                      "id": 1322,
                      "name": "VariableDeclaration",
                      "src": "3111:16:2"
                    }
                  ],
                  "id": 1323,
                  "name": "ParameterList",
                  "src": "3110:18:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 1342,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 1324,
                          "name": "ElementaryTypeName",
                          "src": "3145:4:2"
                        }
                      ],
                      "id": 1325,
                      "name": "VariableDeclaration",
                      "src": "3145:12:2"
                    }
                  ],
                  "id": 1326,
                  "name": "ParameterList",
                  "src": "3144:14:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_0e5c8fda9613e9f4e35d39c70f65c376fe2aa900802a86cc025c711db0c9b7c4",
                                    "typeString": "literal_string \"You are not the owner!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  1632,
                                  1633
                                ],
                                "referencedDeclaration": 1633,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 1327,
                              "name": "Identifier",
                              "src": "3176:7:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "==",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 1629,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 1328,
                                      "name": "Identifier",
                                      "src": "3184:3:2"
                                    }
                                  ],
                                  "id": 1329,
                                  "name": "MemberAccess",
                                  "src": "3184:10:2"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 967,
                                    "type": "address",
                                    "value": "Owner"
                                  },
                                  "id": 1330,
                                  "name": "Identifier",
                                  "src": "3196:5:2"
                                }
                              ],
                              "id": 1331,
                              "name": "BinaryOperation",
                              "src": "3184:17:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "596f7520617265206e6f7420746865206f776e657221",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"You are not the owner!\"",
                                "value": "You are not the owner!"
                              },
                              "id": 1332,
                              "name": "Literal",
                              "src": "3203:24:2"
                            }
                          ],
                          "id": 1333,
                          "name": "FunctionCall",
                          "src": "3176:52:2"
                        }
                      ],
                      "id": 1334,
                      "name": "ExpressionStatement",
                      "src": "3176:52:2"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 967,
                                "type": "address",
                                "value": "Owner"
                              },
                              "id": 1335,
                              "name": "Identifier",
                              "src": "3239:5:2"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1322,
                                "type": "address",
                                "value": "newOwner"
                              },
                              "id": 1336,
                              "name": "Identifier",
                              "src": "3247:8:2"
                            }
                          ],
                          "id": 1337,
                          "name": "Assignment",
                          "src": "3239:16:2"
                        }
                      ],
                      "id": 1338,
                      "name": "ExpressionStatement",
                      "src": "3239:16:2"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 1326
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 1339,
                          "name": "Literal",
                          "src": "3273:4:2"
                        }
                      ],
                      "id": 1340,
                      "name": "Return",
                      "src": "3266:11:2"
                    }
                  ],
                  "id": 1341,
                  "name": "Block",
                  "src": "3165:120:2"
                }
              ],
              "id": 1342,
              "name": "FunctionDefinition",
              "src": "3084:201:2"
            },
            {
              "attributes": {
                "constant": true,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "Owner",
                "payable": false,
                "scope": 1358,
                "stateMutability": "view",
                "superFunction": 1516,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1343,
                  "name": "ParameterList",
                  "src": "3305:2:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 1350,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 1344,
                          "name": "ElementaryTypeName",
                          "src": "3335:7:2"
                        }
                      ],
                      "id": 1345,
                      "name": "VariableDeclaration",
                      "src": "3335:7:2"
                    }
                  ],
                  "id": 1346,
                  "name": "ParameterList",
                  "src": "3334:9:2"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 1346
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 967,
                            "type": "address",
                            "value": "Owner"
                          },
                          "id": 1347,
                          "name": "Identifier",
                          "src": "3367:5:2"
                        }
                      ],
                      "id": 1348,
                      "name": "Return",
                      "src": "3360:12:2"
                    }
                  ],
                  "id": 1349,
                  "name": "Block",
                  "src": "3349:31:2"
                }
              ],
              "id": 1350,
              "name": "FunctionDefinition",
              "src": "3291:89:2"
            },
            {
              "attributes": {
                "constant": false,
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "modifiers": [
                  null
                ],
                "name": "",
                "payable": true,
                "scope": 1358,
                "stateMutability": "payable",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1351,
                  "name": "ParameterList",
                  "src": "3395:2:2"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 1352,
                  "name": "ParameterList",
                  "src": "3413:0:2"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "arguments": [
                              null
                            ],
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  null
                                ],
                                "overloadedDeclarations": [
                                  1634,
                                  1635
                                ],
                                "referencedDeclaration": 1634,
                                "type": "function () pure",
                                "value": "revert"
                              },
                              "id": 1353,
                              "name": "Identifier",
                              "src": "3424:6:2"
                            }
                          ],
                          "id": 1354,
                          "name": "FunctionCall",
                          "src": "3424:8:2"
                        }
                      ],
                      "id": 1355,
                      "name": "ExpressionStatement",
                      "src": "3424:8:2"
                    }
                  ],
                  "id": 1356,
                  "name": "Block",
                  "src": "3413:27:2"
                }
              ],
              "id": 1357,
              "name": "FunctionDefinition",
              "src": "3386:54:2"
            }
          ],
          "id": 1358,
          "name": "ContractDefinition",
          "src": "116:3327:2"
        }
      ],
      "id": 1359,
      "name": "SourceUnit",
      "src": "2:3441:2"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "tokenOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          }
        },
        "links": {},
        "address": "0xc023A1C0B56a8bEEd2B0a551d71c6C4C6efF1703",
        "transactionHash": "0xbe827969d99c957befc7a97e7d4b87cfc693ab738769293fbb7baa5e9ddf0548"
      }
    },
    "schemaVersion": "3.4.4",
    "updatedAt": "2022-08-10T00:42:25.164Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
}
const DemulaAddress = DemulaJSON.networks[5777].address;
const DemulaABI = [DemulaJSON];
const Demula = new web3.eth.Contract(DemulaABI, DemulaAddress);
async function GetBalance()
{
    var balance = await Demula.methods.decimals();
    return balance;
}
console.log(GetBalance());
export {DemulaAddress, DemulaABI, Demula};
