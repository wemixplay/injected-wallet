import { EIP1102Request, EIP1193Provider, EIP3085Request, EIP3326Request, EIP712Request, EthAccountsRequest, EthBalanceRequest, EthChainIdRequest, EthSignMessageRequest, EthSignTransactionRequest, PersonalSignMessageRequest, ProviderAccounts, SelectAccountsRequest } from '@web3-onboard/common';
import { EventEmitter } from 'eventemitter3';
import PlayWalletSdkWeb from '~sdk/PlayWalletSdkWeb';
import Adapter from '../adapter';
declare class PlayWalletProvider extends EventEmitter implements EIP1193Provider {
    /**
     * 플러그인 모듈 기능을 사용하기 위한 어댑터
     */
    adapter: Adapter;
    constructor(instance: PlayWalletSdkWeb);
    /**
     * provider를 통해 ethers.js JsonRPC 통신기능과 위믹스 플레이 SDK 기능을 사용할 수 있는 기능
     * @params args EIP1193 인터페이스에서 사용되는 payload
     */
    request(args: EthAccountsRequest): Promise<ProviderAccounts>;
    request(args: EthBalanceRequest): Promise<string>;
    request(args: EIP1102Request): Promise<ProviderAccounts>;
    request(args: SelectAccountsRequest): Promise<ProviderAccounts>;
    request(args: EIP3326Request): Promise<null>;
    request(args: EIP3085Request): Promise<null>;
    request(args: EthChainIdRequest): Promise<string>;
    request(args: EthSignTransactionRequest): Promise<string>;
    request(args: EthSignMessageRequest): Promise<string>;
    request(args: PersonalSignMessageRequest): Promise<string>;
    request(args: EIP712Request): Promise<string>;
    request(args: {
        method: string;
        params?: unknown[];
    }): Promise<unknown>;
    /**
     * Web3-onboard 커넥션 종료 시 콜백 이벤트 기능
     */
    disconnect(): void;
    /**
     * 월렛에서 선택된 체인에 소속된 토큰 balance 조회 기능
     * @params tokenAddress 토큰 컨트랙트 주소
     */
    getBalance(tokenAddress: string): Promise<any>;
    /**
     * 연결된 월렛에 선택된 체인 아이디
     */
    getChainId(): Promise<any>;
}
export default PlayWalletProvider;
