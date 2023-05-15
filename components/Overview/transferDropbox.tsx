import Image from "next/image"
import ArrowDownSvg from '../assets/image/overview/arrowdown.svg'
import WorldSvg from '../assets/image/overview/website1.svg'
import {useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

export default function TransferDropbox(){
    const [serviceState, SetserviceState] = useState(false)
    const [label, setlabel] = useState("Flash Transfer")
    const handleChange = (str:any) =>{
        setlabel(str)
        SetserviceState(false)
    }
    return(
        <OutsideClickHandler onOutsideClick={()=>SetserviceState(false)}>
            <div className=" relative">
                <button className='flex flex-row items-center rounded-md border-solid border-[#1B1B1B] border-[1px] px-4 py-2 
                active:bg-[#333533] relative' onClick={()=> SetserviceState(!serviceState)}>
                    <Image src={WorldSvg} alt={""}/>
                    <p className='ml-2 text-base text-[#717171]'>{label}</p>
                    <Image src={ArrowDownSvg} alt={""} className='ml-2'/>
                </button>
                <div className='absolute w-full px-3 py-2 flex flex-col items-start bg-[#fff] top-[42px] left-0'
                        style={{display:`${serviceState == false ? 'none' : 'flex'}`, boxShadow:"rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px"}}>
                            <div className="pl-2 w-full active:bg-[#f1f1f1]" onClick={()=>handleChange("Flash Transfer")}>
                                <p className='text-base py-2 hover:text-blue-400 cursor-pointer active:bg-[#f1f1f1]' >Flash Transfer</p>
                            </div>
                            <div className="pl-2 w-full active:bg-[#f1f1f1]" onClick={()=>handleChange("Flash affiliator")}>
                                <p className='text-base py-2 hover:text-blue-400 cursor-pointer active:bg-[#f1f1f1]' >Flash Transfer</p>
                            </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}