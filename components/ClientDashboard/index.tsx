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

import TableItem from "./tableItem";
import HeaderA from "../Header/HeaderA";
import Sidebar from "../Sidebar/Sidebar";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setorders } from "../../utils/slice/ordersSlice";
import { Pagination } from "@mui/material";
export default function Client(){
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setorders(2));
    },[dispatch])    
    return(
        <div className="w-auto m-0 p-0">
            <HeaderA/>
            <div className=" flex flex-rwo w-full pt-[70px] ">
                <Sidebar/>
                <div className="w-full bg-black pb-10 pl-[300px] max-lg:pl-0">
                    <div className="pt-5 px-5">
                        <h1 className="text-white text-lg font-bold leading-3">
                            Client History
                        </h1>
                        <p className="mt-2 text-[#717171] text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </p>
                    </div>
                    <div className="mt-4 border-t-[1px] border-[#717171] border-solid"></div>
                    <div className="mt-7 px-5">
                        <div className="p-4 flex flex-row items-center bg-[#252525] rounded-md">
                            <button className="px-3 py-5 bg-[#FBBF04] rounded-md text-center">
                                The most recent invoices
                            </button>
                            <button className="ml-4 px-3 py-5 text-[#717171] rounded-md text-center border-2 border-solid border-[#717171]">
                                Last Client 
                            </button>
                        </div>
                    </div>
                    <div className="pt-5 px-5 mt-4">
                        <table className="mt-4 w-full">
                            <thead>
                                <tr className="">
                                    <th className="py-2 text-white">
                                        Client name
                                    </th>
                                    <th className="py-2 text-white max-md:hidden">
                                        Issued date
                                    </th>
                                    <th className="py-2 text-white max-md:hidden">
                                        Due Date
                                    </th>
                                    <th className="py-2 text-white max-sm:hidden">
                                        Amount
                                    </th>
                                    <th className="py-2 text-white max-sm:hidden">
                                        Pair
                                    </th>
                                    <th className="py-2 text-white">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                                <TableItem/>
                            </tbody>
                        </table>
                        <div className="w-full flex justify-end pr-[10%]">
                            <Pagination count={6} color="secondary" shape="rounded"/>
                        </div>
                    </div>                                        
                </div>
            </div>            
        </div>
    )
}