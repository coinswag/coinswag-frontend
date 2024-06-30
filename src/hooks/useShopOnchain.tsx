import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useReadContract,
} from "wagmi";
import { parseEther } from "viem";

import {
  merchStoreAbi,
  merchStoreFactoryAbi,
  merchStoreFactoryAddress,
} from "../lib/abi";

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

export function useGetStoresByOwner(ownerAddress: string) {
  return useReadContract({
    address: merchStoreFactoryAddress,
    abi: merchStoreFactoryAbi,
    functionName: "getStoresByOwner",
    args: [ownerAddress],
  });
}

export function useGetTotalStores() {
  return useReadContract({
    address: merchStoreFactoryAddress,
    abi: merchStoreFactoryAbi,
    functionName: "getTotalStores",
  });
}

export function useCreateProduct(merchStoreAddress: `0x${string}`) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const createProduct = (
    name: string,
    description: string,
    price: number,
    quantity: number,
    imageUri: string
  ) => {
    writeContract({
      address: merchStoreAddress,
      abi: merchStoreFactoryAbi,
      functionName: "createProduct",
      args: [
        name,
        description,
        parseEther(price.toString()),
        BigInt(quantity),
        imageUri,
      ],
    });
  };

  const { isLoading: isTransactionLoading, isSuccess } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    createProduct,
    isLoading: isPending || isTransactionLoading,
    isError: error,
    error,
    isSuccess,
  };
}

export function useGetProducts() {
  return useReadContract({
    address: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
    abi: merchStoreAbi,
    functionName: "getProducts",
  });
}

export function useUpdateProduct(merchStoreAddress: `0x${string}`) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const updateProduct = (
    productId: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    isActive: boolean,
    imageUri: string
  ) => {
    writeContract({
      address: merchStoreAddress,
      abi: merchStoreAbi,
      functionName: "updateProduct",
      args: [
        BigInt(productId),
        name,
        description,
        parseEther(price.toString()),
        BigInt(quantity),
        isActive,
        imageUri,
      ],
    });
  };

  const { isLoading: isTransactionLoading, isSuccess } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    updateProduct,
    isLoading: isPending || isTransactionLoading,
    isError: error,
    error,
    isSuccess,
  };
}
