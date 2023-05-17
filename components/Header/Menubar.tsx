import statics from '../assets/image/sidebar/statics.png';
import allTransaction from '../assets/image/sidebar/allTransaction.png';
import billingInvoice from '../assets/image/sidebar/billingInvoice.png';
import clientDashboard from '../assets/image/sidebar/clientDashboard.png';
import supportEmail from '../assets/image/sidebar/supportEmail.png';
import createInvoice from '../assets/image/sidebar/createInvoice.png';
import materialsymbol from '../assets/image/sidebar/material-symbols_dashboard.png';
import notification from '../assets/image/sidebar/notification.png';
import roleSvg from '../assets/image/sidebar/role.svg';
import newclientB from '../assets/image/sidebar/newclient.svg';
import newclientW from '../assets/image/sidebar/newclientW.svg'

import menubarcloseSvg from '../assets/image/header/menubarclose.svg'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectordersState } from '@utils/slice/ordersSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setmenubarState } from '@utils/slice/menubarSlice';

export default function Menubar(props:any){
    const order = useSelector(selectordersState)
    const router = useRouter()
    const dispatch = useDispatch()
    return(
        <div className="sm:hidden max-w-[330px] max-h-[500px] w-[330px] rounded-l-md bg-[#141414] px-4 pt-4 pb-10 absolute top-[71px] z-[99999]" 
            style={{right:`${props.visible == true ? '0px': '-330px'}`, boxShadow:'rgb(104 98 98 / 30%) -5px 0px 34px', transition: 'right 1s'}}>
            <Image src={menubarcloseSvg} alt="MenubarClose" onClick={()=>dispatch(setmenubarState(false))}/>
            <div className='flex flex-col w-full mt-4'>
                <div className={` cursor-pointer flex flex-row items-center pl-4 py-2 ${order[0] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=>router.push('/dashboard/overview')}>
                    <Image src={materialsymbol} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Overview</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[1] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/statistics')}>
                    <Image src={statics} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Statistics</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[3] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/billingInvoice')}>
                    <Image src={billingInvoice} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Billing & Invoices</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2`} onClick={()=> router.push('/dashboard/clientHistory')}>
                    <Image src={newclientW} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Client History</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[7] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/newaccount/1')}>
                    <Image src={newclientW} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>New Account</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[4] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/allTransaction')}>
                    <Image src={allTransaction} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>All Transactions</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[2] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=>router.push('/dashboard/clientDashboard')}>
                    <Image src={clientDashboard} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Client Dashboard</h3>
                </div>
                {/* <div className={`flex flex-row items-center pl-4 py-2 ${order[5] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/createInvoice')}>
                    <Image src={createInvoice} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Create Invoice</h3>
                </div> */}
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[6] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/role/1')}>
                    <Image src={roleSvg} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Role</h3>
                </div>
                <div className={`cursor-pointer flex flex-row items-center pl-4 py-2 ${order[8] ? 'bg-[#FBBF04]' : 'bg-[#141414]'}`} onClick={()=> router.push('/dashboard/notification')}>
                    <Image src={notification} alt="Overview"/>
                    <h3 className='ml-4 text-white text-[14px]'>Notification</h3>
                </div>
                
            </div>
        </div>
    )
}