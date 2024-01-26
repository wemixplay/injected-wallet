"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stgConfig = void 0;
var stgConfig = Object.freeze({
    baseUrl: 'https://stg-api.wemixplay.com',
    a2aRelayUrl: 'https://stg-a2a.wemixnetwork.com',
    webAuthUrl: 'https://stg-webauth.wemixnetwork.com',
    oauthUrl: 'https://stg-oauth.wemixnetwork.com',
    walletUrl: 'https://stg-dapp.wemixnetwork.com',
    mainnetUrl: 'https://explorerapi.wemix.com',
    mainnetApiKey: '1ba5e446edf1997f67b51bf9e60b3fbba6fa1bf84301115292805d7e24f43539',
    binderUrl: 'https://stg-binder.wemixnetwork.com',
    binderMainnetUrl: 'https://stg-wemix-binder.wemixnetwork.com',
    chainId: '0x458',
    chainInfo: {
        mainnet: '0x457',
        testnet: '0x458',
        cypress: '4001',
        wemix: '4002',
        tornado: '4003'
    }
});
exports.stgConfig = stgConfig;
