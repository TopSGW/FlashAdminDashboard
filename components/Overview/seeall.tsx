/** @format */

import Image from 'next/image';
import guy1 from '../assets/image/guys/guy1.png';
import { useDispatch, useSelector } from 'react-redux';
import {
	Overview_SeeAllTotalPage,
	setOverview_SeeAllTotalPage,
	setOverview_SeeAllViewValue,
} from '@utils/slice/overviewSlice';

import {
	setOverview_PaginationValue,
	Overview_paginationState,
} from '@utils/slice/overviewSlice';

import { Pagination } from '@mui/material';
import { useActivity } from '@hooks/useOverview';
import { STATISTIC } from '@hooks/useStatistic';
import { toast } from 'react-toastify';
import CircleProgress from 'components/progress/circle';
import { useEffect, useMemo } from 'react';
export default function SeeAllData() {
	const dispatch = useDispatch();
	const currentpage = useSelector(Overview_paginationState);
	const totalPage = useSelector(Overview_SeeAllTotalPage);
	const handlePagination = (e: any, page: number) => {
		dispatch(setOverview_PaginationValue(page));
	};
	const { data, error, isLoading } = useActivity({
		type: STATISTIC.FLASH,
		curPage: currentpage,
		pagination: 10,
	});
	const convertDateToStr = (date: Date) => {
		const startYear = date.getFullYear();
		const startMonth = ('0' + (date.getMonth() + 1)).slice(-2);
		const startDay = ('0' + date.getDate()).slice(-2);
		return `${startYear}/${startMonth}/${startDay}`;
	};
	useEffect(() => {
		if (error) {
			toast.error((error as any)?.message);
		}

		if (!error && !data?.success) {
			toast.warn(data?.message);
		}
		if (!error && data && data.success) {
			const count = data.data?.totalRecords ? data.data?.totalRecords : 0;
			let totalPage = 0;
			if (count % 10) {
				totalPage = Math.floor(count / 10) + 1;
			} else {
				totalPage = parseInt((count / 10).toFixed(0));
			}

			dispatch(setOverview_SeeAllTotalPage(totalPage));
		}
	}, [error, data]);

	const activityData = useMemo(() => {
		return data?.data ? data.data.activity : [];
	}, [data]);
	const _data = useMemo(() => {
		return activityData.map((item) => {
			const _date = item.date ? new Date(item.date) : new Date();
			return {
				...item,
				date: convertDateToStr(_date),
			};
		});
	}, [activityData]);
	return (
		<>
			{isLoading ? (
				<div className='pt-5 px-5 mt-4 flex justify-center h-screen w-full align-middle	'>
					<CircleProgress size={50} sx={{ margin: 'auto' }} />
				</div>
			) : (
				<div className='pt-5 px-5 mt-1'>
					<div className='w-full max-xl:mt-4 rounded-md bg-[#1B1B1B] px-4 pt-6 pb-4'>
						<div className='flex flex-row items-center'>
							<h1 className='text-white text-lg font-bold'>All Activity</h1>
							<button
								className='bg-[#FBBF04] ml-auto rounded-md px-4 py-2 text-base
                            font-semibold'
								onClick={() => dispatch(setOverview_SeeAllViewValue(false))}
							>
								See Overview
							</button>
						</div>
						<table className='mt-4 table-auto w-full'>
							<thead>
								<tr className='text-white text-lg font-medium'>
									<th className='py-2 max-sm:hidden'>Order ID</th>
									<th className='py-2'>Customer Name</th>
									<th className='py-2 max-sm:hidden'>Date</th>
									<th className='py-2'>Amount</th>
									<th className='py-2 max-sm:hidden'>Tracking</th>
								</tr>
							</thead>
							<tbody>
								{_data.map((item) => (
									<tr>
										<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
											#{item.orderId}
										</td>

										<td className='py-2'>
											<div className='flex flex-row justify-center'>
												<Image src={guy1} width={30} alt={''} />
												<p className='text-[#8D8D93] text-base ml-2 self-center'>
													{item.customer.name}
												</p>
											</div>
										</td>

										<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
											{item.date}
										</td>
										<td className='text-[#8D8D93] text-base text-center py-2'>
											${item.amount}
										</td>
										<td className='py-2 max-sm:hidden'>
											<div className='text-[#55BA68] flex justify-center'>
												<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
													{item.traking}
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className='mt-4 flex justify-center'>
							<Pagination
								count={totalPage}
								page={currentpage}
								onChange={handlePagination}
								color='primary'
								shape='rounded'
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
