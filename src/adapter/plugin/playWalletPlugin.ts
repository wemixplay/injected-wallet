import PlayWalletSdkWeb from '../../sdk/PlayWalletSdkWeb';
import WalletApiService from '../../service/PlayWalletApiService';

const REQUEST_ACTION_TYPES_API = Object.freeze({
  PLAY_WALLET_PREPARED: 'playWallet_prepared',
  PLAY_WALLET_ACCESS_TOKEN: 'playWallet_accesstoken',
  PLAY_WALLET_MAKE_UNSIGNED_TRANSACTION: 'playWallet_makeUnsignedTx',
  PLAY_WALLET_SEND_SIGNED_TRANSACTION: 'playWallet_sendSignedTx',
  PLAY_WALLET_MAKE_UNSIGNED_WITH_SEND_TRANSACTION: 'playWallet_makeUnsignedWithSendTx',
  PLAY_WALLET_LOGIN: 'playWallet_login',
  PLAY_WALLET_VERIFY_TOKEN: 'playWallet_verifyToken',
  PLAY_WALLET_BALANCE_ALL: 'playWallet_balanceAll'
});

class PlayWalletPlugin {
  private _walletApiService: WalletApiService;
  private _sdkInstance: PlayWalletSdkWeb;

  constructor(sdkInstance: PlayWalletSdkWeb) {
    this._sdkInstance = sdkInstance;
    this._walletApiService = new WalletApiService();
  }

  async request({ method, params }) {
    switch (method) {
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_PREPARED: {
        return this._walletApiService.a2aServerlessPrepared(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_ACCESS_TOKEN: {
        return this._walletApiService.a2aServerlessAccessToken(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_MAKE_UNSIGNED_TRANSACTION: {
        return this._sdkInstance.makeUnsignedTx(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_SEND_SIGNED_TRANSACTION: {
        return this._sdkInstance.openOnlySignQrModal(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_MAKE_UNSIGNED_WITH_SEND_TRANSACTION: {
        return this._sdkInstance.openSignQrModal(params);
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_LOGIN: {
        return this._walletApiService.fetchUserInfo();
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_VERIFY_TOKEN: {
        return this._walletApiService.verifyToken();
      }
      case REQUEST_ACTION_TYPES_API.PLAY_WALLET_BALANCE_ALL: {
        return this._walletApiService.fetchBalanceAll();
      }
      default: {
        return null;
      }
    }
  }
}

export { PlayWalletPlugin, REQUEST_ACTION_TYPES_API };
