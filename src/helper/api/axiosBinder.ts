import axios from 'axios';
import { StoreInfoType } from '~types/PlayWalletStoreType';
import { wemixSdkStore } from '../../store';

let binderUrl: string = null;

wemixSdkStore.subscribe((state: StoreInfoType) => {
  binderUrl = '';
});

const requestBinderApi = async (params: any) => {
  const response = await axios.post(binderUrl, params);
  return response.data;
};

export { requestBinderApi };
