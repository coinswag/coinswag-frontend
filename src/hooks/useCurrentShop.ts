import { create } from "zustand";
import { IMerch } from "./useCart";


export interface IShop {
	_id: string;
	name: string;
	url: string;
	tokenId: string;
	user: string;
	products: IMerch[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface CurrentShopState {
	allShops: IShop[];
	currentShop: Partial<IShop> | null;
	setCurrentShop: (shop: IShop) => void;
	addNewShop: (shop: IShop) => void;
	setSideBar: (value: boolean) => void;
	sideBar: boolean;
}

const initialState = {
	allShops: [],
	currentShop: null,
	sideBar: false,
};

const useCurrentShop = create<CurrentShopState>()((set) => ({
	...initialState,
	addNewShop: (newShop) =>
		set((state) => ({ allShops: [...state.allShops, newShop] })),
	setCurrentShop: (newShop) => set(() => ({ currentShop: newShop })),
	setSideBar: (value: boolean) => set(() => ({ sideBar: value })),
}));

export default useCurrentShop;
