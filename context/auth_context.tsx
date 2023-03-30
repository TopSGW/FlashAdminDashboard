/** @format */

import useProfile from '@hooks/useProfile';
import { createContext, ReactNode, useContext, useState } from 'react';
export interface IAuthContext {
	isLogedIn: boolean;
	login: () => void;
	logout: () => void;
}
const authContextDefaultValue: IAuthContext = {
	isLogedIn: false,
	login: () => {},
	logout: () => {},
};
export const AuthContext = createContext<IAuthContext>(authContextDefaultValue);

export function useAuth() {
	return useContext(AuthContext);
}

type Props = {
	children: ReactNode;
};

export function AuthProvider({ children }: Props) {
	const value = {} as IAuthContext;
	const login = () => {};
	const logout = () => {};
	useProfile();
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
