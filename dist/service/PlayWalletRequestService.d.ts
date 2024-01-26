import { BlockTag, TransactionRequest } from '@ethersproject/abstract-provider';
import { BigNumber } from 'ethers';
import { Deferrable } from 'ethers/lib/utils';
import PlayWalletSdkWeb from '~sdk/PlayWalletSdkWeb';
import { AddChainParamsType, AddressType, ChainIdType, EIP712TypedDataType, MessageType, WemixTxObjectType } from '~types/PlayWalletSdkType';
declare class PlayWalletRequestService {
    private _sdkInstance;
    private _chainId;
    private _chainRpcUrl;
    private _chains;
    private _walletAddress;
    private _staticJsonRpcProvider;
    constructor(sdkInstance: PlayWalletSdkWeb);
    /**
     * JsonRpcProvider 초기화
     * 1) Provider 없을 때
     * 2) Provider RPC URL이 상태에서 관리되는 URL과 다른 경우
     */
    private _initProvider;
    /**
     * wei to ether
     * @param value bignumber(hex)
     * @returns ether 단위 값
     */
    hexToString(value: BigNumber): string;
    /**
     * 월렛 연결 계정(월렛 주소) 연결 관련 처리기
     * @returns 월렛 주소 리스트
     */
    callEthRequestAccounts(): Promise<string[]>;
    /**
     * 관리되고 있는 월렛 주소 반환기
     * @returns 월렛 주소 리스트
     */
    callEthAccounts(): Promise<string[]>;
    /**
     * 선택된 월렛 주소 반환기
     * @returns 월렛 주소 리스트
     */
    callEthSelectAccounts(): Promise<string[]>;
    /**
     * WemixPlay 전용 send transaction
     * TODO: JsonRpcProvider 처리과정으로 변경될 예정
     * @param transactionObject 서명 전 트랜젝션에 필요한 요청 파라미터
     * @returns 서명된 사인 hash 값
     */
    callEthSignTransaction(transactionObject: WemixTxObjectType): Promise<unknown>;
    /**
     * wemix mainnet transaction sign
     * @deprecated
     * @param [address, message] 월렛 어드레스
     * @returns
     */
    callEthSign([address, message]: [AddressType, MessageType]): Promise<string>;
    /**
     * wemix mainnet transaction sign
     * @deprecated
     * @param param0
     * @returns
     */
    callEthPersonalSign([message, address]: [MessageType, AddressType]): Promise<string>;
    /**
     * wemix mainnet transaction sign
     * @param param0
     * @returns
     */
    callEthSignTypedData([address, eip712TypedData]: [
        AddressType,
        EIP712TypedDataType
    ]): Promise<string>;
    /**
     * 연결된 월렛의 체인에 소속된 토큰 balance 정보 조회 기능
     * @param tokenAddress 토큰 컨트랙트 주소
     * @returns ether 단위로 변환된 토큰 balance 정보
     */
    callEthGetBalance(tokenAddress: string): Promise<string>;
    /**
     * 연결된 월렛의 메인넷(테스트넷) 위믹스 코인 balance 정보 조회 기능
     * @returns ether 단위로 변환된 위믹스 코인 balance 정보
     */
    callBalanceOf(): Promise<string>;
    callEthChainId(params: any): Promise<string>;
    callEthWalletAddEthereumChain(params: Array<AddChainParamsType>): Promise<string>;
    callEthSwitchEthereumChain([{ chainId }]: [{
        chainId: ChainIdType;
    }]): Promise<void>;
    callEthSubscribe(params: any): Promise<string>;
    callEthClearSubscriptions([keepSyncing]: [keepSyncing?: boolean]): Promise<void>;
    /**
     *
     * @returns UNIT
     */
    callEthBlockNumber(): Promise<number>;
    callEthCall([transaction, blockTag]: [Deferrable<TransactionRequest>, BlockTag]): Promise<string>;
    callEthGasPrice(): Promise<string>;
    getContractAbi(params?: string): Promise<any>;
}
export default PlayWalletRequestService;
