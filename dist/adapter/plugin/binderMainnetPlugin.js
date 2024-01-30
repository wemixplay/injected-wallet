import { __awaiter, __generator } from "tslib";
import { requestBinderMainnetApi } from '../../helper/api/axiosBinderMainnet';
var REQUEST_ACTION_TYPES_BINDER_MAINNET = Object.freeze({
    /** contract 이름으로 contract address 조회 */
    CONTRACT_ADDRESS: 'contract_contractAddress',
    /** contract 메소드 콜 */
    CONTRACT_CALL: 'contract_callContract',
    /** 트랜잭션 hash 언패킹 이벤트 */
    CONTRACT_EVENT_LOG: 'contract_eventLog',
    /** 메시지의 솔리디티 sha3 해시 값 조회 */
    CONTRACT_SOLIDITY_SHA3: 'contract_soliditySHA3',
    /** 솔리디티 sha3(keccak256) 해시 값 조회 */
    CONTRACT_KECCAK256: 'contract_keccak256',
    /** hash에 대한 signature의 서명 address를 recover하여 반환 */
    CONTRACT_RECOVER_HASH: 'contract_recoverHash',
    /** hash에 대한 signature의 서명 address를 recover하여 반환 */
    CONTRACT_RECOVER_MESSAGE: 'contract_recoverMessage',
    /** 서명되지 않은 트랜잭션 및 트랜잭션 해시를 반환합니다. 서명 후 SendSignedTx 메소드를 통한 Tx 처리
        요청 시 헤더에 미리 발급된 JWT를 포함시켜 수수료 대납 지원 여부를 문의합니다. JWT가 없는 경우 estimateGas를 반환합니다. */
    TX_MAKE_UNSIGN: 'tx_makeUnsignedTx',
    /** 서명되지 않은 트랜잭션과 서명으로 트랜잭션을 처리합니다.
        사전에 트랜잭션에 서명을 진행할 유저가 트랜잭션 전송 수수료를 위한 충분한 잔액을 소유하고 있어야 함.
        수수료 대납에 대한 계약을 체결한 고객사의 경우 발급받은 인증 토큰을 활용하여 요청 시 위믹스 플랫폼이 트랜잭션 전송 수수료를 대납함.
        인증 토큰 만료, 가스비 부족 등으로 대납 전송이 불가능할 경우 유저에게 전송 수수료를 부여함으로써 강제로 트랜잭션을 전송하도록(forceSend) 선택할 수 있으며, 이때 true로 하면 유저가 가스비를 지급하며 트랜잭션이 전송됩니다.
        파라미터를 입력하지 않으시거나 false로 입력하시면 유저에게 가스비가 부과되지 않지만 트랜잭션 전송은 실패합니다. */
    TX_SEND_SIGN: 'tx_sendSignedTx',
    /** 트랜잭션이 실행되기 전에 예상 가스비와 수수료 금액을 확인 */
    TX_ESTIMATE_GAS: 'tx_estimateGas',
    /** 토큰 이름 조회 */
    TOKEN_NAME: 'token_name',
    /** 토큰 심볼 조회 */
    TOKEN_SYMBOL: 'token_symbol',
    /** 토큰의 총 공급량을 조회 */
    TOKEN_TOTAL_SUPPLY: 'token_totalSupply',
    /** 토큰 데시멀 값 조회 */
    TOKEN_DECIMALS: 'token_decimals',
    /** 토큰 밸런스정보 조회 */
    TOKEN_BALANCEOF: 'token_balanceOf',
    /** 토큰 밸런스정보 조회 ERC-20 토큰의 amount를 반환, ERC-721 NFT의 개수를 반환 */
    TOKEN_BALANCEOF_ALL: 'token_balanceOfAll',
    /** transferFrom을 통해 소유자를 대신하여 지출자가 사용할 수 있는 남은 토큰 수를 반환합니다. 기본적으로 0입니다. */
    TOKEN_ALLOWANCE: 'token_allowance',
    /** tokenId로 지정된 NFT의 소유자를 반환합니다. */
    TOKEN_OWNEROF: 'token_ownerOf',
    /** tokenId로 지정된 NFT의 소유자를 반환합니다. */
    TOKEN_TOKENS_OF_OWNER: 'token_tokensOfOwner',
    /** 토큰 ID에 대해 승인된 주소를 반환하거나, 설정된 주소가 없으면 0을 반환합니다. 토큰 ID가 없으면 되돌립니다. */
    TOKEN_GET_APPROVED: 'token_getApproved',
    /** 지정된 소유자가 연산자를 승인했는지 여부에 대한 부울을 반환합니다. */
    TOKEN_IS_APPROVED_FOR_ALL: 'token_isApprovedForAll',
    /** 지정된 토큰 ID에 대한 URI를 반환합니다. 빈 문자열을 반환할 수 있습니다. */
    TOKEN_TOKEN_URL: 'token_tokenURI',
    /** chain의 현재 blockNumber 조회 */
    BLOCK_NUMBER: 'block_blockNumber',
    /** blockNumber로 block의 header 조회 */
    BLOCK_HEADER_BY_NUMBER: 'block_headerByNumber',
    /** blockhash로 block에 포함된 transaction 수 조회 */
    BLOCK_TRANSACTION_COUNT: 'block_transactionCount',
    /** transaction hash로 receipt 조회 */
    BLOCK_GET_RECEIPT: 'block_getReceipt',
    /** transaction hash로 transaction 조회 */
    BLOCK_GET_TRANSACTION: 'block_getTransaction',
    /**
     * contract명, event명 block 범위를 지정하여 Log 조회. (한번에 최대 1000개 블록까지 요청 가능)
     * to block number가 현재 block number보다 높을 경우 현재 block까지만 조회됨
     */
    BLOCK_FILTER_LOGS: 'block_filterLogs',
    /** 트랜잭션 추적 (디버그용) */
    DEBUG_TRACE_TRASACTION: 'debug_traceTransaction',
    /** 사용자는 Faucet이라는 개발 목적으로 토큰을 획득할 수 있습니다. */
    DEV_FAUCET: 'dev_faucet',
    /** 사용자는 Faucet이라는 개발 목적으로 토큰을 획득할 수 있습니다. */
    DEV_FAUCET_ITEM: 'dev_faucetItem'
});
var BinderMainnetPlugin = /** @class */ (function () {
    function BinderMainnetPlugin() {
    }
    BinderMainnetPlugin.prototype.request = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (Object.values(REQUEST_ACTION_TYPES_BINDER_MAINNET).includes(params === null || params === void 0 ? void 0 : params.method)) {
                    return [2 /*return*/, requestBinderMainnetApi(params === null || params === void 0 ? void 0 : params.params)];
                }
                return [2 /*return*/, null];
            });
        });
    };
    return BinderMainnetPlugin;
}());
export { BinderMainnetPlugin };
