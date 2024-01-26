"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var eventemitter3_1 = require("eventemitter3");
var adapter_1 = require("../adapter");
var playWalletPlugin_1 = require("../adapter/plugin/playWalletPlugin");
var requestPlugin_1 = require("../adapter/plugin/requestPlugin");
var PlayWalletProvider = /** @class */ (function (_super) {
    tslib_1.__extends(PlayWalletProvider, _super);
    function PlayWalletProvider(instance) {
        var _this = _super.call(this) || this;
        _this.adapter = new adapter_1.default([new requestPlugin_1.RequestPlugin(instance), new playWalletPlugin_1.PlayWalletPlugin(instance)]);
        return _this;
    }
    PlayWalletProvider.prototype.request = function (args) {
        return this.adapter.request(args);
    };
    /**
     * Web3-onboard 커넥션 종료 시 콜백 이벤트 기능
     */
    PlayWalletProvider.prototype.disconnect = function () {
        console.info('disconnected!');
        window === null || window === void 0 ? true : delete window.ethers;
    };
    /**
     * 월렛에서 선택된 체인에 소속된 토큰 balance 조회 기능
     * @params tokenAddress 토큰 컨트랙트 주소
     */
    PlayWalletProvider.prototype.getBalance = function (tokenAddress) {
        return this.adapter.request({
            method: requestPlugin_1.REQUEST_ACTION_TYPES.BALANCE_OF,
            params: { tokenAddress: tokenAddress }
        });
    };
    /**
     * 연결된 월렛에 선택된 체인 아이디
     */
    PlayWalletProvider.prototype.getChainId = function () {
        return this.adapter.request({ method: requestPlugin_1.REQUEST_ACTION_TYPES.CHAIN_ID });
    };
    return PlayWalletProvider;
}(eventemitter3_1.EventEmitter));
exports.default = PlayWalletProvider;
