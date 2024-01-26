import PlayWalletSdkWeb from '../../sdk/PlayWalletSdkWeb';
declare class PlayPlugin {
    private _walletApiService;
    private _sdkInstance;
    constructor(sdkInstance: PlayWalletSdkWeb);
    request({ method, params }: {
        method: any;
        params: any;
    }): Promise<unknown>;
}
export { PlayPlugin };
