import HeaderA from "components/Header/HeaderA"
import Sidebar from "components/Sidebar/Sidebar"
import acceptSvg from '../assets/image/notification/accept.svg'
import rejectSvg from '../assets/image/notification/reject.svg'
import closeSvg from '../assets/image/notification/close.svg'
import Image from "next/image"

import { setorders } from "../../utils/slice/ordersSlice";
import { useDispatch } from "react-redux"
import { useEffect } from "react"
export default function Notification(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setorders(8));
    },[dispatch])    
    return(
        <div className="w-auto m-0 p-0">
            <HeaderA/>
            <div className="flex flex-row w-full pt-[70px]">
                <Sidebar/>
                <div className="w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0">
                    <div className="pt-5 px-16 max-lg:pl-5 max-sm:pl-4">
                        <h1 className="text-white sm:text-base lg:text-lg xl:text-xl font-bold leading-3">
                            Notification
                        </h1>
                    </div>
                    <div className="mt-4 border-t-[1px] border-[#717171] border-solid"></div>
                    <div className="mt-6 px-10 max-lg:px-6 max-sm:px-4">
                        <div className="px-3 pt-3 pb-5 rounded-lg bg-[#1B1B1B]">
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={acceptSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={rejectSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={acceptSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={rejectSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={acceptSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={rejectSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={acceptSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between w-full border-solid border-b-[1px] border-[#717171] pb-3">
                                <div>
                                    <div className="flex flex-row items-start">
                                        <div>
                                            <Image src={rejectSvg} alt="accpet"/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[12px] text-white ">Payment successfully </p>
                                            <p className="mt-1 text-[12px] text-white opacity-50">20 Hours ago</p>
                                            <p className="mt-1 text-[12px] text-white">Order No:45646874</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={closeSvg} alt="close"/>
                                </div>
                            </div>
                                                        
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}