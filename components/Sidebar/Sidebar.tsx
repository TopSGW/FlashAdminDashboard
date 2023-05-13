import Image from 'next/image';
import statics from '../assets/image/sidebar/statics.png';
import allTransaction from '../assets/image/sidebar/allTransaction.png';
import billingInvoice from '../assets/image/sidebar/billingInvoice.png';
import clientDashboard from '../assets/image/sidebar/clientDashboard.png';
import supportEmail from '../assets/image/sidebar/supportEmail.png';
import createInvoice from '../assets/image/sidebar/createInvoice.png';
import materialsymbol from '../assets/image/sidebar/material-symbols_dashboard.png';
import notification from '../assets/image/sidebar/notification.png';
import loginImg from '../assets/image/sidebar/login.png';
import rolesidebarImg from '../assets/image/sidebar/rolesidebar.png';
import materialSvg from '../assets/image/sidebar/materialsymbol_dashboard.svg';
import createInvoiceSvg from '../assets/image/sidebar/createInvoice.svg';
import buillingInvoiceSvg from '../assets/image/sidebar/billingInvoice.svg'
import createDashboardSvg from '../assets/image/sidebar/createDashboard.svg';
import allTransactionSvg from '../assets/image/sidebar/allTransaction.svg';
import statisticsSvg from '../assets/image/sidebar/statistics.svg';
import roleSvg from '../assets/image/sidebar/role.svg';
import newclientB from '../assets/image/sidebar/newclient.svg';
import newclientW from '../assets/image/sidebar/newclientW.svg'


import SidebarItem from './Item';
import { useRouter } from 'next/router';
import { selectordersState } from '../../utils/slice/ordersSlice';
import { useSelector } from 'react-redux';
import { useLogout } from '@hooks/useAuth';
export default function Sidebar(){
    const router = useRouter();
    const orders = useSelector(selectordersState);
    const logout = useLogout();
    return(
        <div className="fixed w-[300px] bg-[#1B1B1B] max-lg:hidden h-full">
            <div className='relative w-full h-full'>
                <div className="flex flex-col">
                    <SidebarItem Imgurl={orders[0]? materialSvg: materialsymbol} section={"OverView"} color={orders[0]? "#FBBF04" : "#1B1B1B"}
                        />
                    <SidebarItem Imgurl={orders[1] ? statisticsSvg: statics} section={"Statistics"} color={orders[1]? "#FBBF04" : "#1B1B1B"} />
                    <SidebarItem Imgurl={orders[3] ? buillingInvoiceSvg : billingInvoice} section={"Billing & Invoices"} color={orders[3]? "#FBBF04" : "#1B1B1B"} />
                    <SidebarItem Imgurl={orders[9] ? newclientB : newclientW} section={"Client History"} color={orders[9]? "#FBBF04" : "#1B1B1B"}/>
                    <SidebarItem Imgurl={orders[7] ? newclientB : newclientW} section={"New Account"} color={orders[7]? "#FBBF04" : "#1B1B1B"}/>
                    <SidebarItem Imgurl={orders[4] ? allTransactionSvg : allTransaction} section={"All Transactions"} color={orders[4]? "#FBBF04" : "#1B1B1B"} />
                    <SidebarItem Imgurl={orders[2] ? createDashboardSvg : clientDashboard} section={"Client Dashboard"} color={orders[2]? "#FBBF04" : "#1B1B1B"} />
                    {/* <SidebarItem Imgurl={orders[5] ? createInvoiceSvg : createInvoice} section={"Create Invoice"} color={orders[5]? "#FBBF04" : "#1B1B1B"} /> */}
                    <SidebarItem Imgurl={orders[6] ? rolesidebarImg : roleSvg} section={"Role"} color={orders[6]? "#FBBF04" : "#1B1B1B"}/>
                    <SidebarItem Imgurl={notification} section={"Notification"} color={orders[8]? "#FBBF04" : "#1B1B1B"}/>
                    {/* <SidebarItem Imgurl={supportEmail} section={"Support Email"} color={"#1B1B1B"}/> */}
                </div>
                <div className=" absolute bottom-[100px] w-full">
                    <button className="py-2 flex flex-row justify-center items-center 
                        w-[180px] mx-auto rounded-md bg-[#252525]" onClick={()=>logout.mutate()}>
                        <Image src={loginImg} width={14} alt={""}/>
                        <p className="text-[#BCBBB9] text-sm ml-2">
                            Log Out
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )
}