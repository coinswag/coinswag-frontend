import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { merchStoreFactoryAbi, merchStoreFactoryAddress } from "../lib/abi";

// Helper type for store info
// type StoreInfo = {
//   storeAddress: string;
//   owner: string;
//   name: string;
//   creationTime: number;
// };

export function useCreateStore() {
  const { data: hash, error, writeContract } = useWriteContract();

  const createStore = async (
    name: string,
    symbol: string,
    baseTokenURI: string
  ) => {
    writeContract({
      address: merchStoreFactoryAddress,
      abi: merchStoreFactoryAbi,
      functionName: "createStore",
      args: [name, symbol, baseTokenURI],
    });
  };

  const {
    data,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  return { createStore, data, error, isConfirming, isConfirmed };
}
