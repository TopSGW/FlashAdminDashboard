/** @format */

import { apiClient } from '@utils/api';
import config from '@utils/api/config';
import { useMutation } from '@tanstack/react-query';
import { onQueryError } from '@utils/errors/query-error';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setInit, setQRInfo } from '@utils/slice/authenticateSlice';
export interface LoginPayload {
	email: string;
	password: string;
	rememeber: boolean;
}
export function useLogin() {
	const router = useRouter();
	const dispatch = useDispatch();
	return useMutation(login, {
		onSuccess: (response: any) => {
			if (response.success) {
				if (response.isInit) {
					dispatch(setInit(true));
					dispatch(
						setQRInfo({ secret: response.secret, qrImage: response.qrImage })
					);
					return router.push('/validate');
				}

				if (response.isfactor) {
					dispatch(setInit(false));
					return router.push('validate');
				} else {
					router.push('/dashboard/overview/');
				}
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r: any) => onQueryError(r),
	});
}
export function useVerifyOTP() {
	const router = useRouter();
	return useMutation(verifyOTP, {
		onSuccess: (response: any) => {
			if (response.success) {
				router.push('/');
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r: any) => onQueryError(r),
	});
}
export function useLoginOTP() {
	const router = useRouter();
	return useMutation(loginOTP, {
		onSuccess: (response: any) => {
			if (response.success) {
				router.push('/');
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r: any) => onQueryError(r),
	});
}
export function useLogout() {
	const router = useRouter();
	return useMutation(logOut, {
		onSuccess: (response: any) => {
			if (response.success) {
				router.push('/');
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r: any) => onQueryError(r),
	});
}
export function login(payload: LoginPayload) {
	return apiClient
		.post(config.auth.signIn, payload)
		.then((response) => response.data);
}
export function verifyOTP(code: string) {
	return apiClient
		.post(config.auth.verifyOTP, { code })
		.then((response) => response.data);
}

export function loginOTP(code: string) {
	return apiClient
		.post(config.auth.loginOTP, { code })
		.then((response) => response.data);
}

export function logOut() {
	return apiClient.post(config.auth.logout).then((res) => res.data);
}
