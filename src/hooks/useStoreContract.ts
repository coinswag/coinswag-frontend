import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
} from "wagmi";
import {
  merchStoreFactoryAbi,
  merchStoreFactoryAddress,
  merchStoreAbi,
} from "@/src/lib/abi";
import { parseEther } from "viem";
import useCurrentStore, { ProductProps } from "./useCurrentStore";

export function useStoreContract() {
  const { writeContract, data: hash } = useWriteContract();
  const {
    isSuccess,
    isError,
    data: txReceipt,
  } = useWaitForTransactionReceipt({ hash });

  const { currentStore, setLoading, setError, addStore, setProducts } =
    useCurrentStore();

  const createStore = async (
    name: string,
    symbol: string,
    baseTokenURI: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      writeContract({
        address: merchStoreFactoryAddress,
        abi: merchStoreFactoryAbi,
        functionName: "createStore",
        args: [name, symbol, baseTokenURI],
      });
      if (txReceipt && isSuccess) {
        // Fetch the new store details and add it to the state
        // This is a placeholder and should be implemented based on your contract
        const newStore = {
          name,
          storeId: "placeholder",
          storeAddress: "placeholder",
          owner: "placeholder",
          url: baseTokenURI,
        };
        addStore(newStore);
        setLoading(false);
      } else if (isError) {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  const createProduct = async (
    product: Omit<ProductProps, "id" | "isActive">
  ) => {
    setLoading(true);
    setError(null);
    try {
      writeContract({
        address: currentStore?.storeAddress as `0x${string}`,
        abi: merchStoreAbi,
        functionName: "createProduct",
        args: [
          product.name,
          product.description,
          parseEther(product.price),
          BigInt(product.quantity),
          product.imageUri,
        ],
      });
      if (isSuccess) {
        await fetchProducts();
      } else if (isError) {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  const updateProduct = async (
    productId: string,
    product: Omit<ProductProps, "id">
  ) => {
    setLoading(true);
    setError(null);
    try {
      writeContract({
        address: currentStore?.storeAddress as `0x${string}`,
        abi: merchStoreAbi,
        functionName: "updateProduct",
        args: [
          BigInt(productId),
          product.name,
          product.description,
          parseEther(product.price),
          BigInt(product.quantity),
          product.isActive,
          product.imageUri,
        ],
      });
      if (isSuccess) {
        await fetchProducts();
      } else if (isError) {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = useReadContract({
        address: currentStore?.storeAddress as `0x${string}`,
        abi: merchStoreAbi,
        functionName: "getAllProducts",
      });
      if (data) {
        const formattedProducts: ProductProps[] = data.map((product: any) => ({
          id: product.id.toString(),
          name: product.name,
          description: product.description,
          price: product.price.toString(),
          quantity: product.quantity.toString(),
          isActive: product.isActive,
          imageUri: product.imageUri,
        }));
        setProducts(formattedProducts);
      }
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  const placeOrder = async (productId: string, quantity: string) => {
    setLoading(true);
    setError(null);
    try {
      writeContract({
        address: currentStore?.storeAddress as `0x${string}`,
        abi: merchStoreAbi,
        functionName: "placeOrder",
        args: [BigInt(productId), BigInt(quantity)],
      });
      if (isSuccess) {
        await fetchProducts(); // Refresh product list after order
      } else if (isError) {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  const withdrawFunds = async () => {
    setLoading(true);
    setError(null);
    try {
      writeContract({
        address: currentStore?.storeAddress as `0x${string}`,
        abi: merchStoreAbi,
        functionName: "withdrawFunds",
      });
      if (isSuccess) {
        // Handle successful withdrawal
      } else if (isError) {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  return {
    createStore,
    createProduct,
    updateProduct,
    fetchProducts,
    placeOrder,
    withdrawFunds,
  };
}
