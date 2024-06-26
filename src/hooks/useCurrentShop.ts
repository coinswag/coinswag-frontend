import { create } from "zustand";

export interface IShop {
	name: string;
	url: string;
	image: string;
	description: string;
	password: string;
	_id: string;
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
