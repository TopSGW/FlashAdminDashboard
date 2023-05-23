import Image from "next/image"
import arrowRight from '../assets/image/allTransaction/arrowRight.png';
import arrowUp from '../assets/image/allTransaction/arrowUp.png';
import btnUpsvg from '../assets/image/allTransaction/Up.svg'
import TableItem from "./tableItem";
import TransactionItem from "./TransactionItem";
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

import { useDispatch } from "react-redux";
import { setAllTransaction_orderview } from "@utils/slice/allTransactionSlice";
import { setAllTransaction_profitview } from "@utils/slice/allTransactionSlice";

export default function AllTransaction_MainPart(){
    const dispatch = useDispatch()
    return(
        <div>
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
                <div className="w-[58%] max-md:w-full bg-[#1B1B1B] rounded-md p-4">
                    <div className="flex sm:flex-row sm:justify-between px-2 mt-4 max-sm:flex-col">
                        <h3 className="text-base text-[#717171]">Total Net Worth</h3>
                        <div className="max-sm:mt-2">
                            <button className="flex flex-row items-center px-4 py-2 rounded-md" style={{background: "rgba(85, 186, 104, 0.2)"}}>
                                <Image src={btnUpsvg} alt={""}/>
                                <h3 className="ml-2 text-sm text-[#55BA68]">+652.45 (0.18%)</h3>
                            </button>
                        </div>
                    </div>
                    <div className="mt-1 flex flex-row items-start">
                        <h3 className="text-[#717171] text-base">$</h3>
                        <h3 className="text-white text-2xl font-bold">728,510</h3>
                    </div>
                    <div className="flex flex-row items-center mt-4 max-sm:hidden">
                        <button className="px-3 py-1 bg-[#141414] ml-4 text-[#717171] rounded-md">Live</button>
                        <button className="px-3 py-1 bg-[#141414] ml-4 text-[#717171] rounded-md">1 Week</button>
                        <button className="px-3 py-1 bg-[#141414] ml-4 text-[#717171] rounded-md">1 Month</button>
                        <button className="px-3 py-1 bg-[#141414] ml-4 text-[#717171] rounded-md">1 Year</button>
                        <button className="px-3 py-1 bg-[#141414] ml-4 text-[#717171] rounded-md">All</button>
                    </div>
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
                        <h1 className="text-white text-lg">Last orders</h1>
                        <div>
                            <button className="border-[2px] border-solid border-gray-600 rounded-md
                                flex flex-row px-4 py-1 items-center" onClick={()=>dispatch(setAllTransaction_orderview())}>
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
                            <TableItem/>
                            <TableItem/>
                            <TableItem/>
                        </tbody>
                    </table>
                </div>
                <div className="w-[40%] max-md:w-full max-md:mt-3 px-3 pt-4 rounded-md bg-[#1B1B1B] pb-2">
                    <div className="flex justify-between items-center">
                        <h1 className="text-white text-lg">All last Profits</h1>
                        <div>
                            <button className="border-[2px] border-solid border-gray-600 rounded-md
                                flex flex-row px-4 py-1 items-center" onClick={()=>dispatch(setAllTransaction_profitview())}>
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
    )
}