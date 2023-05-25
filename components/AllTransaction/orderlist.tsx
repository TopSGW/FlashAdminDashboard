/** @format */

import Image from 'next/image';
import TableItem from './tableItem';
import arrowRight from '../assets/image/allTransaction/arrowRight.png';
import { useDispatch, useSelector } from 'react-redux';
import { setAllTransaction_orderview } from '@utils/slice/allTransactionSlice';
import { setAllTransaction_OrderPagination } from '@utils/slice/allTransactionSlice';
import { AllTransactinoOrderPaginationState } from '@utils/slice/allTransactionSlice';
import { Pagination } from '@mui/material';
import { useOrders } from '@hooks/useTransaction';
import { toast } from 'react-toastify';
import CircleProgress from 'components/progress/circle';
export default function OrderList() {
	const dispatch = useDispatch();
	const currentPage = useSelector(AllTransactinoOrderPaginationState);
	const handlePagination = (e: any, page: number) => {
		dispatch(setAllTransaction_OrderPagination(page));
	};
	const { data, isLoading, error } = useOrders({
		curPage: currentPage,
		pagination: 10,
	});
	if (error) {
		toast.error((error as any)?.message);
	}

	if (!error && data && !data?.success) {
		toast.warn(data.message);
	}

	const orders = data?.data?.orders ? data?.data?.orders : [];
	return (
		<>
			{isLoading ? (
				<div className='pt-5 mt-4 flex justify-center h-screen w-full align-middle	'>
					<CircleProgress size={50} sx={{ margin: 'auto' }} />
				</div>
			) : (
				<div className='w-auto bg-[#1B1B1B] rounded-md px-4 pt-4 m-5 pb-4'>
					<div className='flex justify-between items-center'>
						<h1 className='text-white text-lg'>Last orders</h1>
						<div>
							<button
								className='border-[2px] border-solid border-gray-600 rounded-md
                    flex flex-row px-4 py-1 items-center'
								onClick={() => dispatch(setAllTransaction_orderview())}
							>
								<p className='text-sm text-[#717171]'>View Overview</p>
								<Image src={arrowRight} alt={''} className='ml-auto mr-0' />
							</button>
						</div>
					</div>
					<table className='mt-3 w-full'>
						<thead>
							<tr>
								<th className='text-white py-2 text-left'>Account Name</th>
								<th className='text-white py-2 text-left max-sm:hidden'>
									Change
								</th>
								<th className='text-white py-2 text-center max-sm:hidden'>
									Cost
								</th>
								<th className='text-white py-2 text-right'>Profit</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((item) => (
								<TableItem data={item} />
							))}
						</tbody>
					</table>
					<div className='mt-4 flex justify-center'>
						<Pagination
							count={5}
							page={currentPage}
							onChange={handlePagination}
							color='primary'
							shape='rounded'
						/>
					</div>
				</div>
			)}
		</>
	);
}
