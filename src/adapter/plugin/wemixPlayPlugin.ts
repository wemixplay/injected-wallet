import PlayWalletSdkWeb from '../../sdk/PlayWalletSdkWeb';
import WalletApiService from '../../service/PlayWalletApiService';

const REQUEST_ACTION_TYPES_API = Object.freeze({
  PLAY_PREPARED: 'play_prepared',
  PLAY_ACCESS_TOKEN: 'play_accesstoken',
  PLAY_MAKE_UNSIGNED_TRANSACTION: 'play_makeUnsignedTx',
  PLAY_SEND_SIGNED_TRANSACTION: 'play_sendSignedTx',
  PLAY_LOGIN: 'play_login'
});

class PlayPlugin {
  private _walletApiService: WalletApiService;
  private _sdkInstance: PlayWalletSdkWeb;

  constructor(sdkInstance: PlayWalletSdkWeb) {
    this._sdkInstance = sdkInstance;
    this._walletApiService = new WalletApiService();
  }

  async request({ method, params }) {
    switch (method) {
      case REQUEST_ACTION_TYPES_API.PLAY_PREPARED: {
        return this._walletApiService.a2aServerlessPrepared(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_ACCESS_TOKEN: {
        return this._walletApiService.a2aServerlessAccessToken(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_MAKE_UNSIGNED_TRANSACTION: {
        return this._sdkInstance.openSignQrModal(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_SEND_SIGNED_TRANSACTION: {
        return this._walletApiService.sendSignedTx(params?.hash, params?.signature, params?.type);
      }
      default: {
        return null;
      }
    }
  }
}

export { PlayPlugin };
