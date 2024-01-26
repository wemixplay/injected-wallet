import PlayWalletSdkWeb from '../../sdk/PlayWalletSdkWeb';
declare class PlayWalletPlugin {
    private _walletApiService;
    private _sdkInstance;
    constructor(sdkInstance: PlayWalletSdkWeb);
    request({ method, params }: {
        method: any;
        params: any;
    }): Promise<any>;
}
export { PlayWalletPlugin };
