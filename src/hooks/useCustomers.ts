import { create } from "zustand";

export interface ICustomer {
	name: string;
	address: string;
	url: string;
	email: string;
	phoneNumber: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface CurrentCustomerState {
	newCustomer: ICustomer | null;
	allCustomers: ICustomer[];
	setNewCustomer: (value: Partial<ICustomer>) => void;
	setAllCustomer: (value: ICustomer[]) => void;
}

const initialState = {
	newCustomer: null,
	allCustomers: [] as ICustomer[],
};

const useCustomer = create<CurrentCustomerState>()((set) => ({
	...initialState,
	setNewCustomer: (value) =>
		set((state) => ({
			newCustomer: { ...state.newCustomer, ...(value as ICustomer) },
		})),
	setAllCustomer: (customers) => set(() => ({ allCustomers: customers })),
}));

export default useCustomer;
