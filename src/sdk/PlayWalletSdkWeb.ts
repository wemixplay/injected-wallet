import { ProviderRpcError, ProviderRpcErrorCode } from '@web3-onboard/common';
import { AxiosResponse } from 'axios';
import { JwtDataType, PreparedDataType, ResponseType } from '~types/PlayWalletApiType';
import {
  PlayWalletSdkOptionsType,
  QRPrepareParamType,
  QRTokenParamType,
  UnsignedTxType
} from '~types/PlayWalletSdkType';
import PlayWalletProvider from '../provider/PlayWalletProvider';
import PlayWalletApiService from '../service/PlayWalletApiService';
import { get, wemixSdkStore } from '../store';

class PlayWalletSdkWeb {
  private _chainRpcUrl: string;
  private _playWalletApiService: PlayWalletApiService;
  private _sdkInfo: any;
  private _provider: PlayWalletProvider;
  private _wemixSdk: any;
  private _prepared: (
    qrPrepareParam: QRPrepareParamType
  ) => Promise<ResponseType<PreparedDataType>>;
  private _signJwt: (qrTokenParam: QRTokenParamType) => Promise<AxiosResponse<JwtDataType>>;
  private _unsignedTx: (unsignedTxParam: UnsignedTxType) => Promise<unknown>;
  private _sendSignedTx: (hash: string, signature: string, type: number) => Promise<unknown>;

  constructor({
    envConfig,
    clientId,
    chainId,
    chainRpcUrl,
    chains,
    prepared,
    signJwt,
    unsignedTx,
    sendSignedTx
  }: PlayWalletSdkOptionsType) {
    wemixSdkStore.setState({
      envConfig,
      baseUrl: envConfig.baseUrl,
      clientId,
      chainId,
      chainRpcUrl,
      chains
    });

    this._chainRpcUrl = get('chainRpcUrl');
    this._playWalletApiService = new PlayWalletApiService();

    this._prepared = prepared ?? this._playWalletApiService.a2aServerlessPrepared;
    this._signJwt = signJwt ?? this._playWalletApiService.a2aServerlessAccessToken;
    this._unsignedTx = unsignedTx ?? this._playWalletApiService.unsignedTx;
    this._sendSignedTx = sendSignedTx ?? this._playWalletApiService.sendSignedTx;

    this._sdkInfo = {
      webauth: envConfig.webAuthUrl,
      oauth: envConfig.oauthUrl,
      wallet: envConfig.walletUrl,
      binder: envConfig.binderUrl,
      client_id: clientId
    };

    wemixSdkStore.subscribe((state) => {
      this._chainRpcUrl = state.chainRpcUrl;
    });
  }

  protected initWemixSdk() {
    window.wemix().setRequestPreparedFunction(this._prepared);
    window.wemix().setRequestTokenFunction(this._signJwt);
    window.wemix().setRequestMakeUnsignedTx(this._unsignedTx);
    window.wemix().setRequestSendSignedTx(this._sendSignedTx);

    window.WEMIX_SDK = new window.wemix();
    window.WEMIX_SDK.setLocale('en');
    window.WEMIX_SDK.setEnv(this._sdkInfo);

    this._wemixSdk = window.WEMIX_SDK;
    console.info('Done is initPlayWallet()');
  }

  public async initPlayWallet() {
    await import('./wemix.js');

    if (typeof window?.wemix !== 'function') {
      console.error('Not found wemix in Global.window');
      return false;
    } else {
      this.initWemixSdk();
      return true;
    }
  }

  public async openAuthQrModal(isOpen: boolean) {
    return new Promise((resolve) => {
      if (!window.WEMIX_SDK) {
        this.initPlayWallet();
      }

      if (isOpen) {
        window.WEMIX_SDK?.openQR(
          'auth',
          null, // req param
          null, // chainName
          async (success: Record<string, any>) => {
            /** Login Query(useSelectUserInfo작동을 위한 리로드) */
            resolve(this._playWalletApiService.fetchUserInfo());
          },
          (fail: any) => {
            throw new ProviderRpcError({
              code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
              message: 'Play Wallet rejected the request auth.'
            });
          }
        );
      } else {
        window?.WEMIX_SDK?.closeQR();
        // window.WEMIX_SDK?.getQR()?.btnClose?.click();
      }
    });
  }

  public async openSignQrModal(unsignedTxParam: UnsignedTxType) {
    console.info(`openSignQrModal ---> transactionObject : `, unsignedTxParam);
    const { txtype, chain, to, token_approved, value, method, args, extra_approveds } =
      unsignedTxParam;
    const unsigned = await window.WEMIX_SDK?.makeUnsignedTx(
      txtype,
      chain,
      to,
      token_approved,
      value,
      method,
      args,
      extra_approveds
    ).catch((error: any) => {
      const { response: { data } = {} as any } = error;
    });

    if (!unsigned) {
      return;
    }

    const hashes = unsigned?.data?.hash;
    const req = await window.WEMIX_SDK.requestSignature(hashes);

    return new Promise((resolve) => {
      window.WEMIX_SDK.openQR(
        'sign',
        req,
        (success: Record<string, unknown>[]) => {
          resolve(hashes);
        },
        (_fails: [], error: any) => {
          throw new ProviderRpcError({
            code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
            message: 'Play Wallet rejected the request sign transaction.'
          });
        }
      );
    });
  }

  public async openModal({ type, req, chainName, message = 'Play Wallet rejected' }) {
    return new Promise((resolve) => {
      window?.WEMIX_SDK?.openQR(
        type,
        req,
        chainName,
        (success: Record<string, unknown>[]) => {
          resolve(success);
        },
        (_fails: [], error: any) => {
          throw new ProviderRpcError({
            code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
            message
          });
        }
      );
    });
  }

  public async getBalanceAll() {
    return this._playWalletApiService.fetchBalanceAll() ?? [];
  }

  public getChainRpcUrl() {
    return this._chainRpcUrl;
  }

  public createProvider() {
    if (this._provider) {
      return this._provider;
    }

    const playWalletProvider = new PlayWalletProvider(this);
    this._provider = playWalletProvider;
    return playWalletProvider;
  }

  public getProvider() {
    return this._provider ?? null;
  }

  public getwemixSdk() {
    return this._wemixSdk;
  }

  public getInterfaceFunction() {
    return {
      prepared: this._prepared,
      signJwt: this._signJwt,
      unsignedTx: this._unsignedTx,
      signedTx: this._sendSignedTx
    };
  }
}

export default PlayWalletSdkWeb;
