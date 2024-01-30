import { __extends } from "tslib";
import { EventEmitter } from 'eventemitter3';
import Adapter from '../adapter';
import { PlayWalletPlugin } from '../adapter/plugin/playWalletPlugin';
import { RequestPlugin, REQUEST_ACTION_TYPES } from '../adapter/plugin/requestPlugin';
var PlayWalletProvider = /** @class */ (function (_super) {
    __extends(PlayWalletProvider, _super);
    function PlayWalletProvider(instance) {
        var _this = _super.call(this) || this;
        _this.adapter = new Adapter([new RequestPlugin(instance), new PlayWalletPlugin(instance)]);
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
            method: REQUEST_ACTION_TYPES.BALANCE_OF,
            params: { tokenAddress: tokenAddress }
        });
    };
    /**
     * 연결된 월렛에 선택된 체인 아이디
     */
    PlayWalletProvider.prototype.getChainId = function () {
        return this.adapter.request({ method: REQUEST_ACTION_TYPES.CHAIN_ID });
    };
    return PlayWalletProvider;
}(EventEmitter));
export default PlayWalletProvider;
