import axios from 'axios';
import { StoreInfoType } from '~types/PlayWalletStoreType';
import { wemixSdkStore } from '../../store';

let binderMainnetUrl: string = null;
let binderMainnetJWT: string = null;

wemixSdkStore.subscribe((state: StoreInfoType) => {
  // binderMainnetUrl = state.binderMainnetUrl;
  // binderMainnetJWT = state.binderMainnetJWT;
});

const requestBinderMainnetApi = async (params: any) => {
  const response = await axios.post(binderMainnetUrl, params, {
    withCredentials: false,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${binderMainnetJWT}`
    }
  });
  return response.data;
};

export { requestBinderMainnetApi };
