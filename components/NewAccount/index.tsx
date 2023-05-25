/** @format */

import Image from 'next/image';
import HeaderA from '../Header/HeaderA';
import Sidebar from '../Sidebar/Sidebar';
import allListImg from '../assets/image/newAccount/allList.png';

import { Pagination } from '@mui/material';
import useRole from '@hooks/useRole';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setorders } from '../../utils/slice/ordersSlice';
import { useClients } from '@hooks/useClient';
import CircleProgress from 'components/progress/circle';
export type NewAccountProps = {
	curPage: number;
};
export default function NewAccount({ curPage = 1 }: NewAccountProps) {
	const router = useRouter();

	const handlePaginationChange = (e: any, page: number) => {
		router.push('/dashboard/newaccount/' + page);
	};

	// const totalPage = data?data.totalPage:1
	// const isPageExist = data?.success?true:false;
	// if(!isLoading && !isPageExist){
	// 	toast.error("page dotn exist");
	// }
	// const tableData = (!isLoading &&!isPageExist)?[]:data?.users;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setorders(7));
	}, [dispatch]);
	const { data, isLoading, error } = useClients({
		pagination: 10,
		curPage: curPage,
	});
	if (error) {
		toast.error((error as any)?.message);
	}

	if (!error && data && !data.success) {
		toast.warn(data.message);
	}

	const customerData = data && data?.data?.customer ? data?.data?.customer : [];
	const colorData = {
		'No KYC': {
			bgColor: 'rgba(248, 110, 81, 0.2)',
			textColor: '#F86E51',
		},
		'KYC-1': {
			bgColor: 'rgba(251, 191, 4, 0.2)',
			textColor: '#FBBF04',
		},
		'KYC-2': {
			bgColor: 'rgba(251, 191, 4, 0.2)',
			textColor: '#FBBF04',
		},
		'KYC-3': {
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		'KYC-4': {
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
	};
	const tableData = [
		{
			section: 'No KYC',
			bgColor: 'rgba(248, 110, 81, 0.2)',
			textColor: '#F86E51',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-2',
			bgColor: 'rgba(251, 191, 4, 0.2)',
			textColor: '#FBBF04',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
		{
			section: 'KYC-3',
			bgColor: 'rgba(85, 186, 104, 0.2)',
			textColor: '#55BA68',
		},
	];
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
								The list of customers
							</h1>
							<p className='mt-2 text-[#717171] text-sm'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</p>
						</div>
						<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>
						<div className='mt-5 w-[87%] max-sm:w-[92%] mx-auto p-4 max-sm:p-3'>
							<div className='flex justify-between items-center'>
								<h1 className='text-white text-base max-sm:text-sm'>
									The most recent accounts
								</h1>
								<div className='flex flex-row items-center'>
									<Image src={allListImg} width={22} alt={''} />
									<h1 className='text-[#BCBBB9] ml-4 max-sm:ml-2 text-base max-sm:text-sm'>
										All List
									</h1>
								</div>
							</div>
							<div className='mt-4 px-4 max-sm:px-2'>
								<table className='w-full'>
									<thead>
										<tr className='text-white'>
											<th className='py-2 text-left max-sm:text-sm'>
												{' '}
												Client name
											</th>
											<th className='py-2 text-left max-sm:text-sm'>
												{' '}
												Account created
											</th>
											<th className='py-2 text-left max-sm:hidden'>
												{' '}
												Total Amount
											</th>
											<th className='py-2 text-left max-sm:hidden'>Kyc</th>
										</tr>
									</thead>
									<tbody>
										{customerData.map((data, index) => {
											return (
												<tr key={index}>
													<td className='text-[#717171] mt-2 text-base py-2 text-left'>
														<p className='text-base text-white max-sm:text-sm'>
															{data.clientName}
														</p>
														<p className='text-sm max-sm:text-xs'>
															{data.clientName}
														</p>
													</td>
													<td className='text-[#717171] mt-2 text-base py-2 text-left max-sm:text-sm'>
														{data.accountCreated.toDateString()}
													</td>
													<td className='text-[#717171] mt-2 text-base py-2 text-left max-sm:hidden '>
														$100.00
													</td>
													<td className='py-2'>
														<div className='w-full flex justify-start'>
															<button
																style={{
																	backgroundColor: colorData[data.kyc].bgColor,
																}}
																className={`w-[78px] px-3 py-1 rounded-md text-[${
																	colorData[data.kyc].textColor
																}] text-center text-sm
                                                            max-sm:hidden max-sm:text-center`}
															>
																{data.kyc}
															</button>
														</div>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
								<div className='w-full flex justify-center mt-2'>
									<Pagination
										count={4}
										color='primary'
										shape='rounded'
										defaultPage={curPage ? curPage : 1}
										onChange={handlePaginationChange}
									/>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
