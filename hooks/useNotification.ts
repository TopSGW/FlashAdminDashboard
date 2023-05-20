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

export function useNotificaton(payload: PaginationProps) {
	const { isLoading, data } = useQuery(
		[
			endpoint(
				config.notification.getNotification,
				payload.pagination,
				payload.curPage
			),
		],
		() => fetchNotification(payload)
	);
	return { isLoading, data: data?.data, message: data?.message };
}

export function fetchNotification(payload: PaginationProps) {
	return apiClient
		.get(config.notification.getNotification, { params: payload })
		.then((res) => res.data);
}
