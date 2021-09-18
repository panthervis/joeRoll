/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringCryptoTokenScanner } from "../BoringCryptoTokenScanner";

export class BoringCryptoTokenScanner__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringCryptoTokenScanner> {
    return super.deploy(overrides || {}) as Promise<BoringCryptoTokenScanner>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringCryptoTokenScanner {
    return super.attach(address) as BoringCryptoTokenScanner;
  }
  connect(signer: Signer): BoringCryptoTokenScanner__factory {
    return super.connect(signer) as BoringCryptoTokenScanner__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringCryptoTokenScanner {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BoringCryptoTokenScanner;
  }
}

const _abi = [
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
    name: "findBalances",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct BoringCryptoTokenScanner.Balance[]",
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
        internalType: "contract IFactory",
        name: "factory",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toID",
        type: "uint256",
      },
    ],
    name: "findPairs",
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
        ],
        internalType: "struct BoringCryptoTokenScanner.Pair[]",
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
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "contract IFactory",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
        ],
        internalType: "struct BoringCryptoTokenScanner.BalanceFull[]",
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
        internalType: "contract IFactory[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "getFactoryInfo",
    outputs: [
      {
        components: [
          {
            internalType: "contract IFactory",
            name: "factory",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "allPairsLength",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeToSetter",
            type: "address",
          },
        ],
        internalType: "struct BoringCryptoTokenScanner.Factory[]",
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
        internalType: "contract IFactory",
        name: "factory",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toID",
        type: "uint256",
      },
    ],
    name: "getPairs",
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
        ],
        internalType: "struct BoringCryptoTokenScanner.Pair[]",
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
        internalType: "struct BoringCryptoTokenScanner.PairFull[]",
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
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "getTokenInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
        ],
        internalType: "struct BoringCryptoTokenScanner.TokenInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611f52806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635f2bf94f1161005b5780635f2bf94f146100eb5780637e3e25961461010b578063ca0f937c1461012b578063d80f01701461014b5761007d565b806303656f71146100825780633dea3ce5146100ab5780634a69ac50146100cb575b600080fd5b61009561009036600461197b565b61015e565b6040516100a29190611c10565b60405180910390f35b6100be6100b9366004611a3b565b61052b565b6040516100a29190611cbd565b6100de6100d9366004611a3b565b6107bb565b6040516100a29190611e06565b6100fe6100f9366004611928565b610a27565b6040516100a29190611d22565b61011e610119366004611a7b565b610d90565b6040516100a29190611dab565b61013e610139366004611928565b61106a565b6040516100a29190611c72565b61011e6101593660046119f6565b61130b565b6060808467ffffffffffffffff8111801561017857600080fd5b506040519080825280602002602001820160405280156101b257816020015b61019f61178f565b8152602001906001900390816101975790505b50905060005b858110156105205760008787838181106101ce57fe5b90506020020160208101906101e391906118e9565b9050808383815181106101f257fe5b60209081029190910101516001600160a01b0391821690526040516370a0823160e01b8152908216906370a082319061022f908c90600401611be2565b60206040518083038186803b15801561024757600080fd5b505afa15801561025b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027f9190611b9e565b83838151811061028b57fe5b602002602001015160200181815250506000866001600160a01b031663e6a439058a8a868181106102b857fe5b90506020020160208101906102cd91906118e9565b886040518363ffffffff1660e01b81526004016102eb929190611bf6565b60206040518083038186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b919061190c565b90506001600160a01b0381161561051657600080876001600160a01b0316836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561039257600080fd5b505afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca919061190c565b6001600160a01b0316141561046057826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561041257600080fd5b505afa158015610426573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044a9190611b4a565b506001600160701b0391821693501690506104e3565b826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561049957600080fd5b505afa1580156104ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d19190611b4a565b506001600160701b0390811693501690505b8181670de0b6b3a764000002816104f657fe5b0486868151811061050357fe5b6020026020010151604001818152505050505b50506001016101b8565b509695505050505050565b6060808267ffffffffffffffff8111801561054557600080fd5b5060405190808252806020026020018201604052801561057f57816020015b61056c6117b9565b8152602001906001900390816105645790505b50905060005b838110156107b357600085858381811061059b57fe5b90506020020160208101906105b091906118e9565b9050808383815181106105bf57fe5b6020026020010151600001906001600160a01b031690816001600160a01b031681525050806001600160a01b031663574f2ba36040518163ffffffff1660e01b815260040160206040518083038186803b15801561061c57600080fd5b505afa158015610630573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106549190611b9e565b83838151811061066057fe5b60200260200101516020018181525050806001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a957600080fd5b505afa1580156106bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e1919061190c565b8383815181106106ed57fe5b6020026020010151604001906001600160a01b031690816001600160a01b031681525050806001600160a01b031663094b74156040518163ffffffff1660e01b815260040160206040518083038186803b15801561074a57600080fd5b505afa15801561075e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610782919061190c565b83838151811061078e57fe5b60209081029190910101516001600160a01b0390911660609091015250600101610585565b509392505050565b6060808267ffffffffffffffff811180156107d557600080fd5b5060405190808252806020026020018201604052801561080f57816020015b6107fc6117e0565b8152602001906001900390816107f45790505b50905060005b838110156107b357600085858381811061082b57fe5b905060200201602081019061084091906118e9565b90508083838151811061084f57fe5b6020026020010151600001906001600160a01b031690816001600160a01b031681525050806001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156108ac57600080fd5b505afa1580156108c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108e89190810190611aaf565b8383815181106108f457fe5b602002602001015160400181905250806001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561093c57600080fd5b505afa158015610950573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109789190810190611aaf565b83838151811061098457fe5b602002602001015160600181905250806001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156109cc57600080fd5b505afa1580156109e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a049190611b9e565b838381518110610a1057fe5b602090810291909101810151015250600101610815565b6060808267ffffffffffffffff81118015610a4157600080fd5b50604051908082528060200260200182016040528015610a7b57816020015b610a68611811565b815260200190600190039081610a605790505b50905060005b83811015610d87576000858583818110610a9757fe5b9050602002016020810190610aac91906118e9565b905080838381518110610abb57fe5b6020026020010151600001906001600160a01b031690816001600160a01b031681525050806001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1857600080fd5b505afa158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b50919061190c565b838381518110610b5c57fe5b6020026020010151602001906001600160a01b031690816001600160a01b031681525050806001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610bb957600080fd5b505afa158015610bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf1919061190c565b838381518110610bfd57fe5b6020026020010151604001906001600160a01b031690816001600160a01b031681525050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610c5d57600080fd5b505afa158015610c71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c959190611b4a565b506001600160701b031691506001600160701b0316915081858581518110610cb957fe5b6020026020010151606001818152505080858581518110610cd657fe5b6020908102919091010151608001526040516370a0823160e01b81526001600160a01b038416906370a0823190610d11908c90600401611be2565b60206040518083038186803b158015610d2957600080fd5b505afa158015610d3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d619190611b9e565b858581518110610d6d57fe5b602090810291909101015160c00152505050600101610a81565b50949350505050565b606081610e0b57836001600160a01b031663574f2ba36040518163ffffffff1660e01b815260040160206040518083038186803b158015610dd057600080fd5b505afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190611b9e565b91505b606083830367ffffffffffffffff81118015610e2657600080fd5b50604051908082528060200260200182016040528015610e6057816020015b610e4d611869565b815260200190600190039081610e455790505b509050835b83811015610d8757604051631e3dd18b60e01b81526000906001600160a01b03881690631e3dd18b90610e9c908590600401611eaa565b60206040518083038186803b158015610eb457600080fd5b505afa158015610ec8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eec919061190c565b90506000868303905081848281518110610f0257fe5b6020026020010151600001906001600160a01b031690816001600160a01b031681525050816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610f5f57600080fd5b505afa158015610f73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f97919061190c565b848281518110610fa357fe5b6020026020010151602001906001600160a01b031690816001600160a01b031681525050816001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561100057600080fd5b505afa158015611014573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611038919061190c565b84828151811061104457fe5b60209081029190910101516001600160a01b039091166040909101525050600101610e65565b60606000805b8381101561112b57600085858381811061108657fe5b905060200201602081019061109b91906118e9565b6001600160a01b03166370a08231886040518263ffffffff1660e01b81526004016110c69190611be2565b60206040518083038186803b1580156110de57600080fd5b505afa1580156110f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111169190611b9e565b1115611123576001909101905b600101611070565b5060608167ffffffffffffffff8111801561114557600080fd5b5060405190808252806020026020018201604052801561117f57816020015b61116c611889565b8152602001906001900390816111645790505b5090506000915060005b8481101561130157600086868381811061119f57fe5b90506020020160208101906111b491906118e9565b90506000816001600160a01b03166370a082318a6040518263ffffffff1660e01b81526004016111e49190611be2565b60206040518083038186803b1580156111fc57600080fd5b505afa158015611210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112349190611b9e565b905080156112f7578184868151811061124957fe5b60209081029190910101516001600160a01b0391821690526040516370a0823160e01b8152908316906370a0823190611286908c90600401611be2565b60206040518083038186803b15801561129e57600080fd5b505afa1580156112b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d69190611b9e565b8486815181106112e257fe5b60209081029190910181015101526001909401935b5050600101611189565b5095945050505050565b60608161138657836001600160a01b031663574f2ba36040518163ffffffff1660e01b815260040160206040518083038186803b15801561134b57600080fd5b505afa15801561135f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113839190611b9e565b91505b6000835b838110156114a757604051631e3dd18b60e01b81526000906001600160a01b03881690631e3dd18b906113c1908590600401611eaa565b60206040518083038186803b1580156113d957600080fd5b505afa1580156113ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611411919061190c565b90506000816001600160a01b03166370a082318a6040518263ffffffff1660e01b81526004016114419190611be2565b60206040518083038186803b15801561145957600080fd5b505afa15801561146d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114919190611b9e565b111561149e576001909201915b5060010161138a565b5060608167ffffffffffffffff811180156114c157600080fd5b506040519080825280602002602001820160405280156114fb57816020015b6114e8611869565b8152602001906001900390816114e05790505b50600092509050845b8481101561052057604051631e3dd18b60e01b81526000906001600160a01b03891690631e3dd18b9061153b908590600401611eaa565b60206040518083038186803b15801561155357600080fd5b505afa158015611567573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158b919061190c565b90506000816001600160a01b03166370a082318b6040518263ffffffff1660e01b81526004016115bb9190611be2565b60206040518083038186803b1580156115d357600080fd5b505afa1580156115e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061160b9190611b9e565b90508015611785578184868151811061162057fe5b6020026020010151600001906001600160a01b031690816001600160a01b031681525050816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561167d57600080fd5b505afa158015611691573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b5919061190c565b8486815181106116c157fe5b6020026020010151602001906001600160a01b031690816001600160a01b031681525050816001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561171e57600080fd5b505afa158015611732573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611756919061190c565b84868151811061176257fe5b60209081029190910101516001600160a01b039091166040909101526001909401935b5050600101611504565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604051806080016040528060006001600160a01b031681526020016000815260200160608152602001606081525090565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b604080516060810182526000808252602082018190529181019190915290565b604080518082019091526000808252602082015290565b60008083601f8401126118b1578182fd5b50813567ffffffffffffffff8111156118c8578182fd5b60208301915083602080830285010111156118e257600080fd5b9250929050565b6000602082840312156118fa578081fd5b813561190581611eef565b9392505050565b60006020828403121561191d578081fd5b815161190581611eef565b60008060006040848603121561193c578182fd5b833561194781611eef565b9250602084013567ffffffffffffffff811115611962578283fd5b61196e868287016118a0565b9497909650939450505050565b600080600080600060808688031215611992578081fd5b853561199d81611eef565b9450602086013567ffffffffffffffff8111156119b8578182fd5b6119c4888289016118a0565b90955093505060408601356119d881611eef565b915060608601356119e881611eef565b809150509295509295909350565b60008060008060808587031215611a0b578384fd5b8435611a1681611eef565b93506020850135611a2681611eef565b93969395505050506040820135916060013590565b60008060208385031215611a4d578182fd5b823567ffffffffffffffff811115611a63578283fd5b611a6f858286016118a0565b90969095509350505050565b600080600060608486031215611a8f578283fd5b8335611a9a81611eef565b95602085013595506040909401359392505050565b600060208284031215611ac0578081fd5b815167ffffffffffffffff80821115611ad7578283fd5b818401915084601f830112611aea578283fd5b815181811115611af8578384fd5b604051601f8201601f191681016020018381118282101715611b18578586fd5b604052818152838201602001871015611b2f578485fd5b611b40826020830160208701611ebf565b9695505050505050565b600080600060608486031215611b5e578283fd5b8351611b6981611f07565b6020850151909350611b7a81611f07565b604085015190925063ffffffff81168114611b93578182fd5b809150509250925092565b600060208284031215611baf578081fd5b5051919050565b60008151808452611bce816020860160208601611ebf565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b602080825282518282018190526000919060409081850190868401855b82811015611c6557815180516001600160a01b0316855286810151878601528501518585015260609093019290850190600101611c2d565b5091979650505050505050565b602080825282518282018190526000919060409081850190868401855b82811015611c6557815180516001600160a01b03168552860151868501529284019290850190600101611c8f565b602080825282518282018190526000919060409081850190868401855b82811015611c6557815180516001600160a01b039081168652878201518887015286820151811687870152606091820151169085015260809093019290850190600101611cda565b602080825282518282018190526000919060409081850190868401855b82811015611c65578151611d538151611eb3565b8552808701516001600160a01b0390811688870152868201511686860152606080820151908601526080808201519086015260a0808201519086015260c0908101519085015260e09093019290850190600101611d3f565b602080825282518282018190526000919060409081850190868401855b82811015611c6557815180516001600160a01b0390811686528782015181168887015290860151168585015260609093019290850190600101611dc8565b60208082528251828201819052600091906040908185019080840286018301878501865b83811015611e9c57888303603f19018552815180516001600160a01b03168452878101518885015286810151608088860181905290611e6b82870182611bb6565b91505060608083015192508582038187015250611e888183611bb6565b968901969450505090860190600101611e2a565b509098975050505050505050565b90815260200190565b6001600160a01b031690565b60005b83811015611eda578181015183820152602001611ec2565b83811115611ee9576000848401525b50505050565b6001600160a01b0381168114611f0457600080fd5b50565b6001600160701b0381168114611f0457600080fdfea2646970667358221220ff3d408f17755c99b658da81ac4dd5bcf4cf06e4d87bf6ea46442a075be4b5a064736f6c634300060c0033";