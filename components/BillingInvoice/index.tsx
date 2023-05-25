/** @format */

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
import HeaderA from '../Header/HeaderA';

import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { setorders } from '../../utils/slice/ordersSlice';
import { Pagination } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import useInvoice, { INVOICE_STATUS } from '@hooks/useInvoice';
import { toast } from 'react-toastify';
import CircleProgress from 'components/progress/circle';
import { useMemo } from 'react';
import {
	allInvoicePagination,
	allInvoiceTotalPage,
	openInvoicePagination,
	openInvoiceTotalPage,
	pastInvoicePagination,
	pastInvoiceTotalPage,
	setInvoiceAllPagination,
	setInvoiceAllTotalPage,
	setInvoiceOpenPagination,
	setInvoiceOpenTotalPage,
	setInvoicePastPagination,
	setInvoicePastTotalPage,
} from '@utils/slice/billandInvoiceSlice';
import { stat } from 'fs';
export default function BillingInvoice() {
	const dispatch = useDispatch();
	const openCurPage = useSelector(openInvoicePagination);
	const pastCurPage = useSelector(pastInvoicePagination);
	const allCurPage = useSelector(allInvoicePagination);
	const openTotalPage = useSelector(openInvoiceTotalPage);
	const pastTotalPage = useSelector(pastInvoiceTotalPage);
	const allTotalPage = useSelector(allInvoiceTotalPage);
	useEffect(() => {
		dispatch(setorders(3));
	}, [dispatch]);

	const [tabselected, settabselected] = useState([true, false, false]);

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
	const convertDateToStr = (date: Date) => {
		const startYear = date.getFullYear();
		const startMonth = ('0' + (date.getMonth() + 1)).slice(-2);
		const startDay = ('0' + date.getDate()).slice(-2);
		return `${startYear}/${startMonth}/${startDay}`;
	};
	const status = useMemo(() => {
		return tabselected[0]
			? INVOICE_STATUS.TO_PAID
			: tabselected[1]
			? INVOICE_STATUS.PAID
			: 'all';
	}, [tabselected]);
	const curPage = useMemo(() => {
		if (status === INVOICE_STATUS.TO_PAID) {
			return openCurPage;
		} else if (status === INVOICE_STATUS.PAID) {
			return pastCurPage;
		} else {
			return allCurPage;
		}
	}, [status, openCurPage, pastCurPage, allCurPage]);
	const { data, isLoading, error } = useInvoice({
		pagination: 10,
		curpage: curPage,
		status: status,
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

			handleChangeTotalPage(totalPage);
		}
	}, [error, data]);

	const invoices = useMemo(() => {
		return data?.data ? data.data.invoices : [];
	}, [data]);

	const InvoicesTableData = useMemo(() => {
		const tableData =
			status === INVOICE_STATUS.TO_PAID
				? invoices.filter((item) => item.status === INVOICE_STATUS.TO_PAID)
				: status === INVOICE_STATUS.PAID
				? invoices.filter((item) => item.status === INVOICE_STATUS.PAID)
				: invoices;

		const result = tableData.map((item) => {
			return {
				...item,
				startDate: convertDateToStr(new Date(item.startDate)),
				endDate: convertDateToStr(new Date(item.startDate)),
			};
		});
		return result;
	}, [invoices]);

	const curTotalPage = useMemo(() => {
		if (status === INVOICE_STATUS.TO_PAID) {
			return openTotalPage;
		} else if (status === INVOICE_STATUS.PAID) {
			return pastTotalPage;
		} else {
			return allTotalPage;
		}
	}, [status, openTotalPage, pastTotalPage, allTotalPage]);

	const handleChangePagination = useCallback(
		(e: any, value: number) => {
			if (status === INVOICE_STATUS.TO_PAID) {
				dispatch(setInvoiceOpenPagination(value));
			} else if (status === INVOICE_STATUS.PAID) {
				dispatch(setInvoicePastPagination(value));
			} else {
				dispatch(setInvoiceAllPagination(value));
			}
		},
		[status]
	);
	const handleChangeTotalPage = useCallback(
		(totalPage: number) => {
			if (status === INVOICE_STATUS.TO_PAID) {
				dispatch(setInvoiceOpenTotalPage(totalPage));
			} else if (status === INVOICE_STATUS.PAID) {
				dispatch(setInvoicePastTotalPage(totalPage));
			} else {
				dispatch(setInvoiceAllTotalPage(totalPage));
			}
		},
		[status]
	);
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
													#{item.invoiceId}
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
									<Pagination
										count={curTotalPage}
										color='secondary'
										shape='rounded'
										page={curPage}
										onChange={handleChangePagination}
									/>
								</div>
							</>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
