import PlayWalletSdkWeb from '~sdk/PlayWalletSdkWeb';
declare const REQUEST_ACTION_TYPES: Readonly<{
    REQUEST_ACCOUNTS: "eth_requestAccounts";
    ACCOUNTS: "eth_accounts";
    SELECT_ACCOUNTS: "eth_selectAccounts";
    SIGN_TRANSACTION: "eth_signTransaction";
    SIGN: "eth_sign";
    PERSONAL_SIGN: "personal_sign";
    SIGN_TYPED_DATA: "eth_signTypedData";
    GET_BALANCE: "eth_getBalance";
    BALANCE_OF: "balanceOf";
    CHAIN_ID: "eth_chainId";
    WALLET_ADD_ETHEREUM_CHAIN: "wallet_addEthereumChain";
    SWITCH_ETHEREUM_CHAIN: "wallet_switchEthereumChain";
    SUBSCRIBE: "eth_subscribe";
    CLEAR_SUBSCRIPTIONS: "eth_clearSubscriptions";
    BLOCK_NUMBER: "eth_blockNumber";
    CALL: "eth_call";
    GAS_PRICE: "eth_gasPrice";
    CONTRACTS_ABI: "get_contractsAbi";
}>;
/**
 * Web3-Onboard EIP1193Provider.Request + https://docs.web3js.org/api/web3/namespace/types#EthExecutionAPI
 */
declare class RequestPlugin {
    /**
     * 플레이 월렛 EIP-1193 기능 서비스
     */
    private _requestService;
    constructor(sdkInstance: PlayWalletSdkWeb);
    request({ method, params }: {
        method: string;
        params: any;
    }): Promise<any>;
}
export { REQUEST_ACTION_TYPES, RequestPlugin };
