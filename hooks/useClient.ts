/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';

export type getClientPayload = {
	pagination: number;
	curpage: number;
};
const endpoint = (payload: getClientPayload) =>
	`${config.client.getClient}/${payload.pagination}/${payload.curpage}`;

export default function useClient(payload: getClientPayload) {
	const { isLoading, data } = useQuery([endpoint(payload)], () =>
		fetchClientHistory(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}
export function fetchClientHistory(payload: getClientPayload) {
	return apiClient
		.get(config.client.getClient, { params: payload })
		.then((res) => res.data);
}
