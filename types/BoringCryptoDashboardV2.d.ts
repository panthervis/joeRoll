/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BoringCryptoDashboardV2Interface extends ethers.utils.Interface {
  functions: {
    "findPools(address,uint256[])": FunctionFragment;
    "getAVAXRate(address)": FunctionFragment;
    "getPairsFull(address,address[])": FunctionFragment;
    "getPools(uint256[])": FunctionFragment;
    "pollPools(address,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "findPools",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "getAVAXRate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPairsFull",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPools",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "pollPools",
    values: [string, BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "findPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAVAXRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPairsFull",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pollPools", data: BytesLike): Result;

  events: {};
}

export class BoringCryptoDashboardV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BoringCryptoDashboardV2Interface;

  functions: {
    findPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, BigNumber, string, string] & {
          pid: BigNumber;
          lpToken: string;
          allocPoint: BigNumber;
          token0: string;
          token1: string;
        })[]
      ]
    >;

    "findPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, BigNumber, string, string] & {
          pid: BigNumber;
          lpToken: string;
          allocPoint: BigNumber;
          token0: string;
          token1: string;
        })[]
      ]
    >;

    getAVAXRate(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "getAVAXRate(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPairsFull(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          token: string;
          token0: string;
          token1: string;
          reserve0: BigNumber;
          reserve1: BigNumber;
          totalSupply: BigNumber;
          balance: BigNumber;
        })[]
      ]
    >;

    "getPairsFull(address,address[])"(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          token: string;
          token0: string;
          token1: string;
          reserve0: BigNumber;
          reserve1: BigNumber;
          totalSupply: BigNumber;
          balance: BigNumber;
        })[]
      ]
    >;

    getPools(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          totalAllocPoint: BigNumber;
          poolLength: BigNumber;
        },
        ([BigNumber, string, BigNumber, string, string] & {
          pid: BigNumber;
          lpToken: string;
          allocPoint: BigNumber;
          token0: string;
          token1: string;
        })[]
      ]
    >;

    "getPools(uint256[])"(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          totalAllocPoint: BigNumber;
          poolLength: BigNumber;
        },
        ([BigNumber, string, BigNumber, string, string] & {
          pid: BigNumber;
          lpToken: string;
          allocPoint: BigNumber;
          token0: string;
          token1: string;
        })[]
      ]
    >;

    pollPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          pid: BigNumber;
          balance: BigNumber;
          totalSupply: BigNumber;
          lpBalance: BigNumber;
          lpTotalSupply: BigNumber;
          lpAllowance: BigNumber;
          reserve0: BigNumber;
          reserve1: BigNumber;
          token0rate: BigNumber;
          token1rate: BigNumber;
          rewardDebt: BigNumber;
          pending: BigNumber;
        })[]
      ]
    >;

    "pollPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          pid: BigNumber;
          balance: BigNumber;
          totalSupply: BigNumber;
          lpBalance: BigNumber;
          lpTotalSupply: BigNumber;
          lpAllowance: BigNumber;
          reserve0: BigNumber;
          reserve1: BigNumber;
          token0rate: BigNumber;
          token1rate: BigNumber;
          rewardDebt: BigNumber;
          pending: BigNumber;
        })[]
      ]
    >;
  };

  findPools(
    who: string,
    pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, BigNumber, string, string] & {
      pid: BigNumber;
      lpToken: string;
      allocPoint: BigNumber;
      token0: string;
      token1: string;
    })[]
  >;

  "findPools(address,uint256[])"(
    who: string,
    pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, BigNumber, string, string] & {
      pid: BigNumber;
      lpToken: string;
      allocPoint: BigNumber;
      token0: string;
      token1: string;
    })[]
  >;

  getAVAXRate(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAVAXRate(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPairsFull(
    who: string,
    addresses: string[],
    overrides?: CallOverrides
  ): Promise<
    ([string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      token: string;
      token0: string;
      token1: string;
      reserve0: BigNumber;
      reserve1: BigNumber;
      totalSupply: BigNumber;
      balance: BigNumber;
    })[]
  >;

  "getPairsFull(address,address[])"(
    who: string,
    addresses: string[],
    overrides?: CallOverrides
  ): Promise<
    ([string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      token: string;
      token0: string;
      token1: string;
      reserve0: BigNumber;
      reserve1: BigNumber;
      totalSupply: BigNumber;
      balance: BigNumber;
    })[]
  >;

  getPools(
    pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber, BigNumber] & {
        totalAllocPoint: BigNumber;
        poolLength: BigNumber;
      },
      ([BigNumber, string, BigNumber, string, string] & {
        pid: BigNumber;
        lpToken: string;
        allocPoint: BigNumber;
        token0: string;
        token1: string;
      })[]
    ]
  >;

  "getPools(uint256[])"(
    pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber, BigNumber] & {
        totalAllocPoint: BigNumber;
        poolLength: BigNumber;
      },
      ([BigNumber, string, BigNumber, string, string] & {
        pid: BigNumber;
        lpToken: string;
        allocPoint: BigNumber;
        token0: string;
        token1: string;
      })[]
    ]
  >;

  pollPools(
    who: string,
    pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    ([
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      pid: BigNumber;
      balance: BigNumber;
      totalSupply: BigNumber;
      lpBalance: BigNumber;
      lpTotalSupply: BigNumber;
      lpAllowance: BigNumber;
      reserve0: BigNumber;
      reserve1: BigNumber;
      token0rate: BigNumber;
      token1rate: BigNumber;
      rewardDebt: BigNumber;
      pending: BigNumber;
    })[]
  >;

  "pollPools(address,uint256[])"(
    who: string,
    pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    ([
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      pid: BigNumber;
      balance: BigNumber;
      totalSupply: BigNumber;
      lpBalance: BigNumber;
      lpTotalSupply: BigNumber;
      lpAllowance: BigNumber;
      reserve0: BigNumber;
      reserve1: BigNumber;
      token0rate: BigNumber;
      token1rate: BigNumber;
      rewardDebt: BigNumber;
      pending: BigNumber;
    })[]
  >;

  callStatic: {
    findPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, BigNumber, string, string] & {
        pid: BigNumber;
        lpToken: string;
        allocPoint: BigNumber;
        token0: string;
        token1: string;
      })[]
    >;

    "findPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, BigNumber, string, string] & {
        pid: BigNumber;
        lpToken: string;
        allocPoint: BigNumber;
        token0: string;
        token1: string;
      })[]
    >;

    getAVAXRate(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAVAXRate(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPairsFull(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<
      ([string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        token: string;
        token0: string;
        token1: string;
        reserve0: BigNumber;
        reserve1: BigNumber;
        totalSupply: BigNumber;
        balance: BigNumber;
      })[]
    >;

    "getPairsFull(address,address[])"(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<
      ([string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        token: string;
        token0: string;
        token1: string;
        reserve0: BigNumber;
        reserve1: BigNumber;
        totalSupply: BigNumber;
        balance: BigNumber;
      })[]
    >;

    getPools(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          totalAllocPoint: BigNumber;
          poolLength: BigNumber;
        },
        ([BigNumber, string, BigNumber, string, string] & {
          pid: BigNumber;
          lpToken: string;
          allocPoint: BigNumber;
          token0: string;
          token1: string;
        })[]
      ]
    >;

    "getPools(uint256[])"(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          totalAllocPoint: BigNumber;
          poolLength: BigNumber;
        },
        ([BigNumber, string, BigNumber, string, string] & {
          pid: BigNumber;
          lpToken: string;
          allocPoint: BigNumber;
          token0: string;
          token1: string;
        })[]
      ]
    >;

    pollPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      ([
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        pid: BigNumber;
        balance: BigNumber;
        totalSupply: BigNumber;
        lpBalance: BigNumber;
        lpTotalSupply: BigNumber;
        lpAllowance: BigNumber;
        reserve0: BigNumber;
        reserve1: BigNumber;
        token0rate: BigNumber;
        token1rate: BigNumber;
        rewardDebt: BigNumber;
        pending: BigNumber;
      })[]
    >;

    "pollPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      ([
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        pid: BigNumber;
        balance: BigNumber;
        totalSupply: BigNumber;
        lpBalance: BigNumber;
        lpTotalSupply: BigNumber;
        lpAllowance: BigNumber;
        reserve0: BigNumber;
        reserve1: BigNumber;
        token0rate: BigNumber;
        token1rate: BigNumber;
        rewardDebt: BigNumber;
        pending: BigNumber;
      })[]
    >;
  };

  filters: {};

  estimateGas: {
    findPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "findPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAVAXRate(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAVAXRate(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPairsFull(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPairsFull(address,address[])"(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPools(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPools(uint256[])"(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pollPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pollPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    findPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "findPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAVAXRate(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAVAXRate(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPairsFull(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPairsFull(address,address[])"(
      who: string,
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPools(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPools(uint256[])"(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pollPools(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pollPools(address,uint256[])"(
      who: string,
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}