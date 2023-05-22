/** @format */

import HeaderA from '../Header/HeaderA';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setorders } from '../../utils/slice/ordersSlice';
import AllTransaction_MainPart from './mainPart';
import OrderList from './orderlist';
import ProfitList from './profitlist';

import { AllTransactionOrderState } from '@utils/slice/allTransactionSlice';
import { AllTransactionProfitState } from '@utils/slice/allTransactionSlice';
import { useCommonInformation } from '@hooks/useTransaction';
import { toast } from 'react-toastify';
export default function AllTransactions() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setorders(4));
	}, [dispatch]);
	const orderViewState = useSelector(AllTransactionOrderState);
	const profitViewState = useSelector(AllTransactionProfitState);
	const { data, isLoading, error } = useCommonInformation();

	if (error) {
		toast.error((error as any)?.message);
	}

	if (!error && data && !data.success) {
		toast.warn(data.message);
	}

	const totalNetworth = data?.data?.totalNetWorth;
	const lastProfits = data?.data?.lastProfit ? data?.data?.lastProfit : [];
	const lastOrders = data?.data?.lastOrder ? data?.data?.lastOrder : [];
	const categories = data?.data?.categories
		? data?.data?.categories
		: { Cash: 0, 'Credit Card': 0, Crypto: 0, 'Bank Transfer': 0 };
	return (
		<div className='w-auto m-0 p-0'>
			<HeaderA />
			<div className=' flex flex-row w-full pt-[70px]'>
				<Sidebar />
				<div className=' w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0'>
					{!(orderViewState || profitViewState) && <AllTransaction_MainPart />}
					{orderViewState && <OrderList />}
					{profitViewState && <ProfitList />}
				</div>
			</div>
		</div>
	);
}
