import PlayWalletSdkWeb from '../../sdk/PlayWalletSdkWeb';
declare const REQUEST_ACTION_TYPES_API: Readonly<{
    PLAY_WALLET_PREPARED: "playWallet_prepared";
    PLAY_WALLET_ACCESS_TOKEN: "playWallet_accesstoken";
    PLAY_WALLET_MAKE_UNSIGNED_TRANSACTION: "playWallet_makeUnsignedTx";
    PLAY_WALLET_SEND_SIGNED_TRANSACTION: "playWallet_sendSignedTx";
    PLAY_WALLET_MAKE_UNSIGNED_WITH_SEND_TRANSACTION: "playWallet_makeUnsignedWithSendTx";
    PLAY_WALLET_LOGIN: "playWallet_login";
    PLAY_WALLET_VERIFY_TOKEN: "playWallet_verifyToken";
    PLAY_WALLET_BALANCE_ALL: "playWallet_balanceAll";
}>;
declare class PlayWalletPlugin {
    private _walletApiService;
    private _sdkInstance;
    constructor(sdkInstance: PlayWalletSdkWeb);
    request({ method, params }: {
        method: any;
        params: any;
    }): Promise<any>;
}
export { PlayWalletPlugin, REQUEST_ACTION_TYPES_API };
