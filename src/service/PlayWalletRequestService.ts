import { BlockTag, TransactionRequest } from '@ethersproject/abstract-provider';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { Chain } from '@web3-onboard/common';
import { BigNumber, Contract, ethers } from 'ethers';
import { Deferrable } from 'ethers/lib/utils';
import PlayWalletSdkWeb from '~sdk/PlayWalletSdkWeb';
import {
  AddChainParamsType,
  AddressType,
  ChainIdType,
  EIP712TypedDataType,
  MessageType,
  UserInfoType,
  WemixTxObjectType
} from '~types/PlayWalletSdkType';
import { requestMainnetApi } from '../helper/api/axiosMainnet';
import { get, set, wemixSdkStore } from '../store';
import { ERC20_ABI } from './DefaultAbi';

class PlayWalletRequestService {
  private _sdkInstance: PlayWalletSdkWeb;
  private _chainId: string;
  private _chainRpcUrl: string;
  private _chains: Chain[];
  private _walletAddress: string;
  private _staticJsonRpcProvider: StaticJsonRpcProvider;

  constructor(sdkInstance: PlayWalletSdkWeb) {
    this._sdkInstance = sdkInstance;
    this._chainId = get('chainId');
    this._chains = get('chains');
    this._walletAddress = get('walletAddress');

    wemixSdkStore.subscribe((state) => {
      this._chainId = state.chainId;
      this._chainRpcUrl = state.chainRpcUrl;
      this._chains = state.chains;
      this._walletAddress = state.walletAddress;
      this._staticJsonRpcProvider = new StaticJsonRpcProvider(state.chainRpcUrl);
    });
  }

  /**
   * JsonRpcProvider 초기화
   * 1) Provider 없을 때
   * 2) Provider RPC URL이 상태에서 관리되는 URL과 다른 경우
   */
  private _initProvider() {
    if (
      !this._staticJsonRpcProvider ||
      this._staticJsonRpcProvider?.connection?.url !== get('chainRpcUrl')
    ) {
      this._staticJsonRpcProvider = new StaticJsonRpcProvider(
        this._chainRpcUrl || get('chainRpcUrl')
      );
    }
  }

  /**
   * wei to ether
   * @param value bignumber(hex)
   * @returns ether 단위 값
   */
  public hexToString(value: BigNumber) {
    return value ? BigNumber.from(value).mul('1000000000000000000').toString() : '0';
  }

  /**
   * 월렛 연결 계정(월렛 주소) 연결 관련 처리기
   * @returns 월렛 주소 리스트
   */
  public async callEthRequestAccounts() {
    if (this._walletAddress) {
      return [this._walletAddress];
    }

    const account = await this._sdkInstance.openAuthQrModal(true);
    const { address } = account as UserInfoType;
    set('walletAddress', address);
    return address ? [address] : [];
  }

  /**
   * 관리되고 있는 월렛 주소 반환기
   * @returns 월렛 주소 리스트
   */
  public async callEthAccounts() {
    return [this._walletAddress];
  }

  /**
   * 선택된 월렛 주소 반환기
   * @returns 월렛 주소 리스트
   */
  public async callEthSelectAccounts() {
    return [this._walletAddress];
  }

  /**
   * WemixPlay 전용 send transaction
   * TODO: JsonRpcProvider 처리과정으로 변경될 예정
   * @param transactionObject 서명 전 트랜젝션에 필요한 요청 파라미터
   * @returns 서명된 사인 hash 값
   */
  public async callEthSignTransaction(transactionObject: WemixTxObjectType) {
    const hashes = await this._sdkInstance.openSignQrModal(transactionObject);
    return hashes;
  }

  /**
   * wemix mainnet transaction sign
   * @deprecated
   * @param [address, message] 월렛 어드레스
   * @returns
   */
  public async callEthSign([address, message]: [AddressType, MessageType]) {
    return '';
  }

  /**
   * wemix mainnet transaction sign
   * @deprecated
   * @param param0
   * @returns
   */
  public async callEthPersonalSign([message, address]: [MessageType, AddressType]) {
    return '';
  }

  /**
   * wemix mainnet transaction sign
   * @param param0
   * @returns
   */
  public async callEthSignTypedData([address, eip712TypedData]: [
    AddressType,
    EIP712TypedDataType
  ]) {
    return '';
  }

  /**
   * 연결된 월렛의 체인에 소속된 토큰 balance 정보 조회 기능
   * @param tokenAddress 토큰 컨트랙트 주소
   * @returns ether 단위로 변환된 토큰 balance 정보
   */
  public async callEthGetBalance(tokenAddress: string) {
    this._initProvider();

    const contract = new Contract(
      tokenAddress,
      JSON.parse(JSON.stringify(ERC20_ABI)),
      this._staticJsonRpcProvider
    );

    const balance = await contract.balanceOf(this._walletAddress);
    const balanceFormatted = ethers.utils.formatUnits(balance, 18);

    return balanceFormatted;
  }

  /**
   * 연결된 월렛의 메인넷(테스트넷) 위믹스 코인 balance 정보 조회 기능
   * @returns ether 단위로 변환된 위믹스 코인 balance 정보
   */
  public async callBalanceOf() {
    if (this._staticJsonRpcProvider) {
      const balance = await this._staticJsonRpcProvider.getBalance(this._walletAddress);
      return ethers.utils.formatUnits(balance, 18);
    }
    return '0.0';
  }

  public async callEthChainId(params) {
    return this._chainId;
  }

  public async callEthWalletAddEthereumChain(params: Array<AddChainParamsType>) {
    return '';
  }

  public async callEthSwitchEthereumChain([{ chainId }]: [{ chainId: ChainIdType }]) {
    set('chainId', chainId);
    set('chainRpcUrl', this._chains?.find((chainInfo) => chainInfo.id === chainId));
    this._sdkInstance.getProvider().emit('chainChanged', chainId);
  }

  public async callEthSubscribe(params) {
    // provider on('message', (message) => { message.type === 'eth_subscription' 처리가 포함되어야 함 })
    return '';
  }

  public async callEthClearSubscriptions([keepSyncing]: [keepSyncing?: boolean]) {
    return;
  }

  /**
   *
   * @returns UNIT
   */
  public async callEthBlockNumber() {
    return await this._staticJsonRpcProvider.getBlockNumber();
  }

  public async callEthCall([transaction, blockTag]: [Deferrable<TransactionRequest>, BlockTag]) {
    return await this._staticJsonRpcProvider.call(transaction, blockTag);
  }

  public async callEthGasPrice() {
    const gasPrice = await this._staticJsonRpcProvider.getGasPrice();
    return ethers.utils.formatUnits(gasPrice, 18);
  }

  // WWEMIX: 0x7D72b22a74A216Af4a002a1095C8C707d6eC1C5f
  // Valkyreum:  0x09C7ADa689A77a230081Ab5aaDfa787aC711D4a8 -> contract is not yet verified
  public async getContractAbi(params = '0x7D72b22a74A216Af4a002a1095C8C707d6eC1C5f') {
    return await requestMainnetApi({
      method: 'get',
      url: `v1/contracts/${params}/abi`,
      data: null
    });
  }
}

export default PlayWalletRequestService;
