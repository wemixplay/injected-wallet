import { QRPrepareParamType, QRTokenParamType, UnsignedTxType, UserInfoType } from '~types/PlayWalletSdkType';
import PlayWalletSdkWeb from '../sdk/PlayWalletSdkWeb';
declare class WemixPlayApiService {
    private _sdkInstance;
    constructor(sdkInstance: PlayWalletSdkWeb);
    prepared(qrPrepareParam: QRPrepareParamType): Promise<any>;
    fetchToken(qrTokenParam: QRTokenParamType): Promise<import("axios").AxiosResponse<any, any>>;
    unsignedTx(unsignedTxParam: UnsignedTxType): Promise<import("axios").AxiosResponse<any, any>>;
    sendSignedTx(hash: string, signature: string, type: number, chain: string): Promise<import("axios").AxiosResponse<any, any>>;
    fetchUserInfo(): Promise<UserInfoType>;
    fetchBalanceAll(): Promise<any>;
}
export default WemixPlayApiService;
