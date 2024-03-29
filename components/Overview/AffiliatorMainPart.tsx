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
import { useSelector, useDispatch } from 'react-redux';
import { setOverAffiliator_SeeAllViewValue } from '@utils/slice/OverAffiliatorSlice';
import CircleProgress from 'components/progress/circle';
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
import dynamic from 'next/dynamic';
import { STATISTIC } from '@hooks/useStatistic';
import { useTotalInfo } from '@hooks/useOverview';
import { toast } from 'react-toastify';
import { TotalInfoProps } from './type';
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

const OverviewLineChart = dynamic(
	() => import('./overviewAffiliatorLineChart'),
	{ ssr: false }
);
const OverviewDoughnut = dynamic(() => import('./overviewAffiliatorDoghnut'), {
	ssr: false,
});

export default function OverviewMainpart() {
	const dispatch = useDispatch();
	const { data, isLoading, error } = useTotalInfo(STATISTIC.AFFILIATOR);
	if (error) {
		toast.error((error as any)?.message);
	}

	const isWarning = !error && data && !data?.success;

	if (isWarning) {
		toast.warning(data?.message);
	}

	const topInformation = data?.data?.topInfo;

	const RevenuvAndOrders = data?.data?.revenue ? data?.data.revenue : [];
	const recentActivity = data?.data?.recentActivity
		? data?.data?.recentActivity
		: [];

	const totalSalesData = topInformation
		? topInformation.totalSalse
		: ({ amount: 0, previous: { amount: 0, rate: 0 } } as TotalInfoProps);

	const visitors = topInformation
		? topInformation.visitors
		: ({ amount: 0, previous: { amount: 0, rate: 0 } } as TotalInfoProps);
	const totalOrders = topInformation
		? topInformation.totalOrders
		: ({ amount: 0, previous: { amount: 0, rate: 0 } } as TotalInfoProps);

	const refunded = topInformation
		? topInformation.refunded
		: ({ amount: 0, previous: { amount: 0, rate: 0 } } as TotalInfoProps);

	return (
		<>
			{isLoading ? (
				<div className='pt-5 px-5 mt-4 flex justify-center h-screen w-full align-middle	'>
					<CircleProgress size={50} sx={{ margin: 'auto' }} />
				</div>
			) : (
				<div className='pt-5 px-5 mt-4'>
					<div className='flex max-[801px]:flex-wrap max-[801px]:justify-center min-[801px]:justify-between'>
						<div className='w-[24%] max-[480px]:w-[100%] min-w-[181px] max-[800px]:m-2 max-sm:mx-0 rounded-md p-4 max-sm:w-full max-[1085px]:p-3 bg-[#1B1B1B]'>
							<div className='flex justify-between items-center'>
								<p className='text-[#BCBBB9] text-base'>
									Total Sales of Affiliation
								</p>
								<Image src={totalSales} width={24} alt={''} />
							</div>
							<h1 className='text-white font-bold text-3xl'>
								${totalSalesData.amount}
							</h1>
							<div className='mt-5 flex flex-row items-center'>
								<Image src={upRightImg} width={12} alt={''} />
								<p className=' text-green-600 ml-2 max-[1085px]:ml-0 text-sm'>
									{totalSalesData.previous.rate}%
								</p>
								<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
									{totalSalesData.previous.amount} this week
								</p>
							</div>
						</div>
						<div className='w-[24%] max-[480px]:w-[100%] min-w-[181px] max-[800px]:m-2 max-sm:mx-0 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
							<div className='flex justify-between items-center'>
								<p className='text-[#BCBBB9] text-base'>
									Visitors from Affiliation
								</p>
								<Image src={visitorsImg} width={24} alt={''} />
							</div>
							<h1 className='text-white font-bold text-3xl'>
								{visitors.amount}
							</h1>
							<div className='mt-5 flex flex-row items-center'>
								<Image src={downLeftImg} width={12} alt={''} />
								<p className=' text-[#F86E51] ml-2 max-[1085px]:ml-0 text-sm'>
									{visitors.previous.rate}%
								</p>
								<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
									{visitors.previous.amount} this week
								</p>
							</div>
						</div>
						<div className='w-[24%] max-[480px]:w-[100%] min-w-[181px] max-[800px]:m-2 max-sm:mx-0 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
							<div className='flex justify-between items-center'>
								<p className='text-[#BCBBB9] text-base'>
									Orders from Affiliation
								</p>
								<Image src={totalOrdersImg} width={24} alt={''} />
							</div>
							<h1 className='text-white font-bold text-3xl'>
								{totalOrders.amount}
							</h1>
							<div className='mt-5 flex flex-row items-center'>
								<Image src={upRightImg} width={12} alt={''} />
								<p className=' text-green-600 ml-2 max-[1085px]:ml-0 text-sm'>
									{totalOrders.previous.rate}%
								</p>
								<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
									{totalOrders.previous.amount} this week
								</p>
							</div>
						</div>
						<div className='w-[24%] max-[480px]:w-[100%] min-w-[181px] max-[800px]:m-2 max-sm:mx-0 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]'>
							<div className='flex justify-between items-center'>
								<p className='text-[#BCBBB9] text-base'>
									Refunded from Affiliation
								</p>
								<Image src={refundedImg} width={24} alt={''} />
							</div>
							<h1 className='text-white font-bold text-3xl'>
								{refunded.amount}
							</h1>
							<div className='mt-5 flex flex-row items-center'>
								<Image src={downLeftImg} width={12} alt={''} />
								<p className=' text-[#F86E51] ml-2 max-[1085px]:ml-0 text-sm'>
									{refunded.previous.rate}%
								</p>
								<p className='text-[#717171] ml-2 max-[1085px]:ml-1 text-sm'>
									{refunded.previous.amount} this week
								</p>
							</div>
						</div>
					</div>
					<div className='mt-6 flex md:justify-between max-md:flex-col max-md:justify-center'>
						<div className='w-[70%] max-md:w-full bg-white px-8 rounded-lg py-3'>
							{/* //bg-[#1B1B1B] */}
							<h1 className='text-black text-center text-lg font-semibold'>
								Revenue vs Orders from Afffliation
							</h1>
							{/* <Line data={data}/> */}
							<OverviewLineChart
								chartData={RevenuvAndOrders}
								_chartId={'OverviewLineChart'}
							/>
						</div>
						<div
							className='w-[26%] max-md:w-full max-md:mt-4 bg-white rounded-lg p-3
                '
						>
							<h1 className='text-black text-center text-lg font-semibold'>
								Sales by Category
							</h1>
							<OverviewDoughnut chartID={'OverviewDoughnut'} />
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
							<div className='flex flex-row items-center'>
								<h1 className='text-white text-lg font-bold'>
									Recent Activity from Afflliation
								</h1>
								<button
									className='bg-[#FBBF04] ml-auto rounded-md px-4 py-2 text-base
                        font-semibold'
									onClick={() =>
										dispatch(setOverAffiliator_SeeAllViewValue(true))
									}
								>
									See all
								</button>
							</div>
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
									{recentActivity.map((item,index:number) => (
										<tr key={index}>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												#{item.orderId}
											</td>
											<td className='py-2'>
												<div className='flex flex-row justify-center'>
													<Image src={guy1} width={30} alt={''} />
													<p className='text-[#8D8D93] text-base ml-2 self-center'>
														{item.customer.name}
													</p>
												</div>
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
												{item.date.toDateString()}
											</td>
											<td className='text-[#8D8D93] text-base text-center py-2'>
												${item.amount}
											</td>
											<td className='py-2 max-sm:hidden'>
												<div className='text-[#55BA68] flex justify-center'>
													<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
														{item.traking}
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
