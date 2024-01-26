type ConfigType = {
  baseUrl: string;
  a2aRelayUrl: string;
  webAuthUrl: string;
  oauthUrl: string;
  walletUrl: string;
  mainnetUrl?: string;
  mainnetApiKey?: string;
  binderUrl?: string;
  binderMainnetUrl?: string;
  chainId: string;
  chainInfo: {
    mainnet: string;
    testnet: string;
    cypress: string;
    wemix: string;
    tornado: string;
  };
};

export type { ConfigType };
