import { BalanceType } from './PlayWalletSdkType';

interface PlayWalletProviderService {
  getBalanceAll: () => Promise<Array<BalanceType>>;
  getBalanceOf: ({ chainName, contractName, contractAddress }: { chainName: string; contractName: string; contractAddress: string }) => Promise<unknown>;
}

export type { PlayWalletProviderService };
