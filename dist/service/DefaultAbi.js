"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20_ABI = void 0;
var ERC20_ABI = [
    {
        type: 'constructor',
        inputs: [],
        stateMutability: 'nonpayable'
    },
    {
        name: 'Approval',
        type: 'event',
        inputs: [
            {
                name: 'owner',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'spender',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'value',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            }
        ],
        anonymous: false
    },
    {
        name: 'Deposit',
        type: 'event',
        inputs: [
            {
                name: 'dst',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'amount',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            }
        ],
        anonymous: false
    },
    {
        name: 'Transfer',
        type: 'event',
        inputs: [
            {
                name: 'from',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'value',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            }
        ],
        anonymous: false
    },
    {
        name: 'Withdraw',
        type: 'event',
        inputs: [
            {
                name: 'src',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'amount',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            }
        ],
        anonymous: false
    },
    {
        type: 'fallback',
        stateMutability: 'payable'
    },
    {
        name: 'allowance',
        type: 'function',
        inputs: [
            {
                name: 'owner',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'spender',
                type: 'address',
                internalType: 'address'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        name: 'approve',
        type: 'function',
        inputs: [
            {
                name: 'spender',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        name: 'balanceOf',
        type: 'function',
        inputs: [
            {
                name: 'account',
                type: 'address',
                internalType: 'address'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        name: 'decimals',
        type: 'function',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint8',
                internalType: 'uint8'
            }
        ],
        stateMutability: 'view'
    },
    {
        name: 'decreaseAllowance',
        type: 'function',
        inputs: [
            {
                name: 'spender',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'subtractedValue',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        name: 'deposit',
        type: 'function',
        inputs: [],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        name: 'increaseAllowance',
        type: 'function',
        inputs: [
            {
                name: 'spender',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'addedValue',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'string',
                internalType: 'string'
            }
        ],
        stateMutability: 'view'
    },
    {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'string',
                internalType: 'string'
            }
        ],
        stateMutability: 'view'
    },
    {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        name: 'transfer',
        type: 'function',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        name: 'transferFrom',
        type: 'function',
        inputs: [
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        name: 'withdraw',
        type: 'function',
        inputs: [
            {
                name: '_amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'receive',
        stateMutability: 'payable'
    }
];
exports.ERC20_ABI = ERC20_ABI;
