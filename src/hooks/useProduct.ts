import { useState, useCallback } from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
} from "wagmi";
import { merchStoreAbi } from "@/src/lib/abi";
import { parseEther } from "viem";

export interface Product {
  name: string;
  description: string;
  price: bigint;
  quantity: bigint;
  isActive: boolean;
  imageUri: string;
}

export function useProduct(storeAddress: `0x${string}`) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { writeContract } = useWriteContract();

  const createProduct = useCallback(
    async (product: Omit<Product, "isActive">) => {
      setIsLoading(true);
      setError(null);
      try {
        const { hash } = await writeContract({
          address: storeAddress,
          abi: merchStoreAbi,
          functionName: "createProduct",
          args: [
            product.name,
            product.description,
            parseEther(product.price.toString()),
            product.quantity,
            product.imageUri,
          ],
        });
        return hash;
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
    [storeAddress, writeContract]
  );

  const updateProduct = useCallback(
    async (productId: bigint, product: Product) => {
      setIsLoading(true);
      setError(null);
      try {
        const { hash } = await writeContract({
          address: storeAddress,
          abi: merchStoreAbi,
          functionName: "updateProduct",
          args: [
            productId,
            product.name,
            product.description,
            parseEther(product.price.toString()),
            product.quantity,
            product.isActive,
            product.imageUri,
          ],
        });
        return hash;
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
    [storeAddress, writeContract]
  );

  const { data: products } = useReadContract({
    address: storeAddress,
    abi: merchStoreAbi,
    functionName: "getAllProducts",
  });

  return {
    createProduct,
    updateProduct,
    products,
    isLoading,
    error,
  };
}
