import { AxiosResponse } from 'axios';
import { JwtDataType, PreparedDataType, ResponseType } from '~types/PlayWalletApiType';
import { QRPrepareParamType, QRTokenParamType, UnsignedTxType } from '~types/PlayWalletSdkType';
import { requestA2aApi } from '../helper/api/axiosA2a';
import { requestPlayWalletApi } from '../helper/api/axiosPlayWallet';
import { set } from '../store';

class PlayWalletApiService {
  public async a2aServerlessPrepared(
    qrPrepareParam: QRPrepareParamType
  ): Promise<ResponseType<PreparedDataType>> {
    const url = `/a2a/prepare`;
    return await requestA2aApi.post(url, { ...qrPrepareParam });
  }

  public async a2aServerlessAccessToken(
    qrTokenParam: QRTokenParamType
  ): Promise<AxiosResponse<JwtDataType>> {
    const url = `/a2a/accesstoken`;
    const response = await requestA2aApi.post(url, { ...qrTokenParam });
    if (response) {
      set('accessToken', response?.data?.access_token);
      set('refreshToken', response?.data?.refresh_token);
    }
    return response;
  }

  public async unsignedTx(unsignedTxParam: UnsignedTxType) {
    const url = `/account/unsignedTx`;
    return requestPlayWalletApi.post(url, unsignedTxParam);
  }

  public async sendSignedTx(hash: string, signature: string, type: number) {
    const url = `/account/signedTx`;
    return requestPlayWalletApi.post(url, {
      hash,
      sign: signature,
      type
    });
  }

  public async fetchUserInfo() {
    const url = `/login`;

    const response = await requestPlayWalletApi.post(url, { lang: 'en' });
    return response?.data;
  }

  public async verifyToken() {
    const url = `/verify`;

    const response = await requestPlayWalletApi.post(url);
    return response?.data;
  }

  public async fetchBalanceAll() {
    const url = `/balance/balanceAll`;

    const response = await requestPlayWalletApi.get(url);
    return response?.data?.balances;
  }
}

export default PlayWalletApiService;
