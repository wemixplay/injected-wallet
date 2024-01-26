import {
  QRPrepareParamType,
  QRTokenParamType,
  UnsignedTxType,
  UserInfoType
} from '~types/PlayWalletSdkType';
import { requestWemixPlayApi } from '../helper/api/axiosWemixPlay';
import { set } from '../store';
import PlayWalletSdkWeb from '../sdk/PlayWalletSdkWeb';

class WemixPlayApiService {
  private _sdkInstance: PlayWalletSdkWeb;

  constructor(sdkInstance: PlayWalletSdkWeb) {
    this._sdkInstance = sdkInstance;
  }

  public async prepared(qrPrepareParam: QRPrepareParamType) {
    const url = `/info/v1/a2a/prepare`;
    const { data } = await requestWemixPlayApi.post(url, { ...qrPrepareParam });
    return data;
  }

  public async fetchToken(qrTokenParam: QRTokenParamType) {
    const url = `/info/v1/a2a/token`;
    const response = await requestWemixPlayApi.post(url, { ...qrTokenParam });
    if (response) {
      set('accessToken', response?.data?.data.access_token);
      set('refreshToken', response?.data?.data.refresh_token);
    }
    return response;
  }

  public async unsignedTx(unsignedTxParam: UnsignedTxType) {
    const url = `/account/unsignedTx`;
    return requestWemixPlayApi.post(url, unsignedTxParam);
  }

  public async sendSignedTx(hash: string, signature: string, type: number, chain: string) {
    const url = `/defi/signedTx`;
    return requestWemixPlayApi.post(url, {
      hash,
      sign: signature,
      type,
      chainName: chain
    });
  }

  public async fetchUserInfo() {
    const url = `/info/v1/auth/login`;

    const response = await requestWemixPlayApi.post(url, { lang: 'en' });
    return response?.data?.userInfo as UserInfoType;
  }

  public async fetchBalanceAll() {
    const url = `/defi/mypage/v2/all-balance`;

    const response = await requestWemixPlayApi.get(url);
    return response?.data?.data?.Balances;
  }
}

export default WemixPlayApiService;
