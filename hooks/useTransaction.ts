/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient, BackendResponse } from '@utils/api';
import config from '@utils/api/config';

export type PaginationProps = {
	curPage: number;
	pagination: number;
};
export type OrdersType = {
	accountName: string;
	changeRate: number;
	total: number;
	profit: number;
};
export type ProfitType = {
	pair: string;
	date: Date;
	amount: number;
};
export type TotalNetwortType = {
	total: number;
	data: Object;
};
export type PaymentCategories = {
	Cash: number;
	'Credit Card': number;
	Crypto: number;
	'Bank Transfer': number;
};
export interface OrdersInterface extends BackendResponse {
	data?: {
		orders: OrdersType[];
		totalRecord: number;
	};
}

export interface ProfitInterface extends BackendResponse {
	data?: {
		profits: ProfitType[];
		totalRecord: number;
	};
}

export interface CommonInterface extends BackendResponse {
	data?: {
		totalNetWorth: TotalNetwortType;
		lastOrder: OrdersType[];
		lastProfit: ProfitType[];
		categories: PaymentCategories;
	};
}
export function endpoint(url: string, ...args: Array<any>) {
	return `${url}/${args.join('/')}`;
}

export function useCommonInformation() {
	return useQuery([config.transaction.getCommonInformation], () =>
		fetchCommonInformation()
	);
}

export function useOrders(payload: PaginationProps) {
	return useQuery(
		[
			endpoint(
				config.transaction.getOrders,
				payload.pagination,
				payload.curPage
			),
		],
		() => fetchOrders(payload)
	);
}

export function useProfits(payload: PaginationProps) {
	return useQuery(
		[
			endpoint(
				config.transaction.getProfits,
				payload.pagination,
				payload.curPage
			),
		],
		() => fetchProfits(payload)
	);
}

// apis

export function fetchCommonInformation(): Promise<CommonInterface> {
	return apiClient
		.get(config.transaction.getCommonInformation)
		.then((res) => res.data);
}

export function fetchOrders(
	payload: PaginationProps
): Promise<OrdersInterface> {
	return apiClient
		.get(config.transaction.getOrders, { params: payload })
		.then((res) => res.data);
}

export function fetchProfits(
	payload: PaginationProps
): Promise<ProfitInterface> {
	return apiClient
		.get(config.transaction.getProfits, { params: payload })
		.then((res) => res.data);
}
