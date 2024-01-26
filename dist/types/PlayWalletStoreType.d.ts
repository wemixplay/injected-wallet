import { Chain } from '@web3-onboard/common';
import { ConfigType } from '../helper/constant/environment/defaultConfig';
type StoreInfoType = {
    envConfig: ConfigType;
    baseUrl: string;
    clientId: string;
    tokenAddress: string;
    chainId: string;
    chainRpcUrl: string;
    chains: Chain[];
    walletAddress: string;
    accessToken: string;
    refreshToken: string;
};
export type { StoreInfoType };
