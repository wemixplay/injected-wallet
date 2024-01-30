import { __awaiter, __generator } from "tslib";
import axios from 'axios';
import { wemixSdkStore } from '../../store';
var mainnetUrl = null;
var mainnetApiKey = null;
wemixSdkStore.subscribe(function (state) {
    // mainnetUrl = state.mainnetUrl;
    mainnetUrl = '';
    // mainnetApiKey = state.mainnetApiKey;
    mainnetApiKey = '';
});
var requestMainnetApi = function (_a) {
    var _b = _a.method, method = _b === void 0 ? 'post' : _b, _c = _a.url, url = _c === void 0 ? '' : _c, _d = _a.data, data = _d === void 0 ? null : _d;
    return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, axios({
                        method: method,
                        url: "".concat(mainnetUrl, "/").concat(url),
                        data: data,
                        withCredentials: false,
                        timeout: 60000,
                        headers: {
                            'Content-Type': 'application/json',
                            'api-key': "".concat(mainnetApiKey)
                        }
                    })];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
};
export { requestMainnetApi };
