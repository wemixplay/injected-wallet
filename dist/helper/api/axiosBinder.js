import { __awaiter, __generator } from "tslib";
import axios from 'axios';
import { wemixSdkStore } from '../../store';
var binderUrl = null;
wemixSdkStore.subscribe(function (state) {
    binderUrl = '';
});
var requestBinderApi = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.post(binderUrl, params)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
export { requestBinderApi };
