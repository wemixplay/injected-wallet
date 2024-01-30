import './wemix.js';

declare global {
  interface Window {
    Wemix3SDK?: any;
    wemix?: any;
    WEMIX_SDK?: any;
    ethers?: any;
  }
}
