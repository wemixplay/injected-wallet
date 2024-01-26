import { AxiosResponse } from 'axios';
import { Chain, WalletInit } from '@web3-onboard/common';
import {
  JwtDataType,
  PreparedDataType,
  ResponseType,
  ResponseUnsignedType
} from '~types/PlayWalletApiType';
import { QRPrepareParamType, QRTokenParamType, UnsignedTxType } from '~types/PlayWalletSdkType';
import icon from './assets/playWemixIcon';
import { ENV_CONFIG } from './helper/constant/environment';
import PlayWalletSdkWeb from './sdk/PlayWalletSdkWeb';

function wemixPlayWallet({
  env,
  clientId,
  interfaceFunction
}: {
  env?: string;
  clientId: string;
  interfaceFunction?: {
    prepared?: (qrPrepareParam: QRPrepareParamType) => Promise<ResponseType<PreparedDataType>>;
    signJwt?: (qrTokenParam: QRTokenParamType) => Promise<AxiosResponse<JwtDataType>>;
    unsignedTx?: (unsignedTxParam: UnsignedTxType) => Promise<ResponseUnsignedType>;
    sendSignedTx?: (hash: string, signature: string, type: number) => Promise<unknown>;
  };
}): WalletInit {
  const envConfig = ENV_CONFIG(env || 'prod');

  // playWalletSdk 초기화 WEMIX 3.0 mainnet 혹은 testnet 초기화
  const findChain = (chains: Chain[]) => {
    const chain = chains?.find((chainInfo) => chainInfo?.id === envConfig?.chainId);
    return chain ?? null;
  };

  return () => {
    return {
      label: 'Wemix Play Wallet',
      getIcon: async () => icon,
      getInterface: async ({ chains, appMetadata }) => {
        let searchedChain = chains[0];
        searchedChain = findChain(chains);
        const playWalletSdk = new PlayWalletSdkWeb({
          envConfig,
          clientId,
          chainId: searchedChain?.id,
          chainRpcUrl: searchedChain?.rpcUrl,
          chains,
          prepared: interfaceFunction.prepared,
          signJwt: interfaceFunction.signJwt,
          unsignedTx: interfaceFunction.unsignedTx,
          sendSignedTx: interfaceFunction.sendSignedTx
        });

        await playWalletSdk.initPlayWallet();
        const provider = playWalletSdk.createProvider();
        return { provider, instance: playWalletSdk.getwemixSdk() };
      }
    };
  };
}

export default wemixPlayWallet;
