/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';

export type PaginationProps = {
	curPage: number;
	pagination: number;
};

export function endpoint(url: string, ...args: Array<any>) {
	return `${url}/${args.join('/')}`;
}

export function useCommonInformation() {
	const { isLoading, data } = useQuery(
		[config.transaction.getCommonInformation],
		() => fetchCommonInformation()
	);
	return { isLoading, data: data?.data, message: data?.message };
}

export function useOrders(payload: PaginationProps) {
	const { isLoading, data } = useQuery(
		[
			endpoint(
				config.transaction.getOrders,
				payload.pagination,
				payload.curPage
			),
		],
		() => fetchOrders(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}

export function useProfits(payload: PaginationProps) {
	const { isLoading, data } = useQuery(
		[
			endpoint(
				config.transaction.getProfits,
				payload.pagination,
				payload.curPage
			),
		],
		() => fetchProfits(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}

// apis

export function fetchCommonInformation() {
	return apiClient
		.get(config.transaction.getCommonInformation)
		.then((res) => res.data);
}

export function fetchOrders(payload: PaginationProps) {
	return apiClient
		.get(config.transaction.getOrders, { params: payload })
		.then((res) => res.data);
}

export function fetchProfits(payload: PaginationProps) {
	return apiClient
		.get(config.transaction.getProfits, { params: payload })
		.then((res) => res.data);
}
