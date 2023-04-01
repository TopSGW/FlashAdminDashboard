/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';

export type getRolePayload = {
	pagination: number;
	curpage: number;
	search?: string;
};
const endpoint = (limit: number, curPage: number, search?: string) =>
	`${config.auth.searchAdmin}/${limit}/${curPage}/${search}`;

export default function (payload: getRolePayload) {
	const { isLoading, data } = useQuery(
		[endpoint(payload.pagination, payload.curpage, payload.search)],
		() => fetchRoleApi(payload)
	);
	console.log(data);
}
export function fetchRoleApi(payload: getRolePayload) {
	return apiClient
		.get(config.auth.searchAdmin, { params: payload })
		.then((response) => response.data);
}
