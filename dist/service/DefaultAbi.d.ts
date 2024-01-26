declare const ERC20_ABI: ({
    type: string;
    inputs: any[];
    stateMutability: string;
    name?: undefined;
    anonymous?: undefined;
    outputs?: undefined;
} | {
    name: string;
    type: string;
    inputs: {
        name: string;
        type: string;
        indexed: boolean;
        internalType: string;
    }[];
    anonymous: boolean;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    type: string;
    stateMutability: string;
    inputs?: undefined;
    name?: undefined;
    anonymous?: undefined;
    outputs?: undefined;
} | {
    name: string;
    type: string;
    inputs: {
        name: string;
        type: string;
        internalType: string;
    }[];
    outputs: {
        name: string;
        type: string;
        internalType: string;
    }[];
    stateMutability: string;
    anonymous?: undefined;
})[];
export { ERC20_ABI };
