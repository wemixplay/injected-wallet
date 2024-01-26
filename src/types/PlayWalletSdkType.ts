import { AxiosResponse } from 'axios';
import { AddChainParams, EIP712TypedData } from '@web3-onboard/common';
import { ConfigType } from '../helper/constant/environment/defaultConfig';
import { Chain } from '@web3-onboard/common';
import {
  ResponseType,
  JwtDataType,
  PreparedDataType,
  ResponseUnsignedType
} from './PlayWalletApiType';

const BLOCK_TAGS_CONST = Object.freeze({
  EARLIEST: 'earliest',
  FINALIZED: 'finalized',
  LATEST: 'latest',
  PENDING: 'pending',
  SAFE: 'safe'
});

type PlayWalletSdkOptionsType = {
  clientId: string;
  chain?: string;
  chainId?: string;
  chainRpcUrl?: string;
  chains?: Chain[];
  envConfig: ConfigType;
  prepared: (qrPrepareParam: QRPrepareParamType) => Promise<ResponseType<PreparedDataType>>;
  signJwt: (qrTokenParam: QRTokenParamType) => Promise<AxiosResponse<JwtDataType>>;
  unsignedTx: (unsignedTxParam: UnsignedTxType) => Promise<ResponseUnsignedType>;
  sendSignedTx: (hash: string, signature: string, type: number) => Promise<unknown>;
};

/**
 * Play Wallet User Info
 */
type UserInfoType = {
  userId: string;
  address: string;
  allowedPrivacy: boolean;
  allowedService: boolean;
};

/**
 * QR 코드 준비 단계 Parameter Type
 */
type QRPrepareParamType = {
  client_id: string;
  type: string;
};

/**
 * QR 코드 토큰 획득 단계 Parameter Type
 */
type QRTokenParamType = {
  client_id: string;
  code: string;
  grant_type: string;
};

type ExtraApprovedType = {
  token?: string;
  spender?: string;
  amount?: string;
};

type PlayUnsignedTxType = {
  txtype?: number;
  chain?: any;
  nonce?: number | undefined;
  contract?: any;
  to?: string;
  token_approved?: undefined | string;
  token_approveds?: undefined | string[];
  amount_approveds?: undefined | string[];
  value?: number;
  method?: any;
  args?: (string | number)[];
  extra_approveds?: ExtraApprovedType[];
};

type UnsignedTxType = {
  txtype?: number;
  chain?: any;
  to?: string;
  token_approved?: undefined | string;
  value?: number;
  method?: any;
  args?: (string | number)[];
  extra_approveds?: ExtraApprovedType[];
};

type AccessListType = {
  address?: string;
  storageKeys?: string[];
};

type TxCallType = {
  accessList?: AccessListType[];
  data?: string;
  from?: string;
  gas?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  to: string;
  type?: string;
  value?: string;
};

type WemixTxRequestType = {
  from: string;
  to: string;
  amount: string;
  fee: string;
  amountWithFee: string;
};

type WemixTxObjectType = {
  nonce: number;
  value: number;
  txtype: number;
  to: string;
  chain: string;
  method: string;
  args: string[];
  amount_approveds: string[];
};

type BalanceType = {
  address: string;
  balance: string;
  chain: string;
  swapable: boolean;
  symbol: string;
  token: string;
};

type AddressType = string;
type MessageType = string;
type ChainIdType = string;
type EIP712TypedDataType = EIP712TypedData;
type AddChainParamsType = AddChainParams;
type HexStringType = string;
type NumbersType = number | bigint | string | HexStringType;
type BlockTagType = (typeof BLOCK_TAGS_CONST)[keyof typeof BLOCK_TAGS_CONST];
type BlockNumberOrTagType = NumbersType | BlockTagType;

export type {
  PlayWalletSdkOptionsType,
  UserInfoType,
  QRPrepareParamType,
  QRTokenParamType,
  ExtraApprovedType,
  PlayUnsignedTxType,
  UnsignedTxType,
  WemixTxRequestType,
  WemixTxObjectType,
  BalanceType,
  AccessListType,
  TxCallType,
  NumbersType,
  BlockTagType,
  BlockNumberOrTagType,
  AddressType,
  MessageType,
  ChainIdType,
  EIP712TypedDataType,
  AddChainParamsType
};
