"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@web3-onboard/common");
var Adapter = /** @class */ (function () {
    function Adapter(instances) {
        this._instanceMap = new Map();
        this._memoFuncMap = new Map();
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
            var instance = instances_1[_i];
            this.addOn(instance);
        }
    }
    Adapter.prototype.request = function (args) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var memoKey, _i, _a, func, result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        memoKey = args === null || args === void 0 ? void 0 : args.method;
                        if (this._memoFuncMap.get(memoKey)) {
                            return [2 /*return*/, this._memoFuncMap.get(memoKey)(args)];
                        }
                        _i = 0, _a = Array.from(this._instanceMap.values());
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        func = _a[_i];
                        return [4 /*yield*/, func(args)];
                    case 2:
                        result = _b.sent();
                        if (result === null) {
                            return [3 /*break*/, 3];
                        }
                        this._memoFuncMap.set(memoKey, func);
                        return [2 /*return*/, result];
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: throw new common_1.ProviderRpcError({
                        code: common_1.ProviderRpcErrorCode.UNSUPPORTED_METHOD,
                        message: 'Method not implemented.'
                    });
                }
            });
        });
    };
    Adapter.prototype.addOn = function (instance) {
        this._instanceMap.set(instance, instance.request.bind(instance));
    };
    return Adapter;
}());
exports.default = Adapter;
