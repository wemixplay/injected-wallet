const CONTRACT_NAME_CONST = Object.freeze({
  WemixSwapProxy: 'WemixSwapProxy',
  HomeExchanger: 'HomeExchanger',
  AwayExchanger: 'AwayExchanger',
  WemixTokenAway: 'WemixTokenAway',
  TornadoToken: 'TornadoToken',
  WTornadoToken: 'WTornadoToken',
  Mir4Darksteel: 'Mir4Darksteel', // DRACO
  WMir4Darksteel: 'WMir4Darksteel', // WDRACO
  MirToken: 'MirToken', // CQ ZuanShi
  WMirToken: 'WMirToken', // WCQ ZuanShi
  TokenBridgePublic: 'TokenBridgePublic', // Cypress
  TokenBridgeTrade: 'TokenBridgeTrade', // Wemix
  TokenBridgeService: 'TokenBridgeService', // GameToken
  Staking: 'Staking', // Staking
  VotingPool: 'VotingPool', // Staking
  TokenTransfer: 'TokenTransfer',
  TokenTransferV2: 'TokenTransferV2',
  SwapRouterProxy: 'SwapRouterProxy',
  LiquidityRouterProxy: 'LiquidityRouterProxy',
  ShareVault: 'ShareVault', // Vault
  ReflectRouter: 'ReflectRouter',
  GetUserVault: 'getUserVault',
  WemixStaking360: 'WemixStaking360V2',
  PlaySwapRouter: 'PlaySwapRouter',
  PlaySwapZapIn: 'PlaySwapZapIn',
  PlaySwapZapOut: 'PlaySwapZapOut',
  FanTokenDonate: 'FanTokenRouterV2',
  FanTokenClaim: 'FanTokenVault',
  ReflectVault: 'ReflectVault',
  ReflectExchanger: 'ReflectExchanger',
  ReflectRouterV2: 'ReflectRouterV2',
  ReflectVaultV3: 'ReflectVaultV3'
});

const TX_METHOD_CONST = Object.freeze({
  Approve: 'approve',
  BalanceOf: 'balanceOf',
  SingleAddLiquidity: 'singleAddLiquidity',
  SingleRemoveLiquidity: 'singleRemoveLiquidity',
  SingleLiquidityVaule: 'singleLiquidityVaule',
  SingleQuote: 'singleQuote',
  AddLiquidity: 'addLiquidity',
  RemoveLiquidity: 'removeLiquidity',
  SwapIn: 'swapExactTokensForTokens',
  SwapOut: 'swapTokensForExactTokens',
  fromWemixSwapIn: 'swapExactWEMIXForTokens',
  fromWemixSwapOut: 'swapWEMIXForExactTokens',
  toWemixSwapIn: 'swapExactTokensForWEMIX',
  toWemixSwapOut: 'swapTokensForExactWEMIX',
  WemixSwapIn: 'swapExactWEMIXForTokens',
  WemixSwapOut: 'swapTokensForExactWEMIX',
  EstimateOut: 'estimateOut',
  Exit: 'exit',
  Deposit: 'deposit',
  Stake: 'stake',
  Unstake: 'unstake',
  Vote: 'vote',
  CancelVote: 'cancelVote',
  CurrentCost: 'currentCost',
  CancelVoteAllAtOnce: 'cancelVoteAllAtOnce',
  Claim: 'claim',
  Transfer: 'transfer',
  TransferToken: 'transferToken',
  EstimateBurn: 'estimateBurn', // 소각 예상결과
  Burn: 'burn', // 소각
  GetUserVault: 'getUserVault',
  UnwrappedWithdraw: 'unwrappedWithdraw',
  Withdraw: 'withdraw',
  FUSION: 'fusion',
  FISSION: 'fission',
  ZAPIN: 'zapIn',
  ZAPOUT: 'zapOut',
  UNPROPORTIONALZAPIN: 'unproportionalZapIn',
  DONATE: 'donate',
  CLAIM_FANTOKEN: 'claimFanToken',
  EXCHANGE_ALL: 'exchangeAll',
  withdrawAll: 'withdrawAll'
});

export { CONTRACT_NAME_CONST, TX_METHOD_CONST };
