import axios from 'axios';
import { StoreInfoType } from '~types/PlayWalletStoreType';
import { wemixSdkStore } from '../../store';

let chainRpcUrl: string = null;

wemixSdkStore.subscribe((state: StoreInfoType) => {
  chainRpcUrl = state.chainRpcUrl;
});

const requestChainRpcApi = async (params: any) => {
  const response = await axios.post(chainRpcUrl, params, {
    withCredentials: false,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export { requestChainRpcApi };
