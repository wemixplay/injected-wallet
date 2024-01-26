import { AxiosResponse } from 'axios';
import { JwtDataType, PreparedDataType, ResponseType } from '~types/PlayWalletApiType';
import { PlayWalletSdkOptionsType, QRPrepareParamType, QRTokenParamType, UnsignedTxType } from '~types/PlayWalletSdkType';
import PlayWalletProvider from '../provider/PlayWalletProvider';
declare class PlayWalletSdkWeb {
    private _chainRpcUrl;
    private _playWalletApiService;
    private _sdkInfo;
    private _provider;
    private _wemixSdk;
    private _prepared;
    private _signJwt;
    private _unsignedTx;
    private _sendSignedTx;
    constructor({ envConfig, clientId, chainId, chainRpcUrl, chains, prepared, signJwt, unsignedTx, sendSignedTx }: PlayWalletSdkOptionsType);
    protected initWemixSdk(): void;
    initPlayWallet(): Promise<boolean>;
    openAuthQrModal(isOpen: boolean): Promise<unknown>;
    openSignQrModal(unsignedTxParam: UnsignedTxType): Promise<unknown>;
    openModal({ type, req, chainName, message }: {
        type: any;
        req: any;
        chainName: any;
        message?: string;
    }): Promise<unknown>;
    getBalanceAll(): Promise<any>;
    getChainRpcUrl(): string;
    createProvider(): PlayWalletProvider;
    getProvider(): PlayWalletProvider;
    getwemixSdk(): any;
    getInterfaceFunction(): {
        prepared: (qrPrepareParam: QRPrepareParamType) => Promise<ResponseType<PreparedDataType>>;
        signJwt: (qrTokenParam: QRTokenParamType) => Promise<AxiosResponse<JwtDataType, any>>;
        unsignedTx: (unsignedTxParam: UnsignedTxType) => Promise<unknown>;
        signedTx: (hash: string, signature: string, type: number) => Promise<unknown>;
    };
}
export default PlayWalletSdkWeb;
