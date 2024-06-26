import { create } from 'zustand';

export interface IStore  {
	name: string;
	url: string;
	image: string;
	description: string;
	password: string;
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

interface CurrentUserState {
	currentStore: Partial<IStore> | null;
	setCurrentStore: (user: IStore) => void;
	setSideBar: (value: boolean) => void;
	sideBar: boolean;
}

const initialState = {
	currentStore: null,
	sideBar: false,
};

const useCurrentUser = create<CurrentUserState>()((set) => ({
	...initialState,
	setCurrentStore: (newStore) => set(() => ({ currentStore: newStore })),
	setSideBar: (value: boolean) => set(() => ({ sideBar: value })),
}));

export default useCurrentUser;
