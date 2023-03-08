import Image from "next/image"
import arrowUp from '../assets/image/allTransaction/arrowUp.png';
export default function TransactionItem(){
    return(
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
    )
}