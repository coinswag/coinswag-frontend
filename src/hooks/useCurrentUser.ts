import { create } from 'zustand';

export type UserProps = {
	username: string;
	email: string;
	type: string;
	password: string;
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

interface CurrentUserState {
	currentUser: Partial<UserProps> | null;
	setCurrentUser: (user: UserProps) => void;
	setSideBar: (value: boolean) => void;
	sideBar: boolean;
}

const initialState = {
	currentUser: null,
	sideBar: false,
};

const useCurrentUser = create<CurrentUserState>()((set) => ({
	...initialState,
	setCurrentUser: (newUser) => set(() => ({ currentUser: newUser })),
	setSideBar: (value: boolean) => set(() => ({ sideBar: value })),
}));

export default useCurrentUser;
