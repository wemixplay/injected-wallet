"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPlugin = exports.REQUEST_ACTION_TYPES = void 0;
var tslib_1 = require("tslib");
var PlayWalletRequestService_1 = require("../../service/PlayWalletRequestService");
var REQUEST_ACTION_TYPES = Object.freeze({
    REQUEST_ACCOUNTS: 'eth_requestAccounts',
    ACCOUNTS: 'eth_accounts',
    SELECT_ACCOUNTS: 'eth_selectAccounts',
    SIGN_TRANSACTION: 'eth_signTransaction',
    SIGN: 'eth_sign',
    PERSONAL_SIGN: 'personal_sign',
    SIGN_TYPED_DATA: 'eth_signTypedData',
    GET_BALANCE: 'eth_getBalance',
    BALANCE_OF: 'balanceOf',
    CHAIN_ID: 'eth_chainId',
    WALLET_ADD_ETHEREUM_CHAIN: 'wallet_addEthereumChain',
    SWITCH_ETHEREUM_CHAIN: 'wallet_switchEthereumChain',
    SUBSCRIBE: 'eth_subscribe',
    CLEAR_SUBSCRIPTIONS: 'eth_clearSubscriptions',
    BLOCK_NUMBER: 'eth_blockNumber',
    CALL: 'eth_call',
    GAS_PRICE: 'eth_gasPrice',
    CONTRACTS_ABI: 'get_contractsAbi'
});
exports.REQUEST_ACTION_TYPES = REQUEST_ACTION_TYPES;
/**
 * Web3-Onboard EIP1193Provider.Request + https://docs.web3js.org/api/web3/namespace/types#EthExecutionAPI
 */
var RequestPlugin = /** @class */ (function () {
    function RequestPlugin(sdkInstance) {
        this._requestService = new PlayWalletRequestService_1.default(sdkInstance);
    }
    RequestPlugin.prototype.request = function (_a) {
        var method = _a.method, params = _a.params;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                switch (method) {
                    /**
                     * 사용자가 식별할 이더리움 주소를 제공하도록 요청합니다.
                     * 이 방법은 EIP-1102 에 명시되어 있습니다.
                     * 내부적으로 이 메소드는 eth_accounts 호출 권한을 얻기 위해 wallet_requestPermissions를 호출합니다.
                     */
                    case REQUEST_ACTION_TYPES.REQUEST_ACCOUNTS: {
                        return [2 /*return*/, this._requestService.callEthRequestAccounts()];
                    }
                    /**
                     * 사용자가 소유한 계정의 주소 목록을 반환합니다.
                     */
                    case REQUEST_ACTION_TYPES.ACCOUNTS: {
                        return [2 /*return*/, this._requestService.callEthAccounts()];
                    }
                    /**
                     * 사용자가 소유한 계정의 주소 목록을 반환합니다.
                     */
                    case REQUEST_ACTION_TYPES.SELECT_ACCOUNTS: {
                        return [2 /*return*/, this._requestService.callEthSelectAccounts()];
                    }
                    case REQUEST_ACTION_TYPES.SIGN_TRANSACTION: {
                        return [2 /*return*/, this._requestService.callEthSignTransaction(params)];
                    }
                    case REQUEST_ACTION_TYPES.SIGN: {
                        return [2 /*return*/, this._requestService.callEthSign(params)];
                    }
                    case REQUEST_ACTION_TYPES.PERSONAL_SIGN: {
                        return [2 /*return*/, this._requestService.callEthPersonalSign(params)];
                    }
                    case REQUEST_ACTION_TYPES.SIGN_TYPED_DATA: {
                        return [2 /*return*/, this._requestService.callEthSignTypedData(params)];
                    }
                    /**
                     * 연결된 월렛의 메인넷(테스트넷) 위믹스 코인 balance를 반환합니다.
                     */
                    case REQUEST_ACTION_TYPES.GET_BALANCE: {
                        return [2 /*return*/, this._requestService.callBalanceOf()];
                    }
                    /**
                     * 연결된 월렛의 체인에 소속된 토큰 balance를 반환합니다.
                     */
                    case REQUEST_ACTION_TYPES.BALANCE_OF: {
                        return [2 /*return*/, this._requestService.callEthGetBalance(params.tokenAddress)];
                    }
                    case REQUEST_ACTION_TYPES.CHAIN_ID: {
                        return [2 /*return*/, this._requestService.callEthChainId(params)];
                    }
                    case REQUEST_ACTION_TYPES.WALLET_ADD_ETHEREUM_CHAIN: {
                        return [2 /*return*/, this._requestService.callEthWalletAddEthereumChain(params)];
                    }
                    case REQUEST_ACTION_TYPES.SWITCH_ETHEREUM_CHAIN: {
                        return [2 /*return*/, this._requestService.callEthSwitchEthereumChain(params)];
                    }
                    /**
                     * 새로운 블록, 새로운 보류 중인 거래 또는 계정 상태 변경과 같은 Ethereum 네트워크의 특정 이벤트를 구독합니다.
                     * 이벤트가 발생하면 해당 데이터와 함께 클라이언트에 알림이 전송됩니다.
                     * 알림 수신을 중지하려면 클라이언트가 를 사용하여 구독을 취소할 수 있습니다.
                     */
                    case REQUEST_ACTION_TYPES.SUBSCRIBE: {
                        return [2 /*return*/, this._requestService.callEthSubscribe(params)];
                    }
                    case REQUEST_ACTION_TYPES.CLEAR_SUBSCRIPTIONS: {
                        return [2 /*return*/, this._requestService.callEthClearSubscriptions(params)];
                    }
                    case REQUEST_ACTION_TYPES.BLOCK_NUMBER: {
                        return [2 /*return*/, this._requestService.callEthBlockNumber()];
                    }
                    case REQUEST_ACTION_TYPES.CALL: {
                        return [2 /*return*/, this._requestService.callEthCall(params)];
                    }
                    case REQUEST_ACTION_TYPES.GAS_PRICE: {
                        return [2 /*return*/, this._requestService.callEthGasPrice()];
                    }
                    case REQUEST_ACTION_TYPES.CONTRACTS_ABI: {
                        return [2 /*return*/, this._requestService.getContractAbi(params)];
                    }
                    default: {
                        // throw new Error('Method not implemented.');
                        return [2 /*return*/, null];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return RequestPlugin;
}());
exports.RequestPlugin = RequestPlugin;
