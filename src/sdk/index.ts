import wemixSdk from './wemix.js';

export default wemixSdk;

declare global {
  interface Window {
    Wemix3SDK?: any;
    wemix?: any;
    WEMIX_SDK?: any;
    ethers?: any;
  }
}

if (typeof window !== 'undefined') {
  window.Wemix3SDK = wemixSdk;
}
