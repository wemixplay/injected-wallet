"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var providers_1 = require("@ethersproject/providers");
var ethers_1 = require("ethers");
var axiosMainnet_1 = require("../helper/api/axiosMainnet");
var store_1 = require("../store");
var DefaultAbi_1 = require("./DefaultAbi");
var PlayWalletRequestService = /** @class */ (function () {
    function PlayWalletRequestService(sdkInstance) {
        var _this = this;
        this._sdkInstance = sdkInstance;
        this._chainId = (0, store_1.get)('chainId');
        this._chains = (0, store_1.get)('chains');
        this._walletAddress = (0, store_1.get)('walletAddress');
        store_1.wemixSdkStore.subscribe(function (state) {
            _this._chainId = state.chainId;
            _this._chainRpcUrl = state.chainRpcUrl;
            _this._chains = state.chains;
            _this._walletAddress = state.walletAddress;
            _this._staticJsonRpcProvider = new providers_1.StaticJsonRpcProvider(state.chainRpcUrl);
        });
    }
    /**
     * JsonRpcProvider 초기화
     * 1) Provider 없을 때
     * 2) Provider RPC URL이 상태에서 관리되는 URL과 다른 경우
     */
    PlayWalletRequestService.prototype._initProvider = function () {
        var _a, _b;
        if (!this._staticJsonRpcProvider ||
            ((_b = (_a = this._staticJsonRpcProvider) === null || _a === void 0 ? void 0 : _a.connection) === null || _b === void 0 ? void 0 : _b.url) !== (0, store_1.get)('chainRpcUrl')) {
            this._staticJsonRpcProvider = new providers_1.StaticJsonRpcProvider(this._chainRpcUrl || (0, store_1.get)('chainRpcUrl'));
        }
    };
    /**
     * wei to ether
     * @param value bignumber(hex)
     * @returns ether 단위 값
     */
    PlayWalletRequestService.prototype.hexToString = function (value) {
        return value ? ethers_1.BigNumber.from(value).mul('1000000000000000000').toString() : '0';
    };
    /**
     * 월렛 연결 계정(월렛 주소) 연결 관련 처리기
     * @returns 월렛 주소 리스트
     */
    PlayWalletRequestService.prototype.callEthRequestAccounts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var account, address;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._walletAddress) {
                            return [2 /*return*/, [this._walletAddress]];
                        }
                        return [4 /*yield*/, this._sdkInstance.openAuthQrModal(true)];
                    case 1:
                        account = _a.sent();
                        address = account.address;
                        (0, store_1.set)('walletAddress', address);
                        return [2 /*return*/, address ? [address] : []];
                }
            });
        });
    };
    /**
     * 관리되고 있는 월렛 주소 반환기
     * @returns 월렛 주소 리스트
     */
    PlayWalletRequestService.prototype.callEthAccounts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, [this._walletAddress]];
            });
        });
    };
    /**
     * 선택된 월렛 주소 반환기
     * @returns 월렛 주소 리스트
     */
    PlayWalletRequestService.prototype.callEthSelectAccounts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, [this._walletAddress]];
            });
        });
    };
    /**
     * WemixPlay 전용 send transaction
     * TODO: JsonRpcProvider 처리과정으로 변경될 예정
     * @param transactionObject 서명 전 트랜젝션에 필요한 요청 파라미터
     * @returns 서명된 사인 hash 값
     */
    PlayWalletRequestService.prototype.callEthSignTransaction = function (transactionObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hashes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._sdkInstance.openSignQrModal(transactionObject)];
                    case 1:
                        hashes = _a.sent();
                        return [2 /*return*/, hashes];
                }
            });
        });
    };
    /**
     * wemix mainnet transaction sign
     * @deprecated
     * @param [address, message] 월렛 어드레스
     * @returns
     */
    PlayWalletRequestService.prototype.callEthSign = function (_a) {
        var address = _a[0], message = _a[1];
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, ''];
            });
        });
    };
    /**
     * wemix mainnet transaction sign
     * @deprecated
     * @param param0
     * @returns
     */
    PlayWalletRequestService.prototype.callEthPersonalSign = function (_a) {
        var message = _a[0], address = _a[1];
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, ''];
            });
        });
    };
    /**
     * wemix mainnet transaction sign
     * @param param0
     * @returns
     */
    PlayWalletRequestService.prototype.callEthSignTypedData = function (_a) {
        var address = _a[0], eip712TypedData = _a[1];
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, ''];
            });
        });
    };
    /**
     * 연결된 월렛의 체인에 소속된 토큰 balance 정보 조회 기능
     * @param tokenAddress 토큰 컨트랙트 주소
     * @returns ether 단위로 변환된 토큰 balance 정보
     */
    PlayWalletRequestService.prototype.callEthGetBalance = function (tokenAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contract, balance, balanceFormatted;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._initProvider();
                        contract = new ethers_1.Contract(tokenAddress, JSON.parse(JSON.stringify(DefaultAbi_1.ERC20_ABI)), this._staticJsonRpcProvider);
                        return [4 /*yield*/, contract.balanceOf(this._walletAddress)];
                    case 1:
                        balance = _a.sent();
                        balanceFormatted = ethers_1.ethers.utils.formatUnits(balance, 18);
                        return [2 /*return*/, balanceFormatted];
                }
            });
        });
    };
    /**
     * 연결된 월렛의 메인넷(테스트넷) 위믹스 코인 balance 정보 조회 기능
     * @returns ether 단위로 변환된 위믹스 코인 balance 정보
     */
    PlayWalletRequestService.prototype.callBalanceOf = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var balance;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._staticJsonRpcProvider) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._staticJsonRpcProvider.getBalance(this._walletAddress)];
                    case 1:
                        balance = _a.sent();
                        return [2 /*return*/, ethers_1.ethers.utils.formatUnits(balance, 18)];
                    case 2: return [2 /*return*/, '0.0'];
                }
            });
        });
    };
    PlayWalletRequestService.prototype.callEthChainId = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._chainId];
            });
        });
    };
    PlayWalletRequestService.prototype.callEthWalletAddEthereumChain = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, ''];
            });
        });
    };
    PlayWalletRequestService.prototype.callEthSwitchEthereumChain = function (_a) {
        var _b;
        var chainId = _a[0].chainId;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_c) {
                (0, store_1.set)('chainId', chainId);
                (0, store_1.set)('chainRpcUrl', (_b = this._chains) === null || _b === void 0 ? void 0 : _b.find(function (chainInfo) { return chainInfo.id === chainId; }));
                this._sdkInstance.getProvider().emit('chainChanged', chainId);
                return [2 /*return*/];
            });
        });
    };
    PlayWalletRequestService.prototype.callEthSubscribe = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                // provider on('message', (message) => { message.type === 'eth_subscription' 처리가 포함되어야 함 })
                return [2 /*return*/, ''];
            });
        });
    };
    PlayWalletRequestService.prototype.callEthClearSubscriptions = function (_a) {
        var keepSyncing = _a[0];
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @returns UNIT
     */
    PlayWalletRequestService.prototype.callEthBlockNumber = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._staticJsonRpcProvider.getBlockNumber()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlayWalletRequestService.prototype.callEthCall = function (_a) {
        var transaction = _a[0], blockTag = _a[1];
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._staticJsonRpcProvider.call(transaction, blockTag)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    PlayWalletRequestService.prototype.callEthGasPrice = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var gasPrice;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._staticJsonRpcProvider.getGasPrice()];
                    case 1:
                        gasPrice = _a.sent();
                        return [2 /*return*/, ethers_1.ethers.utils.formatUnits(gasPrice, 18)];
                }
            });
        });
    };
    // WWEMIX: 0x7D72b22a74A216Af4a002a1095C8C707d6eC1C5f
    // Valkyreum:  0x09C7ADa689A77a230081Ab5aaDfa787aC711D4a8 -> contract is not yet verified
    PlayWalletRequestService.prototype.getContractAbi = function (params) {
        if (params === void 0) { params = '0x7D72b22a74A216Af4a002a1095C8C707d6eC1C5f'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axiosMainnet_1.requestMainnetApi)({
                            method: 'get',
                            url: "v1/contracts/".concat(params, "/abi"),
                            data: null
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PlayWalletRequestService;
}());
exports.default = PlayWalletRequestService;
