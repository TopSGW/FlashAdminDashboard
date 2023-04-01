/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';
import { stringify } from 'querystring';
export type getRolePayload = {
	limit: number;
	curPage: number;
	search?: string;
};
const endpoint = (limit: number, skip: number, search?: string) =>
	`${config.auth.searchAdmin}/${limit}/${skip}/${search}`;

export default function (payload: getRolePayload) {
	const { isLoading, data } = useQuery([
		endpoint(payload.limit, payload.curPage, payload.search),
		() => fetchRoleApi(payload),
	]);
}
export function fetchRoleApi(payload: getRolePayload) {
	const url = config.auth.searchAdmin + '?' + stringify(payload);
	return apiClient.get(url).then((response) => response.data);
}
