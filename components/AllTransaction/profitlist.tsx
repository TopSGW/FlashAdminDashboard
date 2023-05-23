/** @format */

import Image from 'next/image';
import arrowRight from '../assets/image/allTransaction/arrowRight.png';
import arrowUp from '../assets/image/allTransaction/arrowUp.png';
import TransactionItem from './TransactionItem';
import { useDispatch, useSelector } from 'react-redux';
import { setAllTransaction_profitview } from '@utils/slice/allTransactionSlice';
import { AllTransactionProfitPaginationState } from '@utils/slice/allTransactionSlice';
import { setAllTransaction_ProfitPagination } from '@utils/slice/allTransactionSlice';
import { Pagination } from '@mui/material';
import { useProfits } from '@hooks/useTransaction';
import { toast } from 'react-toastify';

export default function ProfitList() {
	const dispatch = useDispatch();
	const currentPage = useSelector(AllTransactionProfitPaginationState);
	const handlePagination = (e: any, page: number) => {
		dispatch(setAllTransaction_ProfitPagination(page));
	};
	const { data, isLoading, error } = useProfits({
		curPage: currentPage,
		pagination: 10,
	});
	if (error) {
		toast.error((error as any)?.message);
	}

	if (!error && data && !data.success) {
		toast.warn(data.message);
	}
	const profits = data?.data?.profits ? data?.data?.profits : [];
	return (
		<div className='w-auto m-5 px-4 pt-4 rounded-md bg-[#1B1B1B] pb-2'>
			<div className='flex justify-between items-center'>
				<h1 className='text-white text-lg'>All last Profits</h1>
				<div>
					<button
						className='border-[2px] border-solid border-gray-600 rounded-md
                    flex flex-row px-4 py-1 items-center'
						onClick={() => dispatch(setAllTransaction_profitview())}
					>
						<p className='text-sm text-[#717171]'>View Overview</p>
						<Image src={arrowRight} alt={''} className='ml-auto mr-0' />
					</button>
				</div>
			</div>

			<div className='mt-4 flex flex-row items-center'>
				<div className='flex justify-center items-center py-1 w-[40px] rounded-md bg-[#55BA68]/[.2]'>
					<Image src={arrowUp} width={24} alt={''} />
				</div>
				<div className='ml-12 flex flex-col'>
					<p className=' text-base text-[#55BA68]'>+$500.00</p>
					<p className='text-[#717171] text-sm'>USDT/France (EURO)</p>
				</div>
				<div className='ml-auto mr-0 flex flex-col'>
					<p className=' text-xs text-[#717171]'>3 Jan</p>
					<p className='text-[#717171] text-xs'>10:53</p>
				</div>
			</div>
			{profits.map((item) => (
				<TransactionItem data={item} />
			))}

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
	);
}
