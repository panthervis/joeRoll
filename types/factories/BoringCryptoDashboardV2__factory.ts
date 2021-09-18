/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringCryptoDashboardV2 } from "../BoringCryptoDashboardV2";

export class BoringCryptoDashboardV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _chef: string,
    _pangolinFactory: string,
    _joeFactory: string,
    _wavax: string,
    overrides?: Overrides
  ): Promise<BoringCryptoDashboardV2> {
    return super.deploy(
      _chef,
      _pangolinFactory,
      _joeFactory,
      _wavax,
      overrides || {}
    ) as Promise<BoringCryptoDashboardV2>;
  }
  getDeployTransaction(
    _chef: string,
    _pangolinFactory: string,
    _joeFactory: string,
    _wavax: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _chef,
      _pangolinFactory,
      _joeFactory,
      _wavax,
      overrides || {}
    );
  }
  attach(address: string): BoringCryptoDashboardV2 {
    return super.attach(address) as BoringCryptoDashboardV2;
  }
  connect(signer: Signer): BoringCryptoDashboardV2__factory {
    return super.connect(signer) as BoringCryptoDashboardV2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringCryptoDashboardV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BoringCryptoDashboardV2;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_chef",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pangolinFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_joeFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wavax",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "findPools",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pid",
            type: "uint256",
          },
          {
            internalType: "contract IPair",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
        ],
        internalType: "struct BoringCryptoDashboardV2.PoolInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getAVAXRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "getPairsFull",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct BoringCryptoDashboardV2.PairFull[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "getPools",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalAllocPoint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolLength",
            type: "uint256",
          },
        ],
        internalType: "struct BoringCryptoDashboardV2.PoolsInfo",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "pid",
            type: "uint256",
          },
          {
            internalType: "contract IPair",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
        ],
        internalType: "struct BoringCryptoDashboardV2.PoolInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "pollPools",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpTotalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpAllowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "token0rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "token1rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pending",
            type: "uint256",
          },
        ],
        internalType: "struct BoringCryptoDashboardV2.UserPoolInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002111380380620021118339810160408190526200003491620000a6565b600080546001600160a01b039586166001600160a01b031991821617909155600180549486169482169490941790935560028054928516928416929092179091556003805491909316911617905562000106565b80516001600160a01b0381168114620000a057600080fd5b92915050565b60008060008060808587031215620000bc578384fd5b620000c8868662000088565b9350620000d9866020870162000088565b9250620000ea866040870162000088565b9150620000fb866060870162000088565b905092959194509250565b611ffb80620001166000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632952dde81461005c5780633009f414146100865780635f2bf94f146100a6578063ac6091f8146100c6578063d9116dc3146100e6575b600080fd5b61006f61006a366004611aef565b610106565b60405161007d929190611ef5565b60405180910390f35b610099610094366004611a9d565b6104f3565b60405161007d9190611dd1565b6100b96100b4366004611a4a565b610bab565b60405161007d9190611d1c565b6100d96100d4366004611a9d565b610f98565b60405161007d9190611db7565b6100f96100f4366004611a12565b6113c0565b60405161007d9190611f21565b61010e6118cf565b60606101186118cf565b60008054906101000a90046001600160a01b03166001600160a01b03166317caf6f16040518163ffffffff1660e01b815260040160206040518083038186803b15801561016457600080fd5b505afa158015610178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019c9190611b83565b8152600080546040805163040f1f6d60e11b815290516001600160a01b039092169163081e3eda91600480820192602092909190829003018186803b1580156101e457600080fd5b505afa1580156101f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021c9190611b83565b60208301819052905060608567ffffffffffffffff8111801561023e57600080fd5b5060405190808252806020026020018201604052801561027857816020015b6102656118e9565b81526020019060019003908161025d5790505b50905060005b868110156104e35787878281811061029257fe5b905060200201358282815181106102a557fe5b6020908102919091010151526000805481906001600160a01b0316631526fe278b8b868181106102d157fe5b905060200201356040518263ffffffff1660e01b81526004016102f49190611f21565b60806040518083038186803b15801561030c57600080fd5b505afa158015610320573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103449190611ab1565b50509150915060008290508085858151811061035c57fe5b6020026020010151602001906001600160a01b031690816001600160a01b0316815250508185858151811061038d57fe5b60200260200101516040018181525050806001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156103d657600080fd5b505afa1580156103ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040e9190611a2e565b85858151811061041a57fe5b6020026020010151606001906001600160a01b031690816001600160a01b031681525050806001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561047757600080fd5b505afa15801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af9190611a2e565b8585815181106104bb57fe5b60209081029190910101516001600160a01b039190911660809091015250505060010161027e565b50919350909150505b9250929050565b6060808267ffffffffffffffff8111801561050d57600080fd5b5060405190808252806020026020018201604052801561054757816020015b610534611917565b81526020019060019003908161052c5790505b50905060005b83811015610ba257600080546001600160a01b03166393f1a40b87878581811061057357fe5b90506020020135896040518363ffffffff1660e01b8152600401610598929190611f2a565b604080518083038186803b1580156105af57600080fd5b505afa1580156105c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e79190611c4c565b509050808383815181106105f757fe5b6020908102919091018101510152600080546001600160a01b031663ffcd426388888681811061062357fe5b905060200201358a6040518363ffffffff1660e01b8152600401610648929190611f2a565b60006040518083038186803b15801561066057600080fd5b505afa158015610674573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261069c9190810190611b9b565b5050509050808484815181106106ae57fe5b60209081029190910101516101600152600080546001600160a01b0316631526fe278989878181106106dc57fe5b905060200201356040518263ffffffff1660e01b81526004016106ff9190611f21565b60806040518083038186803b15801561071757600080fd5b505afa15801561072b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074f9190611ab1565b505050905087878581811061076057fe5b9050602002013585858151811061077357fe5b6020908102919091010151526000546040516370a0823160e01b815282916001600160a01b03808416926370a08231926107b1921690600401611cee565b60206040518083038186803b1580156107c957600080fd5b505afa1580156107dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108019190611b83565b86868151811061080d57fe5b60209081029190910101516040908101919091526000549051636eb1769f60e11b81526001600160a01b038084169263dd62ed3e92610852928f921690600401611d02565b60206040518083038186803b15801561086a57600080fd5b505afa15801561087e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a29190611b83565b8686815181106108ae57fe5b602090810291909101015160a001526040516370a0823160e01b81526001600160a01b038216906370a08231906108e9908d90600401611cee565b60206040518083038186803b15801561090157600080fd5b505afa158015610915573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109399190611b83565b86868151811061094557fe5b60200260200101516060018181525050806001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561098e57600080fd5b505afa1580156109a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c69190611b83565b8686815181106109d257fe5b60200260200101516080018181525050610a56816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1e57600080fd5b505afa158015610a32573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f49190611a2e565b868681518110610a6257fe5b6020026020010151610100018181525050610aaf816001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1e57600080fd5b868681518110610abb57fe5b6020026020010151610120018181525050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610b0857600080fd5b505afa158015610b1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b409190611b2f565b5091509150816001600160701b0316888881518110610b5b57fe5b602002602001015160c0018181525050806001600160701b0316888881518110610b8157fe5b602090810291909101015160e0015250506001909401935061054d92505050565b50949350505050565b6060808267ffffffffffffffff81118015610bc557600080fd5b50604051908082528060200260200182016040528015610bff57816020015b610bec611978565b815260200190600190039081610be45790505b50905060005b83811015610ba2576000858583818110610c1b57fe5b9050602002016020810190610c309190611a12565b905080838381518110610c3f57fe5b6020026020010151600001906001600160a01b031690816001600160a01b031681525050806001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610c9c57600080fd5b505afa158015610cb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd49190611a2e565b838381518110610ce057fe5b6020026020010151602001906001600160a01b031690816001600160a01b031681525050806001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610d3d57600080fd5b505afa158015610d51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d759190611a2e565b838381518110610d8157fe5b6020026020010151604001906001600160a01b031690816001600160a01b031681525050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610de157600080fd5b505afa158015610df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e199190611b2f565b506001600160701b031691506001600160701b0316915081858581518110610e3d57fe5b6020026020010151606001818152505080858581518110610e5a57fe5b6020908102919091010151608001526040516370a0823160e01b81526001600160a01b038416906370a0823190610e95908c90600401611cee565b60206040518083038186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee59190611b83565b858581518110610ef157fe5b602002602001015160c0018181525050826001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3a57600080fd5b505afa158015610f4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f729190611b83565b858581518110610f7e57fe5b602090810291909101015160a00152505050600101610c05565b60606000805b8381101561105157600080546001600160a01b03166393f1a40b878785818110610fc457fe5b90506020020135896040518363ffffffff1660e01b8152600401610fe9929190611f2a565b604080518083038186803b15801561100057600080fd5b505afa158015611014573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110389190611c4c565b5090508015611048576001909201915b50600101610f9e565b5060608167ffffffffffffffff8111801561106b57600080fd5b506040519080825280602002602001820160405280156110a557816020015b6110926118e9565b81526020019060019003908161108a5790505b5090506000915060005b848110156113b657600080546001600160a01b03166393f1a40b8888858181106110d557fe5b905060200201358a6040518363ffffffff1660e01b81526004016110fa929190611f2a565b604080518083038186803b15801561111157600080fd5b505afa158015611125573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111499190611c4c565b50905080156113ad5786868381811061115e57fe5b9050602002013583858151811061117157fe5b6020908102919091010151526000805481906001600160a01b0316631526fe278a8a8781811061119d57fe5b905060200201356040518263ffffffff1660e01b81526004016111c09190611f21565b60806040518083038186803b1580156111d857600080fd5b505afa1580156111ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112109190611ab1565b50509150915060008290508086888151811061122857fe5b6020026020010151602001906001600160a01b031690816001600160a01b0316815250508186888151811061125957fe5b60200260200101516040018181525050806001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156112a257600080fd5b505afa1580156112b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112da9190611a2e565b8688815181106112e657fe5b6020026020010151606001906001600160a01b031690816001600160a01b031681525050806001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561134357600080fd5b505afa158015611357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137b9190611a2e565b86888151811061138757fe5b60209081029190910101516001600160a01b039091166080909101525050600190940193505b506001016110af565b5095945050505050565b600354600090670de0b6b3a7640000906001600160a01b038481169116146118495760015460035460405163e6a4390560e01b815260009283926001600160a01b039182169263e6a439059261141d928a92911690600401611d02565b60206040518083038186803b15801561143557600080fd5b505afa158015611449573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146d9190611a2e565b60025460035460405163e6a4390560e01b81529294506001600160a01b039182169263e6a43905926114a6928a92911690600401611d02565b60206040518083038186803b1580156114be57600080fd5b505afa1580156114d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f69190611a2e565b90506001600160a01b03821615801561151657506001600160a01b038116155b15611527576000935050505061184c565b60008080806001600160a01b038616156115b357856001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561157457600080fd5b505afa158015611588573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ac9190611b2f565b5090945092505b6001600160a01b0385161561163a57846001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156115fb57600080fd5b505afa15801561160f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116339190611b2f565b5090925090505b6001600160a01b03851615806116615750816001600160701b0316846001600160701b0316115b8061167d5750806001600160701b0316836001600160701b0316115b1561176b5760035460408051630dfe168160e01b815290516001600160a01b0392831692891691630dfe1681916004808301926020929190829003018186803b1580156116c957600080fd5b505afa1580156116dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117019190611a2e565b6001600160a01b03161415611740576117396001600160701b0380861690611733908616670de0b6b3a7640000611851565b9061189d565b9650611766565b6117636001600160701b0380851690611733908716670de0b6b3a7640000611851565b96505b611842565b60035460408051630dfe168160e01b815290516001600160a01b0392831692881691630dfe1681916004808301926020929190829003018186803b1580156117b257600080fd5b505afa1580156117c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ea9190611a2e565b6001600160a01b0316141561181c576117636001600160701b0380841690611733908416670de0b6b3a7640000611851565b61183f6001600160701b0380831690611733908516670de0b6b3a7640000611851565b96505b5050505050505b90505b919050565b60008261186057506000611897565b8282028284828161186d57fe5b04146118945760405162461bcd60e51b815260040161188b90611eb4565b60405180910390fd5b90505b92915050565b60008082116118be5760405162461bcd60e51b815260040161188b90611e7d565b8183816118c757fe5b049392505050565b604051806040016040528060008152602001600081525090565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b60008083601f8401126119e1578182fd5b50813567ffffffffffffffff8111156119f8578182fd5b60208301915083602080830285010111156104ec57600080fd5b600060208284031215611a23578081fd5b813561189481611f98565b600060208284031215611a3f578081fd5b815161189481611f98565b600080600060408486031215611a5e578182fd5b8335611a6981611f98565b9250602084013567ffffffffffffffff811115611a84578283fd5b611a90868287016119d0565b9497909650939450505050565b600080600060408486031215611a5e578283fd5b60008060008060808587031215611ac6578081fd5b8451611ad181611f98565b60208601516040870151606090970151919890975090945092505050565b60008060208385031215611b01578182fd5b823567ffffffffffffffff811115611b17578283fd5b611b23858286016119d0565b90969095509350505050565b600080600060608486031215611b43578283fd5b8351611b4e81611fb0565b6020850151909350611b5f81611fb0565b604085015190925063ffffffff81168114611b78578182fd5b809150509250925092565b600060208284031215611b94578081fd5b5051919050565b60008060008060808587031215611bb0578384fd5b845193506020850151611bc281611f98565b604086015190935067ffffffffffffffff80821115611bdf578384fd5b818701915087601f830112611bf2578384fd5b815181811115611c00578485fd5b611c13601f8201601f1916602001611f41565b9150808252886020828501011115611c29578485fd5b611c3a816020840160208601611f68565b50606096909601519497939650505050565b60008060408385031215611c5e578182fd5b505080516020909101519092909150565b6001600160a01b03169052565b6000815180845260208085019450808401835b83811015611ce357815180518852838101516001600160a01b03908116858a0152604080830151908a01526060808301518216908a0152608091820151169088015260a09096019590820190600101611c8f565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b602080825282518282018190526000919060409081850190868401855b82811015611daa578151611d4e858251611c6f565b86810151611d5e88870182611c6f565b5085810151611d6f87870182611c6f565b50606081810151908601526080808201519086015260a0808201519086015260c0908101519085015260e09093019290850190600101611d39565b5091979650505050505050565b600060208252611dca6020830184611c7c565b9392505050565b602080825282518282018190526000919060409081850190868401855b82811015611daa5781518051855286810151878601528581015186860152606080820151908601526080808201519086015260a0808201519086015260c0808201519086015260e0808201519086015261010080820151908601526101208082015190860152610140808201519086015261016090810151908501526101809093019290850190600101611dee565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6000835182526020840151602083015260606040830152611f196060830184611c7c565b949350505050565b90815260200190565b9182526001600160a01b0316602082015260400190565b60405181810167ffffffffffffffff81118282101715611f6057600080fd5b604052919050565b60005b83811015611f83578181015183820152602001611f6b565b83811115611f92576000848401525b50505050565b6001600160a01b0381168114611fad57600080fd5b50565b6001600160701b0381168114611fad57600080fdfea264697066735822122011cf4dbf0ee11889e1ed48639fcf22548ecebb6ca1fc1ff0aaac22da4688911f64736f6c634300060c0033";