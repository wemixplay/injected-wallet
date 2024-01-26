import { Method } from 'axios';
declare const requestMainnetApi: ({ method, url, data }: {
    method: Method | string;
    url: string;
    data: any;
}) => Promise<any>;
export { requestMainnetApi };
