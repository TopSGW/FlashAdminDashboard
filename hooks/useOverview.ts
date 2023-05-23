/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient, BackendResponse } from '@utils/api';
import config from '@utils/api/config';
import {
	ActivityType,
	RecordCountDailyType,
	RevenueVsOrderType,
	TotalInfoPercentProps,
	TotalInfoProps,
} from 'components/Overview/type';
import { toast } from 'react-toastify';
import { STATISTIC } from './useStatistic';
export type ActivityProps = {
	type: STATISTIC;
	curPage: number;
	pagination: number;
};

export interface TypeUseTotalInfo extends BackendResponse {
	data?: {
		rencetActivity: Array<ActivityType>;
		revenue: RecordCountDailyType[];
		topInfo: {
			refunded: TotalInfoProps;
			totalEarned: TotalInfoProps;
			totalOrders: TotalInfoProps;
			totalSalse: TotalInfoProps;
			visitors: TotalInfoProps;
		};
	};
}
export interface TypeActivity extends BackendResponse {
	data?: {
		activity: ActivityType[];
	};
}
export function useTotalInfo(type: STATISTIC) {
	return useQuery([`getTotalInfo/${type}`], () => fetchTotalInfo(type));
}
export function useActivity(payload: ActivityProps) {
	return useQuery(
		[`getActivity/${payload.type}/${payload.pagination}/${payload.curPage}`],
		() => fetchActivity(payload)
	);
}

export function fetchTotalInfo(type: STATISTIC): Promise<TypeUseTotalInfo> {
	return apiClient
		.get(config.overview.getTotalInfo, { params: { type } })
		.then((res) => res.data);
}

export function fetchActivity(payload: ActivityProps): Promise<TypeActivity> {
	return apiClient
		.get(config.overview.getActivity, { params: payload })
		.then((res) => res.data);
}
