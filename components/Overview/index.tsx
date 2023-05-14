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
import ArrowDownSvg from '../assets/image/overview/arrowdown.svg'
import WorldSvg from '../assets/image/overview/website1.svg'
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler'
export default function OverView() {
	const router = useRouter();
	const dispatch = useDispatch();
	const SeeAllState = useSelector(Overview_seeAllState);
	useEffect(() => {
		dispatch(setorders(0));
	}, [dispatch]);
	const [serviceState, SetserviceState] = useState(false)
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
							<OutsideClickHandler onOutsideClick={()=>SetserviceState(false)}>
								<button className='flex flex-row items-center rounded-md border-solid border-[#1B1B1B] border-[1px] px-4 py-2 
									active:bg-[#333533] relative' onClick={()=> SetserviceState(!serviceState)}>
									<Image src={WorldSvg} alt={""}/>
									<p className='ml-2 text-base text-[#717171]'>Flash Transfer</p>
									<Image src={ArrowDownSvg} alt={""} className='ml-2'/>
									<div className=' absolute w-full px-3 py-2 flex flex-col items-start bg-[#fff] top-[42px] left-0'
										style={{display:`${serviceState == false ? 'none' : 'flex'}`, boxShadow:"rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px"}}>
										<p className='text-base py-2' style={{color: "#000000de"}}>Flash Transfer</p>
									</div>
								</button>
							</OutsideClickHandler>
						</div>
					</div>
					<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>
					{SeeAllState ? <SeeAllData /> : <OverviewMainpart />}
				</div>
			</div>
		</div>
	);
}
