/** @format */

import useProfile from '@hooks/useProfile';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
interface AuthProviderProps {
	children: any;
}
export type UserType = {
	email: string;
	userName?: string;
	firstName?: string;
	lastName?: string;
};
export type AuthDataProps = {
	setUser: (user: UserType | null) => void;
	user?: UserType;
};
export const AuthContext = createContext<AuthDataProps | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserType | null>(null);
	const router = useRouter();

	useEffect(() => {
		getUserAPI();
	}, []);

	function getUserAPI() {
		apiClient
			.get(config.auth.getProfile)
			.then((res) => {
				if (res.data?.success) {
					if (router.pathname === '/') {
						router.push('/dashboard/overview');
					}
				}
			})
			.catch((e) => {
				const response = e.response;
				if (response && response.status === 401) {
					router.push('/');
				}
			});
	}

	const contextvalue = { ...user, setUser };
	return (
		<AuthContext.Provider value={contextvalue}>{children}</AuthContext.Provider>
	);
}
export function useAuth() {
	return useContext(AuthContext);
}
