import Image from "next/image"
import logo from '../assets/logo/logo.png';
import searchImg from '../assets/image/header/searchImg.png';
import chevronDown from '../assets/image/header/chevron-down.png';
import man1 from '../assets/image/header/man1.png';
import notification from '../assets/image/sidebar/notification.png';
import menu from '../assets/image/sidebar/menu.png';
import materialsymbol from '../assets/image/sidebar/material-symbols_dashboard.png';
import statics from '../assets/image/sidebar/statics.png';
import allTransaction from '../assets/image/sidebar/allTransaction.png';
import billingInvoice from '../assets/image/sidebar/billingInvoice.png';
import clientDashboard from '../assets/image/sidebar/clientDashboard.png';
import supportEmail from '../assets/image/sidebar/supportEmail.png';
import createInvoice from '../assets/image/sidebar/createInvoice.png';
import loginImg from '../assets/image/sidebar/login.png';
import SidebarItem from "../Sidebar/Item";
import baselineMore from '../assets/image/statistics/baselinemore.png';

import totalSaleschart from '../assets/image/statistics/totalSaleschart.png';
import totalProfitchart from '../assets/image/statistics/totalProfitchart.png';
import totalOrderchart from '../assets/image/statistics/totalOrderchart.png';
import growthSvg from '../assets/image/statistics/growth.svg';
import guy1 from '../assets/image/guys/guy1.png';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';
import { Doughnut, Line, Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
export const Itemoption = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };
const labels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];  
export const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [13,5,45,48,22,23,12,19,39,32,41,47],
        backgroundColor: '#FBBF04',
        borderWidth: 1,
        barThickness: 15,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        maxBarThickness: 18,
        borderRadius: 6
      },
    ],
  };
import { useRouter } from "next/router";
import HeaderA from "../Header/HeaderA";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setorders } from "../../utils/slice/ordersSlice";
import dynamic from "next/dynamic";
import DropBox from './Dropbox'
const StatisticsLineChat = dynamic(()=> import('./statisticsLineChart'), {ssr: false})
const StatisticsMapChart = dynamic(() => import('./statisticsMapChart'), {ssr: false})
const StatisticsDoghnut = dynamic(() => import('./statisticsDoughnut'), {ssr: false})
const StatisticsColumnChart = dynamic(() => import('./statisticsColumn'), {ssr: false})

