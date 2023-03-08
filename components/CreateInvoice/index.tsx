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

  const Linedata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Statistics",
        data: [39, 56, 75, 51, 54, 76],
        fill: true,
        tension: 0.4,
        borderColor: "#742774",
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
      }
    ]
  };
  const Doughtnutdata = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

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
export const Bardata = {
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
export default function CreateInvoice(){
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
            <div className=" flex flex-row w-full">
                <div className="w-[250px] bg-[#1B1B1B] max-lg:hidden">
                    <div className="flex flex-col">
                        <SidebarItem Imgurl={materialsymbol} section={"OverView"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={statics} section={"Statistics"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={clientDashboard} section={"Client Dashboard"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={billingInvoice} section={"Billing & Invoices"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={allTransaction} section={"All Transactions"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={createInvoice} section={"Create Invoice"} color={"#FBBF04"}/>
                        <SidebarItem Imgurl={notification} section={"Notification"} color={"#1B1B1B"}/>
                        <SidebarItem Imgurl={supportEmail} section={"Support Email"} color={"#1B1B1B"}/>
                    </div>
                    <div className=" mt-72 w-full">
                        <button className="py-2 flex flex-row justify-center items-center 
                            w-[180px] mx-auto rounded-md bg-[#252525]" onClick={()=>router.push('/')}>
                            <Image src={loginImg} width={14} alt={""}/>
                            <p className="text-[#BCBBB9] text-sm ml-2">
                                Log Out
                            </p>
                        </button>
                    </div>
                </div>
                <div className="w-full bg-black pb-10">
                    <div className="pt-5 px-5">
                        <h1 className="text-white text-lg font-bold leading-3">
                            Statistics
                        </h1>
                        <p className="mt-2 text-[#717171] text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </p>
                    </div>
                    <div className="mt-4 border-t-[1px] border-[#717171] border-solid"></div>
                    <div className="mt-5 flex max-md:flex-col max-md:justify-center md:justify-between px-4">
                        <div className="w-[48%] max-md:w-full rounded-md bg-[#1B1B1B] p-3">
                            <Line data={Linedata}/>
                        </div>
                        <div className="w-[48%] max-md:w-full max-md:mt-4 rounded-md bg-[#1B1B1B] p-3">
                            <Line data={Linedata}/>
                        </div>
                    </div>
                    <div className="mt-4 flex md:justify-between max-md:flex-col max-md:justify-center px-4">
                        <div className="w-[30%] max-md:w-full rounded-md bg-[#1B1B1B] p-3">
                            <Doughnut data={Doughtnutdata}/>
                        </div>
                        <div className="w-[55%] max-md:w-full max-md:mt-4 rounded-md bg-[#1B1B1B] p-3">
                            <Bar options={Itemoption} data={Bardata}/>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    )
}