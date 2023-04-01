/** @format */

import Image from 'next/image';
import HeaderA from '../Header/HeaderA';
import Sidebar from '../Sidebar/Sidebar';
import allListImg from '../assets/image/newAccount/allList.png';
import TableItem from './tableItem';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setorders } from '../../utils/slice/ordersSlice';
import { Pagination } from '@mui/material';
import useRole from '@hooks/useRole';
import { useRouter } from 'next/router';
export type NewAccountProps = {
	curPage: number;
};
export default function NewAccount({ curPage = 1 }: NewAccountProps) {
	// const dispatch = useDispatch();
	const router = useRouter();

	useRole({ pagination: 10, curpage: curPage, search: '' });
	// useEffect(() => {
	// 	dispatch(setorders(7));
	// }, [dispatch]);

	const handlePaginationChange = (e: any, page: number) => {
		router.push('/dashboard/newaccount/' + page);
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
									{/* <TableItem bgcolor={"#F86E51"} section={"No KYC"} txtcolor={"#F86E51"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#FBBF04"} section={"KYC-2"} txtcolor={"#FBBF04"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/>
                                    <TableItem bgcolor={"#55BA68"} section={"KYC-3"} txtcolor={"#55BA68"}/> */}
									{tableData.map((data: any, index) => {
										return (
											<tr key={index}>
												<td className='text-[#717171] mt-2 text-base py-2 text-left'>
													<p className='text-base text-white max-sm:text-sm'>
														Apple
													</p>
													<p className='text-sm max-sm:text-xs'>Apple</p>
												</td>
												<td className='text-[#717171] mt-2 text-base py-2 text-left max-sm:text-sm'>
													lh.ago
												</td>
												<td className='text-[#717171] mt-2 text-base py-2 text-left max-sm:hidden '>
													$100.00
												</td>
												<td className='py-2'>
													<div className='w-full flex justify-start'>
														<button
															style={{ backgroundColor: data.bgColor }}
															className={`w-[78px] px-3 py-1 rounded-md text-[${data.textColor}] text-center text-sm
                                                            max-sm:hidden max-sm:text-center`}
														>
															{data.section}
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
									color='secondary'
									shape='rounded'
									showFirstButton
									showLastButton
									defaultPage={curPage ? curPage : 1}
									onChange={handlePaginationChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
