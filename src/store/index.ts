import { StoreInfoType } from '~types/PlayWalletStoreType';
import { createStore } from 'zustand/vanilla';
import { cloneObject, CONST } from '../helper';

const INIT_STORE_DATA = Object.freeze({
  envConfig: null,
  baseUrl: CONST.BLANK,
  clientId: CONST.BLANK,
  tokenAddress: CONST.BLANK,
  chainId: CONST.BLANK,
  chainRpcUrl: CONST.BLANK,
  chains: [],
  walletAddress: CONST.BLANK,
  accessToken: CONST.BLANK,
  refreshToken: CONST.BLANK
});

const wemixSdkStore = createStore<StoreInfoType>(() => cloneObject(INIT_STORE_DATA));

const get = (key: string) => {
  return wemixSdkStore.getState()?.[key] ?? undefined;
};

const set = (key: string, value: any) => {
  wemixSdkStore.setState((state) => ({ ...state, [key]: value }));
};

const initStore = () => wemixSdkStore.setState(() => cloneObject(INIT_STORE_DATA));

export { wemixSdkStore, get, set, initStore };
