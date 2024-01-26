"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodConfig = void 0;
var prodConfig = Object.freeze({
    baseUrl: 'https://api.wemixplay.com',
    a2aRelayUrl: 'https://a2a.wemixnetwork.com',
    webAuthUrl: 'https://webauth.wemixnetwork.com',
    oauthUrl: 'https://oauth.wemixnetwork.com',
    walletUrl: 'https://dapp.wemixnetwork.com',
    mainnetUrl: 'https://explorerapi.wemix.com',
    mainnetApiKey: '1ba5e446edf1997f67b51bf9e60b3fbba6fa1bf84301115292805d7e24f43539',
    binderUrl: 'https://binder.wemixnetwork.com',
    binderMainnetUrl: 'https://wemix-binder.wemixnetwork.com',
    chainId: '0x457',
    chainInfo: {
        mainnet: '0x457',
        testnet: '0x458',
        cypress: '4001',
        wemix: '4002',
        tornado: '4003'
    }
});
exports.prodConfig = prodConfig;
