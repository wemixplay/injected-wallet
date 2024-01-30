import { __awaiter, __generator } from "tslib";
import { Contract, ethers } from 'ethers';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { ERC20_ABI } from '../../service/DefaultAbi';
import { Interface } from 'ethers/lib/utils';
var testBalanceOf = function () { return __awaiter(void 0, void 0, void 0, function () {
    var staticJsonRpcProvider, iface, contract, contractName, tokenSymbol, balance, balanceFormatted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                staticJsonRpcProvider = new StaticJsonRpcProvider("https://api.wemix.com");
                iface = new Interface(ERC20_ABI);
                contract = new Contract('0x8E81fCc2d4A3bAa0eE9044E0D7E36F59C9BbA9c1', // 0x0000000000000000000000000000000000000000
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
                balanceFormatted = ethers.utils.formatUnits(balance, 18);
                console.log("Holder's balance is " + balanceFormatted + ' ' + tokenSymbol);
                return [2 /*return*/];
        }
    });
}); };
export { testBalanceOf };
