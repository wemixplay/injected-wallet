# @wemixplay/injected-wallet

## Wallet module for connecting WemixPlay Wallet SDK to web3-onboard
See [WemixPlay Wallet Developer Docs for onboarding](https://wemadetree.gitbook.io/1.1.0-ko)

### Install

```
npm i @wemixplay/injected-wallet
or
yarn add @wemmixplay/injected-wallet
```

## Usage
```typescript
import Onboard from '@web3-onboard/core'
import playWalletModule from '@wemixplay/injected-wallet';

// initialize the module
const playWallet = playWalletModule({
  clientId: 'Issued client ID by wemixplay developer console. (https://console.wemixplay.com)'
});

const onboard = Onboard({
  // ... other Onboard options
  chains: [
    {
      id: '0x457',
      token: 'WWEMIX',
      label: 'WEMIX3.0 Mainnet',
      rpcUrl: 'https://api.wemix.com'
    },
    {
      id: '0x458',
      token: 'TWEMIX',
      label: 'WEMIX3.0 Testnet',
      rpcUrl: 'https://api.test.wemix.com'
    }
    // ...other chains
  ],
  wallets: [
    playWallet
    // ... other wallets
  ]
});

const connectedWallets = await onboard.connectWallet();
console.log(connectedWallets);
```

## Options
- If the client ID issued by the "wemixplay developer console" is serverless mode, there is no need to implement prepared and signJwt directly.
- Transactions must use the Wemix3.0 mainnet BinderAPI, so game companies must create their own backend module.
```typescript
import playWalletModule from '@wemixplay/injected-wallet';

const playWallet = playWalletModule({
  // ...Issued client ID
  interfaceFunction: {
    prepared: prepared, /** It is not necessary if you use a client ID for serverless mode. */
    signJwt: signJwt, /** It is not necessary if you use a client ID for serverless mode. */
    unsignedTx: unsignedTx, /** Backend communication function created by game companies for transactions. */
    sendSignedTx: sendSignedTx /** Backend communication function created by game companies for transactions. */
  }
});
```
