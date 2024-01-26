import { StoreInfoType } from '~types/PlayWalletStoreType';
declare const wemixSdkStore: import("zustand/vanilla").StoreApi<StoreInfoType>;
declare const get: (key: string) => any;
declare const set: (key: string, value: any) => void;
declare const initStore: () => void;
export { wemixSdkStore, get, set, initStore };
