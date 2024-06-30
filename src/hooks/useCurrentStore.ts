import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import { parseEther } from "viem";
// import { merchStoreFactoryAddress, merchStoreAbi } from "@/src/lib/abi";

export type StoreProps = {
  name: string;
  tokenId: string;
  storeAddress: string;
  owner: string;
  url: string;
};

export type ProductProps = {
  productId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  size: string;
  isActive: boolean;
  imageUri: string;
};

interface CurrentStoreState {
  currentStore: StoreProps | null;
  allStores: StoreProps[];
  products: ProductProps[];
  isLoading: boolean;
  error: string | null;
  setCurrentStore: (store: StoreProps) => void;
  clearCurrentStore: () => void;
  addStore: (store: StoreProps) => void;
  removeStore: (tokenId: string) => void;
  updateStore: (tokenId: string, updatedStore: Partial<StoreProps>) => void;
  setAllStores: (stores: StoreProps[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  getStoreById: (tokenId: string) => StoreProps | undefined;
  addProducts: (products: ProductProps[]) => void;
  addProduct: (product: ProductProps) => void;
}

const useCurrentStore = create<CurrentStoreState>()(
  persist(
    (set, get) => ({
      currentStore: null,
      allStores: [],
      products: [],
      isLoading: false,
      error: null,

      setCurrentStore: (store) => set({ currentStore: store }),
      clearCurrentStore: () => set({ currentStore: null }),
      addStore: (store) =>
        set((state) => ({ allStores: [...state.allStores, store] })),
      removeStore: (tokenId) =>
        set((state) => ({
          allStores: state.allStores.filter(
            (store) => store.tokenId !== tokenId
          ),
          currentStore:
            state.currentStore?.tokenId === tokenId ? null : state.currentStore,
        })),
      updateStore: (tokenId, updatedStore) =>
        set((state) => ({
          allStores: state.allStores.map((store) =>
            store.tokenId === tokenId ? { ...store, ...updatedStore } : store
          ),
          currentStore:
            state.currentStore?.tokenId === tokenId
              ? { ...state.currentStore, ...updatedStore }
              : state.currentStore,
        })),
      setAllStores: (stores) => set({ allStores: stores }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      getStoreById: (tokenId) =>
        get().allStores.find((store) => store.tokenId === tokenId),
      addProducts: (products) => set({ products }),
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
    }),
    {
      name: "current-store-storage",

      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

export default useCurrentStore;
