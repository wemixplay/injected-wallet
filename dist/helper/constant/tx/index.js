"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TX_METHOD_CONST = exports.CONTRACT_NAME_CONST = void 0;
var CONTRACT_NAME_CONST = Object.freeze({
    WemixSwapProxy: 'WemixSwapProxy',
    HomeExchanger: 'HomeExchanger',
    AwayExchanger: 'AwayExchanger',
    WemixTokenAway: 'WemixTokenAway',
    TornadoToken: 'TornadoToken',
    WTornadoToken: 'WTornadoToken',
    Mir4Darksteel: 'Mir4Darksteel',
    WMir4Darksteel: 'WMir4Darksteel',
    MirToken: 'MirToken',
    WMirToken: 'WMirToken',
    TokenBridgePublic: 'TokenBridgePublic',
    TokenBridgeTrade: 'TokenBridgeTrade',
    TokenBridgeService: 'TokenBridgeService',
    Staking: 'Staking',
    VotingPool: 'VotingPool',
    TokenTransfer: 'TokenTransfer',
    TokenTransferV2: 'TokenTransferV2',
    SwapRouterProxy: 'SwapRouterProxy',
    LiquidityRouterProxy: 'LiquidityRouterProxy',
    ShareVault: 'ShareVault',
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
exports.CONTRACT_NAME_CONST = CONTRACT_NAME_CONST;
var TX_METHOD_CONST = Object.freeze({
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
    EstimateBurn: 'estimateBurn',
    Burn: 'burn',
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
exports.TX_METHOD_CONST = TX_METHOD_CONST;
