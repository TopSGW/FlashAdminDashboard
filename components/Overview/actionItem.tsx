import Image from 'next/image';
import refundedImg from '../assets/image/overview/refunded.png';


export default function actionItem(props:any){
    return(
        <div className="rounded-md m-2 p-4 bg-[#252525] min-w-[120px]">
            <div className="w-full flex justify-center">
                <Image src={refundedImg} width={30} alt={""}/>
            </div>
            <div className="w-full flex justify-center">
                <h1 className="mt-2 text-white text-base">{props?.sectionName}</h1>
            </div>
        </div>    
    )
}