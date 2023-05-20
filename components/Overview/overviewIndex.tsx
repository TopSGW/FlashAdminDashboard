/** @format */

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import SeeAllData from './seeall';
import OverviewMainpart from './mainPart';

import HeaderA from '../Header/HeaderA';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';

import { setorders } from '../../utils/slice/ordersSlice';
import { Overview_seeAllState } from '../../utils/slice/overviewSlice';
import DropDownBox from './transferDropbox';

export default function OverViewPart() {
	const router = useRouter();
	const dispatch = useDispatch();
	const SeeAllState = useSelector(Overview_seeAllState);
	useEffect(() => {
		dispatch(setorders(0));
	}, [dispatch]);

	return (
		<div className='w-auto m-0 p-0'>
			<HeaderA />
			<div className='flex flex-row w-full pt-[70px]'>
				<Sidebar />
				<div className='w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0'>
					<div className='pt-5 pl-5 flex sm:flex-row max-sm:flex-col'>
						<div className='flex flex-col'>
							<h1 className='text-white text-lg font-bold leading-3'>
								Welcome back, Jenny
							</h1>
							<p className='mt-2 text-[#717171] text-sm'>
								Here`s what`s happening with your store today
							</p>
						</div>
						<div className='flex flex-row items-center sm:ml-auto sm:mr-5 max-sm:mt-3'>
							<DropDownBox />
						</div>
					</div>
					<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>
					{SeeAllState ? <SeeAllData /> : <OverviewMainpart />}
				</div>
			</div>
		</div>
	);
}
