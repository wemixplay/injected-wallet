"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testBalanceOf = void 0;
var tslib_1 = require("tslib");
var ethers_1 = require("ethers");
var providers_1 = require("@ethersproject/providers");
var DefaultAbi_1 = require("../../service/DefaultAbi");
var utils_1 = require("ethers/lib/utils");
var testBalanceOf = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var staticJsonRpcProvider, iface, contract, contractName, tokenSymbol, balance, balanceFormatted;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                staticJsonRpcProvider = new providers_1.StaticJsonRpcProvider("https://api.wemix.com");
                iface = new utils_1.Interface(DefaultAbi_1.ERC20_ABI);
                contract = new ethers_1.Contract('0x8E81fCc2d4A3bAa0eE9044E0D7E36F59C9BbA9c1', // 0x0000000000000000000000000000000000000000
                iface, staticJsonRpcProvider);
                return [4 /*yield*/, contract.name()];
            case 1:
                contractName = _a.sent();
                console.log("The token's contract name is " + contractName);
                return [4 /*yield*/, contract.symbol()];
            case 2:
                tokenSymbol = _a.sent();
                console.log("The token's symbol is " + tokenSymbol);
                return [4 /*yield*/, contract.balanceOf("0x07db04bcbe3661ebf22af7fb01e19eecd28b4f63")];
            case 3:
                balance = _a.sent();
                balanceFormatted = ethers_1.ethers.utils.formatUnits(balance, 18);
                console.log("Holder's balance is " + balanceFormatted + ' ' + tokenSymbol);
                return [2 /*return*/];
        }
    });
}); };
exports.testBalanceOf = testBalanceOf;
