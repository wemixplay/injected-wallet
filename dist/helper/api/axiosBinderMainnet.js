import { __awaiter, __generator } from "tslib";
import axios from 'axios';
import { wemixSdkStore } from '../../store';
var binderMainnetUrl = null;
var binderMainnetJWT = null;
wemixSdkStore.subscribe(function (state) {
    // binderMainnetUrl = state.binderMainnetUrl;
    // binderMainnetJWT = state.binderMainnetJWT;
});
var requestBinderMainnetApi = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.post(binderMainnetUrl, params, {
                    withCredentials: false,
                    timeout: 60000,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer ".concat(binderMainnetJWT)
                    }
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
export { requestBinderMainnetApi };
