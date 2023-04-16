/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';
import { toast } from 'react-toastify';

export type BetweenProps = {
	startDate: Date;
	endDate: Date;
};
const endpoint = (url: string, props: BetweenProps) =>
	`${url}/${props.startDate.toDateString()}/${props.endDate.toDateString()}`;

export default function useTotalInfo() {
	const { isLoading, data } = useQuery(['getTotalInfo'], fetchTotalInfo);
	if (data?.status === false) {
		toast.error(data?.message);
	}
	return { isLoading, data: data?.data, message: data?.message };
}
export function useRecentActivity() {
	const { isLoading, data } = useQuery(
		['getRecentActivity'],
		fetchRecentActivity
	);

	return { isLoading, data: data?.data, message: data?.message };
}

export function useRevene() {
	const { isLoading, data } = useQuery(['getRevenue'], fetchRevenue);
	return { isLoading, data: data?.data, message: data?.message };
}

export function useReveneBetween(payload: BetweenProps) {
	const { isLoading, data } = useQuery(
		[endpoint(config.statistic.getRevenBetween, payload)],
		() => fetchRevenueBetween(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}

export function useTotalProducts(payload: BetweenProps) {
	const { isLoading, data } = useQuery(
		[endpoint(config.statistic.getTotalProducts, payload)],
		() => fetchTotalProducts(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}

export function useTotalInfoBetween(payload: BetweenProps) {
	const { isLoading, data } = useQuery(
		[endpoint(config.statistic.getTotalInfoBetween, payload)],
		() => fetchTotalInforBetween(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}

export function fetchRevenue() {
	return apiClient.get(config.overview.getReven).then((res) => res.data);
}
export function fetchTotalInfo() {
	return apiClient.get(config.overview.getTotalInfo).then((res) => res.data);
}

export function fetchRecentActivity() {
	return apiClient
		.get(config.overview.getRecentActivity)
		.then((res) => res.data);
}
export function fetchTotalInforBetween(payload: BetweenProps) {
	return apiClient
		.get(config.statistic.getTotalInfoBetween, { params: payload })
		.then((res) => res.data);
}
export function fetchTotalProducts(payload: BetweenProps) {
	return apiClient
		.get(config.statistic.getTotalProducts, { params: payload })
		.then((res) => res.data);
}
export function fetchRevenueBetween(payload: BetweenProps) {
	return apiClient
		.get(config.statistic.getRevenBetween, { params: payload })
		.then((res) => res.data);
}
