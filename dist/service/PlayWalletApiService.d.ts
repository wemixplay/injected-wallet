import { AxiosResponse } from 'axios';
import { JwtDataType, PreparedDataType, ResponseType } from '~types/PlayWalletApiType';
import { QRPrepareParamType, QRTokenParamType, UnsignedTxType } from '~types/PlayWalletSdkType';
declare class PlayWalletApiService {
    a2aServerlessPrepared(qrPrepareParam: QRPrepareParamType): Promise<ResponseType<PreparedDataType>>;
    a2aServerlessAccessToken(qrTokenParam: QRTokenParamType): Promise<AxiosResponse<JwtDataType>>;
    unsignedTx(unsignedTxParam: UnsignedTxType): Promise<AxiosResponse<any, any>>;
    sendSignedTx(hash: string, signature: string, type: number): Promise<AxiosResponse<any, any>>;
    fetchUserInfo(): Promise<any>;
    verifyToken(): Promise<any>;
    fetchBalanceAll(): Promise<any>;
}
export default PlayWalletApiService;
