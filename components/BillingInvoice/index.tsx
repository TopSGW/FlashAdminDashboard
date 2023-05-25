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
import HeaderA from '../Header/HeaderA';

import totalSaleschart from '../assets/image/statistics/totalSaleschart.png';
import totalProfitchart from '../assets/image/statistics/totalProfitchart.png';
import totalOrderchart from '../assets/image/statistics/totalOrderchart.png';
import guy1 from '../assets/image/guys/guy1.png';

import TableItem from './tableItem';

import Sidebar from '../Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setorders } from '../../utils/slice/ordersSlice';
import { Pagination } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import useInvoice, { INVOICE_STATUS } from '@hooks/useInvoice';
import { toast } from 'react-toastify';
import CircleProgress from 'components/progress/circle';
export default function BillingInvoice() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setorders(3));
	}, [dispatch]);
	const [tabselected, settabselected] = useState([true, false, false]);

	const Tdata = [
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'To paid',
			Bstatus: 'Pay',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'To paid',
			Bstatus: 'Pay',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
	];
	const PastData = [
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'To paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'To paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
		{
			invoiceId: '#14586578',
			StateDate: '05/02/2023',
			EndDdate: '05/02/2023',
			TotalShift: '2 shifts',
			InvoiceAmount: '$500.00',
			Status: 'Paid',
			Bstatus: 'Cancel',
		},
	];
	const TdataColor: any = {
		ToPaid: {
			bgColor: 'rgba(248, 110, 81, 0.1)',
			color: '#F86E51',
			border: '1px solid #000000',
		},
		Paid: {
			color: '#55BA68',
			bgColor: 'rgba(85, 186, 104, 0.1)',
			border: '1px solid #000000',
		},
		Pay: {
			color: '#141414',
			bgColor: '#FBBF04',
			border: 'none',
		},
		Cancel: {
			color: '#141414',
			bgColor: '#AC04FB',
			border: 'none',
		},
	};
	const status = tabselected[0]
		? INVOICE_STATUS.PAID
		: tabselected[1]
		? INVOICE_STATUS.TO_PAID
		: 'all';
	const { data, isLoading, error } = useInvoice({
		pagination: 10,
		curpage: 1,
		status: status,
	});
	if (error) {
		toast.error((error as any)?.message);
	}
	if (!error && data && !data.success) {
		toast.warn(data.message);
	}
	const invoices = data?.data ? data.data.invoices : [];
	const InvoicesTableData =
		status === INVOICE_STATUS.TO_PAID
			? invoices.filter((item) => item.status === INVOICE_STATUS.TO_PAID)
			: status === INVOICE_STATUS.PAID
			? invoices.filter((item) => item.status === INVOICE_STATUS.PAID)
			: invoices;
	return (
		<div className='w-auto m-0 p-0'>
			<HeaderA />
			<div className=' flex flex-rwo w-full pt-[70px]'>
				<Sidebar />
				{isLoading ? (
					<div className='pt-5 pl-[300px] mt-4 flex justify-center h-screen w-full align-middle	'>
						<CircleProgress size={50} sx={{ margin: 'auto' }} />
					</div>
				) : (
					<div className='w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0'>
						<div className='pt-5 px-5'>
							<h1 className='text-white text-lg font-bold leading-3'>
								Billing & Invoices
							</h1>
							<p className='mt-2 text-[#717171] text-sm'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</p>
						</div>
						<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>
						<div className='pt-5 px-5 mt-4'>
							<div className='flex flex-row items-start'>
								<p
									className={`text-white text-base font-sans 
                             cursor-pointer ${
																tabselected[0]
																	? 'border-b-[1px] border-solid border-[#FBBF04]'
																	: ''
															}`}
									onClick={() => settabselected([true, false, false])}
								>
									Open Invoices
								</p>
								<p
									className={`text-white text-base font-sans ml-4 cursor-pointer ${
										tabselected[1]
											? 'border-b-[1px] border-solid border-[#FBBF04]'
											: ''
									}`}
									onClick={() => settabselected([false, true, false])}
								>
									Past Invoices
								</p>
								<p
									className={`text-white text-base font-sans ml-4 cursor-pointer
                                ${
																	tabselected[2]
																		? 'border-b-[1px] border-solid border-[#FBBF04]'
																		: ''
																}`}
									onClick={() => settabselected([false, false, true])}
								>
									All Invoices
								</p>
							</div>

							<>
								<div className='mt-4 bg-[#1B1B1B] rounded-lg px-4 py-2 w-full flex flex-row items-center'>
									<Checkbox />
									<div className='w-[120px] pl-8'>
										<h3 className='text-white font-semibold text-base'>
											Invoice ID
										</h3>
									</div>
									<div className='w-[120px] pl-8 max-lg:hidden'>
										<h3 className='text-white font-semibold text-base'>
											Start Date
										</h3>
									</div>
									<div className='w-[120px] pl-8 max-lg:hidden'>
										<h3 className='text-white font-semibold text-base'>
											End Date
										</h3>
									</div>
									<div className='w-[150px] pl-8 max-md:hidden'>
										<h3 className='text-white font-semibold text-base'>
											Total Shifts
										</h3>
									</div>
									<div className='w-[150px] pl-8 max-xl:hidden'>
										<h3 className='text-white font-semibold text-base'>
											Invoice Amount
										</h3>
									</div>
									<div className='w-[130px] pl-8'>
										<h3 className='text-white font-semibold text-base'>
											Status
										</h3>
									</div>
								</div>
								{InvoicesTableData.map((item, index) => {
									const bstatus =
										item.status === INVOICE_STATUS.PAID ? 'Cancel' : 'Pay';
									return (
										<div
											key={index}
											className='mt-4 bg-[#1B1B1B] rounded-lg px-4 py-2 w-full flex flex-row items-center'
										>
											<Checkbox />
											<div className='w-[120px] pl-8'>
												<h3 className='text-[#717171] text-base'>
													{item.invoiceId}
												</h3>
											</div>
											<div className='w-[120px] pl-8 max-lg:hidden'>
												<h3 className='text-[#717171] text-base'>
													{item.startDate.toString()}
												</h3>
											</div>
											<div className='w-[120px] pl-8 max-lg:hidden'>
												<h3 className='text-[#717171] text-base'>
													{item.endDate.toString()}
												</h3>
											</div>
											<div className='w-[150px] pl-8 max-md:hidden'>
												<h3 className='text-[#717171] text-base'>
													{item.totalShifts} shifts
												</h3>
											</div>
											<div className='w-[150px] pl-8 max-xl:hidden'>
												<h3 className='text-[#717171]  text-base'>
													{item.amount}
												</h3>
											</div>
											<div className='w-[150px] pl-8'>
												<button
													className={`px-4 py-1 text-sm rounded-md`}
													style={{
														color: `${TdataColor[item.status]?.color}`,
														backgroundColor: `${
															TdataColor[item.status]?.bgColor
														}`,
														border: `${TdataColor[item.status]?.border}`,
													}}
												>
													{item.status}
												</button>
											</div>
											<div className='w-[120px] ml-auto max-2xl:hidden'>
												<button
													className='px-4 py-1 text-sm rounded-md font-bold'
													style={{
														color: `${TdataColor[bstatus]?.color}`,
														backgroundColor: `${TdataColor[bstatus]?.bgColor}`,
														border: `${TdataColor[bstatus]?.border}`,
													}}
												>
													{bstatus}
												</button>
											</div>
										</div>
									);
								})}
								<div className='mt-4 w-full flex justify-end pr-[10%]'>
									<Pagination count={6} color='secondary' shape='rounded' />
								</div>
							</>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
