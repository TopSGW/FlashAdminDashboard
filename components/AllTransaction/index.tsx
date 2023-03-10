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
import arrowRight from '../assets/image/allTransaction/arrowRight.png';
import arrowUp from '../assets/image/allTransaction/arrowUp.png';

import totalSaleschart from '../assets/image/statistics/totalSaleschart.png';
import totalProfitchart from '../assets/image/statistics/totalProfitchart.png';
import totalOrderchart from '../assets/image/statistics/totalOrderchart.png';
import guy1 from '../assets/image/guys/guy1.png';
import { useRouter } from "next/router";
import TableItem from "./tableItem";
import TransactionItem from "./TransactionItem";
import HeaderA from "../Header/HeaderA";
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
import Sidebar from "../Sidebar/Sidebar";
export default function AllTransactions(){
    const router = useRouter();
    return(
        <div className="w-auto m-0 p-0">
            <HeaderA/>
            <div className=" flex flex-row w-full pt-[70px]">
                <Sidebar/>
                <div className=" w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0">
                    <div className="pt-5 px-5">
                        <h1 className="text-white text-lg font-bold leading-3">
                            Dashboard
                        </h1>
                        <p className="mt-2 text-[#717171] text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </p>
                    </div>
                    <div className="mt-4 border-t-[1px] border-[#717171] border-solid"></div>

                    <div className="pt-5 px-5 mt-4">
                        <div className="w-full flex max-md:flex-col max-md:justify-center  md:justify-between">
                            <div className="w-[58%] max-md:w-full bg-[#1B1B1B] rounded-md">
                                <Bar options={Itemoption} data={data}/>
                            </div>
                            <div className="w-[40%] max-md:w-full max-md:mt-3 bg-[#252525] rounded-md">
                                <div className="px-3 pt-3">
                                    <h1 className="text-[#BCBBB9] text-base font-bold">
                                        Categories of Buying
                                    </h1>
                                    <div className="mt-4 flex flex-row">
                                        <div className="w-[20%] py-2 bg-[#3578F7]"></div>
                                        <div className="w-[10%] py-2 bg-[#78C9F9]"></div>
                                        <div className="w-[35%] py-2 bg-[#020f0f]"></div>
                                        <div className="w-[25%] py-2 bg-[#AA57E8]"></div>
                                    </div>
                                    <div className="mt-5 flex flex-wrap items-center">
                                        <div className="m-2">
                                            <div className="flex flex-row items-start">
                                                <div className="bg-[#3578F7] w-[10px] h-[10px] rounded-full mt-1"></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-[#BCBBB9] mr-auto ml-2">Cash</p>
                                                    <p className="text-sm mt-2 text-[#BCBBB9] mr-auto ml-2">20%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-2">
                                            <div className="flex flex-row items-start">
                                                <div className="bg-[#78C9F9] w-[10px] h-[10px] rounded-full mt-1"></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-[#BCBBB9] mr-auto ml-2">Credit Card</p>
                                                    <p className="text-sm mt-2 text-[#BCBBB9] mr-auto ml-2">10%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-2">
                                            <div className="flex flex-row items-start">
                                                <div className="bg-[#020f0f] w-[10px] h-[10px] rounded-full mt-1"></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-[#BCBBB9] mr-auto ml-2">Crypto</p>
                                                    <p className="text-sm mt-2 text-[#BCBBB9] mr-auto ml-2">35%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-2">
                                            <div className="flex flex-row items-start">
                                                <div className="bg-[#AA57E8] w-[10px] h-[10px] rounded-full mt-1"></div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-[#BCBBB9] mr-auto ml-2">Bank Transfer</p>
                                                    <p className="text-sm mt-2 text-[#BCBBB9] mr-auto ml-2">25%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-full flex max-md:flex-col md:justify-between">
                            <div className="w-[58%] max-md:w-full bg-[#1B1B1B] rounded-md px-3 pt-4">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-white text-lg">Assets</h1>
                                    <div>
                                        <button className="border-[2px] border-solid border-gray-600 rounded-md
                                            flex flex-row px-4 py-1 items-center">
                                                <p className="text-sm text-[#717171]">View All</p>
                                                <Image src={arrowRight} alt={""} className="ml-auto mr-0"/>
                                            </button>
                                    </div>
                                </div>
                                <table className="mt-3 w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-white py-2 text-left">Account Name</th>
                                            <th className="text-white py-2 text-left max-sm:hidden">Change</th>
                                            <th className="text-white py-2 text-center max-sm:hidden">Cost</th>
                                            <th className="text-white py-2 text-right">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableItem/>
                                        <TableItem/>
                                    </tbody>
                                </table>
                                <table className="mt-1 w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-white py-2 text-left">Stock</th>
                                            <th className="text-white py-2 text-left max-sm:hidden">Change</th>
                                            <th className="text-white py-2 text-center max-sm:hidden">Cost</th>
                                            <th className="text-white py-2 text-right">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableItem/>
                                        <TableItem/>
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-[40%] max-md:w-full max-md:mt-3 px-3 pt-4 rounded-md bg-[#1B1B1B] pb-2">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-white text-lg">Transactions</h1>
                                    <div>
                                        <button className="border-[2px] border-solid border-gray-600 rounded-md
                                            flex flex-row px-4 py-1 items-center">
                                                <p className="text-sm text-[#717171]">View All</p>
                                                <Image src={arrowRight} alt={""} className="ml-auto mr-0"/>
                                            </button>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-row items-center">
                                    <div className="flex justify-center items-center py-1 w-[40px] rounded-md bg-[#55BA68]/[.2]">
                                        <Image src={arrowUp} width={24} alt={""}/>
                                    </div>
                                    <div className="ml-12 flex flex-col">
                                        <p className=" text-base text-[#55BA68]">+$500.00</p>
                                        <p className="text-[#717171] text-sm">USDT/France (EURO)</p>
                                    </div>
                                    <div className="ml-auto mr-0 flex flex-col">
                                        <p className=" text-xs text-[#717171]">3 Jan</p>
                                        <p className="text-[#717171] text-xs">10:53</p>
                                    </div>
                                </div>                                
                                <TransactionItem/>
                                <TransactionItem/>
                                <TransactionItem/>
                                <TransactionItem/>
                                <TransactionItem/>                                    
                            </div>
                        </div>
                    </div>                                        
                </div>
            </div> 
        </div>
    )
}