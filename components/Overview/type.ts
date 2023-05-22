/** @format */

export type TotalInfoPercentProps = {
	amount: number;
	rate: number;
};
export interface TotalInfoProps {
	amount: number;
	previous: TotalInfoPercentProps;
}

export type MonthType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type MonthDataType = {
	month: MonthType;
	amount: number;
};
export type RevenueVsOrderType = {
	revenue: Array<MonthDataType>;
	order: Array<MonthDataType>;
};
export type RecordCountDailyType = {
    _id: {
      year: number;
      month: MonthType;
      day: number;
    };
    count: number;
    revenue: number;
  };
export function initRevenueVsOrders(): RevenueVsOrderType {
	const months: MonthType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const data: Array<MonthDataType> = [];
	months.forEach((item: MonthType, index: number) => {
		data.push({ month: item, amount: 0 });
	});
	return {
		revenue: data,
		order: data,
	};
}
export enum TRACKING {
	PENDING = 'Pending',
	COMPLETE = 'Completed',
}

export interface ActivityType {
	orderId: string;
	customer: {
		img: string;
		name: string;
	};
	date: Date;
	amount: number;
	traking: TRACKING;
}
