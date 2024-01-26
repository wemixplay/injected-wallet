import axios, { Method } from 'axios';
import { StoreInfoType } from '~types/PlayWalletStoreType';
import { wemixSdkStore } from '../../store';

let mainnetUrl: string = null;
let mainnetApiKey: string = null;

wemixSdkStore.subscribe((state: StoreInfoType) => {
  // mainnetUrl = state.mainnetUrl;
  mainnetUrl = '';
  // mainnetApiKey = state.mainnetApiKey;
  mainnetApiKey = '';
});

const requestMainnetApi = async ({
  method = 'post',
  url = '',
  data = null
}: {
  method: Method | string;
  url: string;
  data: any;
}) => {
  const response = await axios({
    method,
    url: `${mainnetUrl}/${url}`,
    data,
    withCredentials: false,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'api-key': `${mainnetApiKey}`
    }
  });
  return response.data;
};

export { requestMainnetApi };
