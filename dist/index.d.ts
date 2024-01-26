import { AxiosResponse } from 'axios';
import { WalletInit } from '@web3-onboard/common';
import { JwtDataType, PreparedDataType, ResponseType, ResponseUnsignedType } from '~types/PlayWalletApiType';
import { QRPrepareParamType, QRTokenParamType, UnsignedTxType } from '~types/PlayWalletSdkType';
declare function wemixPlayWallet({ env, clientId, interfaceFunction }: {
    env?: string;
    clientId: string;
    interfaceFunction?: {
        prepared?: (qrPrepareParam: QRPrepareParamType) => Promise<ResponseType<PreparedDataType>>;
        signJwt?: (qrTokenParam: QRTokenParamType) => Promise<AxiosResponse<JwtDataType>>;
        unsignedTx?: (unsignedTxParam: UnsignedTxType) => Promise<ResponseUnsignedType>;
        sendSignedTx?: (hash: string, signature: string, type: number) => Promise<unknown>;
    };
}): WalletInit;
export default wemixPlayWallet;
