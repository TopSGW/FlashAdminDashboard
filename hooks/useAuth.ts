/** @format */

import { apiClient } from '@utils/api';
import config from '@utils/api/config';
import { useMutation } from '@tanstack/react-query';
import { onQueryError } from '@utils/errors/query-error';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
export interface LoginPayload {
	email: string;
	password: string;
	rememeber: boolean;
}
export function useLogin() {
	const router = useRouter();
	return useMutation(login, {
		onSuccess: (response) => {
			if (response.success) {
				toast.success(response.message);
				router.push('/dashboard/overview/');
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r) => onQueryError(r),
	});
}
export function useLogout(){
	const router = useRouter();
	return useMutation(logOut,{
		onSuccess: (response) => {
			if (response.success) {
				router.push('/');
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r) => onQueryError(r),
	})
}
export function login(payload: LoginPayload) {
	return apiClient
		.post(config.auth.signIn, payload)
		.then((response) => response.data);
}

export function logOut(){
	return apiClient.post(config.auth.logout).then((res)=>res.data)
}