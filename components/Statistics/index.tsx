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
export default function Statistics(){
    const router = useRouter();
    return(
        <div className="w-auto m-0 p-0">
            <div className="px-4 flex flex-row items-center w-full h-[70px] bg-[#1B1B1B]">
                <div className="">
                    <div className="flex flex-row items-center">
                        <Image src={logo} width={30} alt="Logo"/>
                        <p className="text-white text-[1em] ml-2 font-medium">
                            Flash Affiliate
                        </p>
                    </div>
                </div>
                <div className="ml-32 px-4 py-2 bg-[#161616] flex flex-row items-center rounded-lg
                     max-lg:hidden">
                    <Image src={searchImg} width={19} alt={"search"}/>
                    <input type="text" className="pl-2 text-[#717171] text-base bg-[#161616] rounded-sm
                         focus:outline-none font-medium placeholder:text-[#717171]" placeholder="Search"/>
                </div>
                <div className="mx-auto max-lg:hidden">
                    <div className="flex flex-row items-center">
                        <h1 className="text-white text-lg font-bold">Flash Transfer</h1>
                        <Image src={chevronDown} width={25} alt={"Chevdown"} className="ml-1 mt-2"/>
                    </div>
                </div>
                <div className=" max-lg:ml-auto mr-2 max-sm:hidden">
                    <div className="flex flex-row items-center">
                        <Image src={man1} width={25} alt={"man"}/>
                        <p className="text-[#717171] text-sm ml-1">
                            Jenny Willson
                        </p>
                    </div>
                </div>
                <div className=" ml-auto mr-2 sm:hidden">
                    <div className="flex flex-row items-center">
                        <Image src={notification} width={18} alt={""}/>
                        <Image src={menu} width={18} className="ml-2" alt={""}/>
                    </div>
                </div>
            </div>
            <div className=" flex flex-rwo w-full">
                <div className="w-[250px] bg-[#1B1B1B] max-lg:hidden">
                    <div className="flex flex-col">
                        <SidebarItem Imgurl={materialsymbol} section={"OverView"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={statics} section={"Statistics"} color={"#FBBF04"}/>
                        <SidebarItem Imgurl={clientDashboard} section={"Client Dashboard"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={billingInvoice} section={"Billing & Invoices"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={allTransaction} section={"All Transactions"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={createInvoice} section={"Create Invoice"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={notification} section={"Notification"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={supportEmail} section={"Support Email"} color={"#1B1B1B"}/>
                    </div>
                    <div className=" mt-72 w-full">
                        <button className="py-2 flex flex-row justify-center items-center 
                            w-[180px] mx-auto rounded-md bg-[#252525]" onClick={()=> router.push('/')}>
                            <Image src={loginImg} width={14} alt={""}/>
                            <p className="text-[#BCBBB9] text-sm ml-2">
                                Log Out
                            </p>
                        </button>
                    </div>
                </div>
                <div className="w-full bg-black pb-10">
                    <div className="pt-10 px-8 flex justify-between items-center max-sm:px-3">
                        <h1 className="text-white text-2xl font-bold leading-3">
                            Statistics
                        </h1>
                        <div className="max-sm:hidden">
                            <div className="flex flex-row items-center">
                                <input type="date" className="px-3 py-2 border-solid border-gray-500 border-2
                                     bg-slate-500 rounded-md"/>        
                                <button className="px-4 py-3 ml-2 bg-[#252525] text-center text-white tet-base rounded-md">
                                    <p>Short</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex max-[1172px]:flex-wrap max-[1172px]:justify-center min-[1172px]:justify-between px-8 max-sm:px-3">
                        <div className="w-[32%] min-w-[296px] max-[1171px]:m-1 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]">
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
                        <div className="w-[32%] min-w-[296px] max-[1171px]:m-1 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]">
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
                        <div className="w-[32%] min-w-[296px] max-[1171px]:m-1 rounded-md p-4 max-[1085px]:p-3 bg-[#1B1B1B]">
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
                                <h1 className="text-white font-bold text-lg">Total Products</h1>
                                <Image src={baselineMore} width={20} alt={""}/>
                            </div>
                            <table className="mt-1 w-full">
                                <thead>
                                    <tr>
                                        <th className="py-2 text-[#717171] text-left">
                                            Product
                                        </th>
                                        <th className="py-2 text-[#717171] text-left max-sm:hidden">
                                            ID
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
                                                    Airpods Gen 3
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm max-sm:hidden">
                                            #1223
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
                                                    Airpods Gen 3
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm max-sm:hidden">
                                            #1223
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
                                                    Airpods Gen 3
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm max-sm:hidden">
                                            #1223
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
                                                    Airpods Gen 3
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm max-sm:hidden">
                                            #1223
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
                                                    Airpods Gen 3
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm max-sm:hidden">
                                            #1223
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
                                                    Airpods Gen 3
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-2 text-white text-sm max-sm:hidden">
                                            #1223
                                        </td>
                                        <td className="py-2 text-white text-sm text-right">
                                            1,602
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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