/** @format */

import { apiClient, queryClient } from '../utils/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import config from '@utils/api/config';
import { BackendResponse } from '@utils/api';
import { userType } from '@utils/slice/userSlice';
import { toast } from 'react-toastify';
import { onQueryError } from '@utils/errors/query-error';
export interface ProfileResponse extends BackendResponse {
	data?: {
		user: userType;
	};
}
export interface UpdateUserPayload {
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
	description: string;
}
export default function useProfile() {
	return useQuery(['getProfile'], () => fetchProfile());
}
export function useUpdateProfile() {
	return useMutation(updateUser, {
		onSuccess: (response: BackendResponse) => {
			if (response.success) {
				toast.success('update user is success!');
				queryClient.invalidateQueries(['getProfile']);
			}
		},
		onError: (r) => onQueryError(r),
	});
}
export function fetchProfile(): Promise<ProfileResponse> {
	return apiClient
		.get(config.auth.getProfile)
		.then((response) => response.data);
}
export function updateUser(payload: UpdateUserPayload) {
	return apiClient
		.post(config.auth.updateProfile, payload)
		.then((res) => res.data);
}
