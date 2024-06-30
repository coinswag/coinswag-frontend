import { create } from "zustand";

type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type IMerch = {
	createdAt: string;
	description: string;
	images: string[];
	isActive: boolean;
	name: string;
	price: number;
	sizes: ProductSize[];
	store: string;
	tokenId: string;
	updatedAt: string;
   quantity: number;
   size: ProductSize;
	__v: number;
	_id: string;
};

interface currentCartState {
	cartItems: IMerch[];
	addToCart: (cart: IMerch) => void;
	removeFromCart: (id: string) => void;
}

const initialState = {
	cartItems: [],
};

const useCart = create<currentCartState>()((set) => ({
	...initialState,
	addToCart: (newItem) =>
		set((state) => ({ cartItems: [...state.cartItems, newItem] })),
	removeFromCart: (id) =>
		set((state) => {
			const filteredItems = state.cartItems.filter((item) => item._id !== id);
			return { cartItems: filteredItems };
		}),
}));

export default useCart;
