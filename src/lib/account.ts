import { http, createPublicClient, encodeFunctionData } from "viem";
import { baseSepolia } from "viem/chains";
import {
  createSmartAccountClient,
  ENTRYPOINT_ADDRESS_V06,
} from "permissionless";
import { privateKeyToSimpleSmartAccount } from "permissionless/accounts";
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { merchStoreFactoryAbi, merchStoreFactoryAddress } from "./abi";

// Set this to the Node RPC URL from Step 1.
const rpcUrl =
  "https://api.developer.coinbase.com/rpc/v1/base-sepolia/jrY4mos7-wh-8MFia-Am2Bii7mGStOxx";

const publicClient = createPublicClient({
  transport: http(rpcUrl),
});

const simpleAccount = await privateKeyToSimpleSmartAccount(publicClient, {
  // Set this to your private key
  privateKey:
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
  entryPoint: ENTRYPOINT_ADDRESS_V06,
});

const cloudPaymaster = createPimlicoPaymasterClient({
  chain: baseSepolia,
  transport: http(rpcUrl),
  entryPoint: ENTRYPOINT_ADDRESS_V06,
});

const smartAccountClient = createSmartAccountClient({
  account: simpleAccount,
  chain: baseSepolia,
  bundlerTransport: http(rpcUrl),
  // IMPORTANT: Set up Cloud Paymaster to sponsor your transaction
  middleware: {
    sponsorUserOperation: cloudPaymaster.sponsorUserOperation,
  },
});

export async function sendTransaction() {
  const callData = encodeFunctionData({
    abi: merchStoreFactoryAbi,
    functionName: "createStore",
    args: ["test", "test.coinswag.shop", "MERCHANT"],
  });

  const txHash = await smartAccountClient.sendTransaction({
    account: smartAccountClient.account,
    to: merchStoreFactoryAddress,
    data: callData,
    value: 0n,
  });
  console.log("✅ Transaction successfully sponsored!");
  console.log(
    `🔍 View on Etherscan: https://sepolia.basescan.org/tx/${txHash}`
  );
}
