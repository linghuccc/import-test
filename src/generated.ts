import { createUseReadContract } from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1)
 */
export const counterAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_number', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'showNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1)
 */
export const counterAddress = {
  11155111: '0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1)
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1)
 */
export const useReadCounter = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1)
 */
export const useReadCounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'number',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"showNumber"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2628bf9c103ee2bF63A76A63e65213EdBe8056e1)
 */
export const useReadCounterShowNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'showNumber',
})
