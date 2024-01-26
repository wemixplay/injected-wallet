import { Contract, ethers } from 'ethers';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { ERC20_ABI } from '../../service/DefaultAbi';
import { Interface } from 'ethers/lib/utils';

const testBalanceOf = async () => {
  const staticJsonRpcProvider = new StaticJsonRpcProvider(`https://api.wemix.com`);

  const iface = new Interface(ERC20_ABI);

  /**
   * [Mainnet]
   * WWEMIX -> 0x7d72b22a74a216af4a002a1095c8c707d6ec1c5f
   * WEMIX$ -> 0x8E81fCc2d4A3bAa0eE9044E0D7E36F59C9BbA9c1
   *
   *
   * [Testnet]
   * RetroToken : 0x24723fbFf03F4EFB581a69d705113Df41FCF7D80
   */
  const contract = new Contract(
    '0x8E81fCc2d4A3bAa0eE9044E0D7E36F59C9BbA9c1', // 0x0000000000000000000000000000000000000000
    iface,
    staticJsonRpcProvider
  );

  // Get the ERC-20 contract token name
  const contractName = await contract.name();
  console.log("The token's contract name is " + contractName);

  // Get the ERC-20 token symbol
  const tokenSymbol = await contract.symbol();
  console.log("The token's symbol is " + tokenSymbol);

  /**
   * [PlayWallet]
   * Alpha : 0x48de6872d910c7acc12a1ec1119d83f535515f84
   * Prod : 0x07db04bcbe3661ebf22af7fb01e19eecd28b4f63
   * [unaWallet]
   * Prod : 0x64FE6947b6bbE38bAD53aBf3A856f11675C92a5f
   */
  //get token balance as BigNumber
  const balance = await contract.balanceOf(`0x07db04bcbe3661ebf22af7fb01e19eecd28b4f63`);

  const balanceFormatted = ethers.utils.formatUnits(balance, 18);
  console.log("Holder's balance is " + balanceFormatted + ' ' + tokenSymbol);
};

export { testBalanceOf };