export default function Statistics(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setorders(1));
    },[dispatch])    
    return(
        <div className="w-auto m-0 p-0">
            <HeaderA/>
            <div className=" flex flex-rwo w-full pt-[70px]">
                <Sidebar/>
                <div className="w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0">
                    <div className="pt-10 px-8 flex justify-between items-center max-sm:px-3">
                        <h1 className="text-white text-2xl font-bold leading-3">
                            Statistics
                        </h1>
                        <div className="">
                            <div className="flex flex-row items-center">
                                <div className="ml-auto mr-4 max-sm:mr-0">
                                    <DropBox/>
                                </div>
                                <input type="date" className="px-3 py-2 border-solid border-gray-500 border-2 max-sm:hidden
                                     bg-slate-500 rounded-md"/>        
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex max-[1172px]:flex-wrap max-[1172px]:justify-center min-[1172px]:justify-between px-8 max-sm:px-3">
                        <div className="w-[32%] max-sm:w-full min-w-[296px] max-[1171px]:m-1 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]">
                            <div className="flex justify-between items-center">
                                <p className="text-[#BCBBB9] text-base">Total Sales</p>
                                <Image src={baselineMore} width={24} alt={""}/>
                            </div>
                            <h1 className="text-white font-bold text-3xl">$43,340.78</h1>
                            <div className="mt-5 flex flex-row items-end">
                                <p className=" text-green-600 ml-2 p-0 max-[1085px]:ml-0 text-sm">9.5%</p>
                                <p className="text-[#717171] ml-2 p-0 max-[1085px]:ml-1 text-sm">than last month</p>
                                <Image src={totalSaleschart} width={100} alt={""} className="ml-auto mr-0 mb-1"/>
                            </div>
                        </div>
                        <div className="w-[32%] max-sm:w-full min-w-[296px] max-[1171px]:m-1 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]">
                            <div className="flex justify-between items-center">
                                <p className="text-[#BCBBB9] text-base">Total Order</p>
                                <Image src={baselineMore} width={24} alt={""}/>
                            </div>
                            <h1 className="text-white font-bold text-3xl">12,528</h1>
                            <div className="mt-4 flex flex-row items-end">
                                <p className=" text-green-600 ml-2 p-0 max-[1085px]:ml-0 text-sm">5.2%</p>
                                <p className="text-[#717171] ml-2 p-0 max-[1085px]:ml-1 text-sm">than last month</p>
                                <Image src={totalOrderchart} width={100} alt={""} className="ml-auto mr-0 mb-1"/>
                            </div>
                        </div>                    
                        <div className="w-[32%] max-sm:w-full min-w-[296px] max-[1171px]:m-1 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]">
                            <div className="flex justify-between items-center">
                                <p className="text-[#BCBBB9] text-base">Total Profit</p>
                                <Image src={baselineMore} width={24} alt={""}/>
                            </div>
                            <h1 className="text-white font-bold text-3xl">$23,890.13</h1>
                            <div className="mt-5 flex flex-row items-end">
                                <p className=" text-green-600 ml-2 p-0 max-[1085px]:ml-0 text-sm">8.2%</p>
                                <p className="text-[#717171] ml-2 p-0 max-[1085px]:ml-1 text-sm">than last month</p>
                                <Image src={totalProfitchart} width={100} alt={""} className="ml-auto mr-0 mb-1"/>
                            </div>
                        </div>                    
                    </div>
                    <div className="mt-5 flex max-[900px]:flex-col min-[900px]:justify-between px-8 max-sm:px-3">
                        <div className="w-[66%] max-[900px]:w-full rounded-lg bg-[#1B1B1B] flex justify-center px-2">
                            <Bar options={Itemoption} data={data}/>
                        </div>
                        <div className="w-[32%] max-[900px]:w-full max-[900px]:mt-5 rounded-lg bg-[#1B1B1B] px-4">
                            <div className="mt-4 flex justify-between items-center">
                                <h1 className="text-white font-bold text-lg">Top Pair</h1>
                                <Image src={baselineMore} width={20} alt={""}/>
                            </div>
                            <table className="mt-1 w-full">
                                <thead>
                                    <tr>
                                        <th className="py-2 text-[#717171] text-left">
                                            Product
                                        </th>
                                        <th className="py-2 text-[#717171] text-right">
                                            Sold
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2">
                                            <div className="flex flex-row items-center">
                                                <Image src={guy1} width={20} alt={""}/>
                                                <p className="text-white text-sm ml-2">
                                                    USD/BTC
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">
                                            <div className="flex flex-row items-center">
                                                <Image src={guy1} width={20} alt={""}/>
                                                <p className="text-white text-sm ml-2">
                                                    USD/BTC
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">
                                            <div className="flex flex-row items-center">
                                                <Image src={guy1} width={20} alt={""}/>
                                                <p className="text-white text-sm ml-2">
                                                    USD/BTC
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">
                                            <div className="flex flex-row items-center">
                                                <Image src={guy1} width={20} alt={""}/>
                                                <p className="text-white text-sm ml-2">
                                                    USD/BTC
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">
                                            <div className="flex flex-row items-center">
                                                <Image src={guy1} width={20} alt={""}/> 
                                                <p className="text-white text-sm ml-2">
                                                USD/BTC
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">
                                            <div className="flex flex-row items-center">
                                                <Image src={guy1} width={20} alt={""}/>
                                                <p className="text-white text-sm ml-2">
                                                USD/BTC
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-5 flex max-[900px]:flex-col min-[900px]:justify-between px-8 max-sm:px-3 ">
                        <div className="w-[48%] max-[900px]:w-full rounded-lg bg-white px-2 pb-2 pt-4">
                            <h3 className="text-black text-sm sm:text-base lg:text-lg">Sales Statistics</h3>
                            <StatisticsLineChat chartId= {"StatisticsLineChat"}/>
                        </div>
                        <div className="w-[48%] max-[900px]:w-full rounded-lg bg-white px-2 pb-2 pt-4 max-[900px]:mt-5">
                            <h3 className="text-black text-sm sm:text-base lg:text-lg">Customer by country</h3>
                            <StatisticsMapChart/>
                        </div>
                    </div>
                    <div className="mt-5 flex max-[900px]:flex-col min-[900px]:justify-between px-8 max-sm:px-3">
                        <div className="w-[30%] max-[900px]:w-full rounded-lg px-4 pb-6 pt-4 bg-[#1B1B1B]">
                            <h3 className="font-bold text-white text-[18px]">Sales Goal</h3>
                            <div className="flex flex-row items-center">
                                <h4 className="text-[18px] text-[#BCBBB9] font-medium">$100.00 / <span className="text-[#717171]">$150.00</span></h4>
                                <h4 className="text-[15px] ml-auto mr-0 text-[#717171]">Yearly target</h4>
                            </div>
                            <div className="w-full rounded-full h-[8px] bg-[#717171] mt-3">
                                <div className="w-[67%] bg-[#FBBF04] rounded-full h-[8px]"></div>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <Image src={growthSvg} alt={""}/>
                                <h3 className="text-[#BCBBB9] ml-2 text-[14px]">19% <span className="text-[#717171]">vs last year</span></h3>
                            </div>
                            <div className=" my-10 bg-[#252525] h-[1px] w-full"></div>
                            <h3 className="text-[18px] text-white font-bold">Brand Sales</h3>
                            <StatisticsDoghnut chartID = {"statisticsdoughnut"}/>
                        </div>
                        <div className="w-[68%] max-[900px]:w-full rounded-lg bg-white px-4 pb-2 pt-4 max-[900px]:mt-5">
                            <h3 className="text-lg text-black font-bold">Site Visitors</h3>
                            <StatisticsColumnChart chartId = {"statisticsSiteVistors"}/>
                        </div>
                    </div>
                    <div className="mt-3 px-8 max-lg:hidden">
                        <div className="py-4 px-5 flex flex-row items-center bg-[#FBBF04] rounded-md">
                            <h1 className="text-lg text-black font-medium">
                                See all the details of your monthly report here
                            </h1>
                            <button className="px-3 py-1 bg-[#252525] rounded-md text-center
                                text-white ml-auto mr-0">See detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}