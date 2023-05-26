/** @format */

import Image from 'next/image';
import logo from '../assets/logo/logo.png';
import searchImg from '../assets/image/header/searchImg.png';
import chevronDown from '../assets/image/header/chevron-down.png';
import man1 from '../assets/image/header/man1.png';
import notification from '../assets/image/sidebar/notification.png';
import menu from '../assets/image/sidebar/menu.png';
import materialsymbol from '../assets/image/sidebar/material-symbols_dashboard.png';
import statics from '../assets/image/sidebar/statics.png';
import allTransaction from '../assets/image/sidebar/allTransaction.png';
import billingInvoice from '../assets/image/sidebar/billingInvoice.png';
import clientDashboard from '../assets/image/sidebar/clientDashboard.png';
import supportEmail from '../assets/image/sidebar/supportEmail.png';
import createInvoice from '../assets/image/sidebar/createInvoice.png';
import loginImg from '../assets/image/sidebar/login.png';
import SidebarItem from '../Sidebar/Item';
import baselineMore from '../assets/image/statistics/baselinemore.png';

import totalSaleschart from '../assets/image/statistics/totalSaleschart.png';
import totalProfitchart from '../assets/image/statistics/totalProfitchart.png';
import totalOrderchart from '../assets/image/statistics/totalOrderchart.png';
import guy1 from '../assets/image/guys/guy1.png';

import TableItem from './tableItem';
import HeaderA from '../Header/HeaderA';
import Sidebar from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { setorders } from '../../utils/slice/ordersSlice';
import { Pagination } from '@mui/material';
import { useClientsHistory, CLIENT_HIS_STATUS } from '@hooks/useClient';
import CircleProgress from 'components/progress/circle';
import { toast } from 'react-toastify';
import {
	getClientHistoryPagination,
	getClientHistoryTotalPage,
	setClientHIsPagination,
	setClientHIsTotalPage,
} from '@utils/slice/clientHistorySlice';
export default function ClientHistory() {
	const router = useRouter();
	const pagination = useSelector(getClientHistoryPagination);
	const totalPage = useSelector(getClientHistoryTotalPage);

	const dispatch = useDispatch();

	const colorData = {
		'Not Send': {
			text: 'Not Send',
			color: '#F86E51',
			bgColor: 'rgba(248, 110, 81, 0.2)',
		},
		Sent: {
			text: 'Not Send',
			color: '#55BA68',
			bgColor: 'rgba(85, 186, 104, 0.2)',
		},
		Pending: {
			text: 'Not Send',
			color: '#FBBF04',
			bgColor: 'rgba(251, 191, 4, 0.2)',
		},
	};
	useEffect(() => {
		dispatch(setorders(9));
	}, [dispatch]);
	const { data, isLoading, error } = useClientsHistory({
		curPage: pagination,
		pagination: 10,
	});
	useEffect(() => {
		if (error) {
			toast.error((error as any)?.message);
		}

		if (!error && data && !data.success) {
			toast.warn(data.message);
		}
		if (!error && data && data.success) {
			const count = data.data?.totalRecord ? data.data?.totalRecord : 0;
			let totalPage = 0;
			if (count % 10) {
				totalPage = Math.floor(count / 10) + 1;
			} else {
				totalPage = parseInt((count / 10).toFixed(0));
			}
			dispatch(setClientHIsTotalPage(totalPage));
		}
	}, [data, error]);

	const clientData = useMemo(() => {
		return data?.success && data.data?.history ? data.data?.history : [];
	}, [data]);

	const handleChangePagination = (e: any, value: number) => {
		dispatch(setClientHIsPagination(value));
	};

	return (
		<div className='w-auto m-0 p-0'>
			<HeaderA />
			<div className=' flex flex-rwo w-full pt-[70px] '>
				<Sidebar />
				{isLoading ? (
					<div className='pt-5 pl-[300px] mt-4 flex justify-center h-screen w-full align-middle	'>
						<CircleProgress size={50} sx={{ margin: 'auto' }} />
					</div>
				) : (
					<div className='w-full bg-black pb-10 pl-[300px] max-lg:pl-0'>
						<div className='pt-5 px-5'>
							<h1 className='text-white text-lg font-bold leading-3'>
								Client History
							</h1>
							<p className='mt-2 text-[#717171] text-sm'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</p>
						</div>
						<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>

						<div className='pt-5 px-5 mt-4'>
							<table className='mt-4 w-full'>
								<thead>
									<tr className=''>
										<th className='py-2 text-white'>Client name</th>
										<th className='py-2 text-white max-md:hidden'>
											Issued date
										</th>
										<th className='py-2 text-white max-md:hidden'>Due Date</th>
										<th className='py-2 text-white max-sm:hidden'>Amount</th>
										<th className='py-2 text-white max-sm:hidden'>Pair</th>
										<th className='py-2 text-white'>Status</th>
									</tr>
								</thead>
								<tbody>
									{clientData.map((item) => {
										return (
											<TableItem
												item={item}
												text={item.status}
												color={colorData[item.status].color}
												bgcolor={colorData[item.status].bgColor}
											/>
										);
									})}
								</tbody>
							</table>
							<div className='w-full flex justify-end pr-[10%]'>
								<Pagination
									count={totalPage}
									color='secondary'
									shape='rounded'
									page={pagination}
									onChange={handleChangePagination}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
