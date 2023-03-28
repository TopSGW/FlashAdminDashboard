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
import HeaderA from "../Header/HeaderA";

import totalSaleschart from '../assets/image/statistics/totalSaleschart.png';
import totalProfitchart from '../assets/image/statistics/totalProfitchart.png';
import totalOrderchart from '../assets/image/statistics/totalOrderchart.png';
import guy1 from '../assets/image/guys/guy1.png';

import TableItem from "./tableItem";

import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setorders } from "../../utils/slice/ordersSlice";
import { Pagination } from "@mui/material";
export default function BillingInvoice(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setorders(3));
    },[dispatch])    
    return(
        <div className="w-auto m-0 p-0">
            <HeaderA/>
            <div className=" flex flex-rwo w-full pt-[70px]">
                <Sidebar/>
                <div className="w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0">
                    <div className="pt-5 px-5">
                        <h1 className="text-white text-lg font-bold leading-3">
                            Billing & Invoices
                        </h1>
                        <p className="mt-2 text-[#717171] text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </p>
                    </div>
                    <div className="mt-4 border-t-[1px] border-[#717171] border-solid"></div>
                    <div className="pt-5 px-5 mt-4">
                        <div className="flex flex-row items-start">
                            <p className="text-white text-base font-sans border-b-[1px] border-solid
                            border-[#FBBF04]">
                                Open Invoices
                            </p>
                            <p className="text-white text-base font-sans ml-4">
                                Past Invoices
                            </p>
                            <p className="text-white text-base font-sans ml-4">
                                All Invoices
                            </p>
                        </div>
                        <table className="mt-4 w-full">
                            <thead>
                                <tr className="bg-[#1B1B1B] rounded-md">
                                    <th className="py-2 rounded-l-md pl-2">
                                        <div className="rounded-md border-[1px] border-solid border-white w-4 h-4"></div>
                                    </th>
                                    <th className="py-2 text-white">
                                        Invoice ID
                                    </th>
                                    <th className="py-2 text-white max-md:hidden">
                                        Start Date
                                    </th>
                                    <th className="py-2 text-white max-md:hidden">
                                        End Date
                                    </th>
                                    <th className="py-2 text-white max-sm:hidden">
                                        Total Shifts
                                    </th>
                                    <th className="py-2 text-white max-sm:hidden">
                                        Invoice Amount
                                    </th>
                                    <th className="py-2 text-white">
                                        Status
                                    </th>
                                    <th className="py-2 text-white max-sm:hidden">
                                        Status
                                    </th>
                                    <th className="py-2 text-white max-sm:hidden">
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
                        <div className="mt-4 w-full flex justify-end pr-[10%]">
                            <Pagination count={6} color="secondary" shape="rounded"/>
                        </div>
                    </div>                                        
                </div>
            </div>            
        </div>
    )
}