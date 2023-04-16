/** @format */

import Image from 'next/image';
import totalSales from '../assets/image/overview/totalSales.png';
import upRightImg from '../assets/image/overview/upRight.png';
import visitorsImg from '../assets/image/overview/visitors.png';
import downLeftImg from '../assets/image/overview/downLeft.png';
import totalOrdersImg from '../assets/image/overview/totalOrders.png';
import refundedImg from '../assets/image/overview/refunded.png';
import guy1 from '../assets/image/guys/guy1.png';
import ActionItem from './actionItem';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import HeaderA from '../Header/HeaderA';
import Sidebar from '../Sidebar/Sidebar';

import CircleProgress from 'components/progress/circle';
import { useEffect } from 'react';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);
const data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Revenue',
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			tension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: 'rgba(75,192,192,1)',
		},
		{
			label: 'Orders',
			data: [33, 25, 35, 51, 54, 76],
			fill: false,
			tension: 0.1,
			borderColor: '#742774',
		},
	],
};
const Doughtnutdata = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 205, 86)',
			],
			hoverOffset: 4,
		},
	],
};
import { setorders } from '../../utils/slice/ordersSlice';
import useTotalInfo, {
	useRecentActivity,
	useRevene,
} from '@hooks/useTotalInfo';
export default function OverView() {
	const router = useRouter();
	const { isLoading, data: totalInfo } = useTotalInfo();
	const { isLoading: isActivityLoading, data: activityData } =
		useRecentActivity();
	const { isLoading: isRevueneLoading, data: revenueData } = useRevene();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setorders(0));
	}, [dispatch]);
	return (
		<div className='w-auto m-0 p-0'>
			<HeaderA />
			<div className='flex flex-row w-full pt-[70px]'>
				<Sidebar />
				<div className='w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0'>
					<div className='pt-5 pl-5'>
						<h1 className='text-white text-lg font-bold leading-3'>
							Welcome back, Jenny
						</h1>
						<p className='mt-2 text-[#717171] text-sm'>
							Here`s what`s happening with your store today
						</p>
					</div>
					<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>
					<div className='pt-5 px-5 mt-4'>
						<div className='flex max-[801px]:flex-wrap max-[801px]:justify-center min-[801px]:justify-between'>
							<div className='w-[24%] max-[480px]:w-[90%] min-w-[181px] max-[800px]:m-2 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
								<div className='flex justify-between items-center'>
									<p className='text-[#BCBBB9] text-base'>Total Sales</p>
									<Image src={totalSales} width={24} alt={''} />
								</div>

								<div>
									{isLoading ? (
										<CircleProgress />
									) : (
										<>
											<h1 className='text-white font-bold text-3xl'>
												${totalInfo ? totalInfo.totalSales : 0}
											</h1>
											<div className='mt-5 flex flex-row items-center'>
												<Image src={upRightImg} width={12} alt={''} />
												<p className=' text-green-600 ml-2 max-[1085px]:ml-0 text-sm'>
													10.8%
												</p>
												<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
													+18.4k this week
												</p>
											</div>
										</>
									)}
								</div>
							</div>
							<div className='w-[24%] max-[480px]:w-[90%] min-w-[181px] max-[800px]:m-2 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
								<div className='flex justify-between items-center'>
									<p className='text-[#BCBBB9] text-base'>Visitors</p>
									<Image src={visitorsImg} width={24} alt={''} />
								</div>
								{isLoading ? (
									<CircleProgress />
								) : (
									<>
										<h1 className='text-white font-bold text-3xl'>
											{totalInfo ? totalInfo.visitors : 0}
										</h1>
										<div className='mt-5 flex flex-row items-center'>
											<Image src={downLeftImg} width={12} alt={''} />
											<p className=' text-[#F86E51] ml-2 max-[1085px]:ml-0 text-sm'>
												10.8%
											</p>
											<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
												+15k this week
											</p>
										</div>
									</>
								)}
							</div>
							<div className='w-[24%] max-[480px]:w-[90%] min-w-[181px] max-[800px]:m-2 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
								<div className='flex justify-between items-center'>
									<p className='text-[#BCBBB9] text-base'>Total Orders</p>
									<Image src={totalOrdersImg} width={24} alt={''} />
								</div>
								{isLoading ? (
									<CircleProgress />
								) : (
									<>
										<h1 className='text-white font-bold text-3xl'>
											{totalInfo ? totalInfo.totalOrders : 0}
										</h1>
										<div className='mt-5 flex flex-row items-center'>
											<Image src={upRightImg} width={12} alt={''} />
											<p className=' text-green-600 ml-2 max-[1085px]:ml-0 text-sm'>
												10.8%
											</p>
											<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
												+8.4k this week
											</p>
										</div>
									</>
								)}
							</div>
							<div className='w-[24%] max-[480px]:w-[90%] min-w-[181px] max-[800px]:m-2 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
								<div className='flex justify-between items-center'>
									<p className='text-[#BCBBB9] text-base'>Refunded</p>
									<Image src={refundedImg} width={24} alt={''} />
								</div>
								{isLoading ? (
									<CircleProgress />
								) : (
									<>
										<h1 className='text-white font-bold text-3xl'>
											{totalInfo ? totalInfo.refunded : 0}
										</h1>
										<div className='mt-5 flex flex-row items-center'>
											<Image src={downLeftImg} width={12} alt={''} />
											<p className=' text-[#F86E51] ml-2 max-[1085px]:ml-0 text-sm'>
												10.8%
											</p>
											<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
												+10k this week
											</p>
										</div>
									</>
								)}
							</div>
						</div>
						<div className='mt-6 flex md:justify-between max-md:flex-col max-md:justify-center'>
							<div className='w-[70%] max-md:w-full bg-[#1B1B1B] px-8 rounded-lg py-3'>
								<h1 className='text-white text-center text-lg'>
									Revenue vs Orders
								</h1>
								<Line data={data} />
							</div>
							<div
								className='w-[26%] max-md:w-full max-md:mt-4 bg-[#1B1B1B] rounded-lg p-3
                                flex justify-center'
							>
								<Doughnut data={Doughtnutdata} />
							</div>
						</div>
						<div className='mt-3 flex xl:justify-between max-xl:flex-col'>
							<div className='w-[33%] max-xl:w-full rounded-md bg-[#1B1B1B] p-4'>
								<h1 className='text-white text-lg font-bold'>Quick Actions</h1>
								<div className='mt-4 flex flex-wrap justify-center'>
									<ActionItem sectionName={'Receive'} />
									<ActionItem sectionName={'Top Up'} />
									<ActionItem sectionName={'Find ATM'} />
									<ActionItem sectionName={'Bank AC'} />
									<ActionItem sectionName={'Stats'} />
									<ActionItem sectionName={'Transfer'} />
									<ActionItem sectionName={'Cards'} />
									<ActionItem sectionName={'Pay Bill'} />
									<ActionItem sectionName={'Payment'} />
									<ActionItem sectionName={'Transactions'} />
									<ActionItem sectionName={'Withdraw'} />
									<ActionItem sectionName={'Voucher'} />
								</div>
							</div>
							<div className='w-[65%] max-xl:w-full max-xl:mt-4 rounded-md bg-[#1B1B1B] p-4'>
								<h1 className='text-white text-lg font-bold'>
									Recent Activity
								</h1>
								<table className='mt-4 table-auto w-full'>
									<thead>
										<tr className='text-white text-lg font-medium'>
											<th className='py-2 max-sm:hidden'>Order ID</th>
											<th className='py-2'>Customer Name</th>
											<th className='py-2 max-sm:hidden'>Date</th>
											<th className='py-2'>Amount</th>
											<th className='py-2 max-sm:hidden'>Tracking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												#465269
											</td>
											<td className='py-2'>
												<div className='flex flex-row justify-center'>
													<Image src={guy1} width={30} alt={''} />
													<p className='text-[#8D8D93] text-base ml-2 self-center'>
														Guy Hawkins
													</p>
												</div>
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												13/11/2022
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2'>
												$99
											</td>
											<td className='py-2 max-sm:hidden'>
												<div className='text-[#55BA68] flex justify-center'>
													<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
														Completed
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												#465269
											</td>
											<td className='py-2'>
												<div className='flex flex-row justify-center'>
													<Image src={guy1} width={30} alt={''} />
													<p className='text-[#8D8D93] text-base ml-2 self-center'>
														Guy Hawkins
													</p>
												</div>
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												13/11/2022
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2'>
												$99
											</td>
											<td className='py-2 max-sm:hidden'>
												<div className='text-[#F86E51] flex justify-center'>
													<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
														Pending
													</button>
												</div>
											</td>
										</tr>
										<tr>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												#465269
											</td>
											<td className='py-2'>
												<div className='flex flex-row justify-center'>
													<Image src={guy1} width={30} alt={''} />
													<p className='text-[#8D8D93] text-base ml-2 self-center'>
														Guy Hawkins
													</p>
												</div>
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												13/11/2022
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2'>
												$99
											</td>
											<td className='py-2 max-sm:hidden'>
												<div className='text-[#55BA68] flex justify-center'>
													<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
														Completed
													</button>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
