/** @format */

import { apiClient } from '../utils/api';
import { useQuery } from '@tanstack/react-query';
import config from '@utils/api/config';
import { BackendResponse } from '@utils/api';
import {
	setError,
	setLoading,
	setUser,
	setWarning,
	userType,
} from '@utils/slice/userSlice';
export interface ProfileResponse extends BackendResponse {
	user?: userType | null;
}

export default function useProfile() {
	const { isError, isLoading, error, data } = useQuery(['getProfile'], () =>
		fetchProfile()
	);
	if (isLoading) {
		setLoading(isLoading);
	} else {
		if (isError) setError((error as any)?.message);
		else {
			if (data.status) {
				setUser(data.user!);
			} else {
				setWarning(data.message!);
			}
		}
	}
}
export function fetchProfile(): Promise<ProfileResponse> {
	return apiClient
		.get(config.auth.getProfile)
		.then((response) => response.data);
}
