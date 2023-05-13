import Image from "next/image"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import { setorders } from "../../../utils/slice/ordersSlice";
export default function Item(props:any){
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLink = () =>{
        switch (props?.section){
            case "OverView": router.push('/dashboard/overview'); break;
            case "Statistics": router.push('/dashboard/statistics'); break;
            case "Client Dashboard": router.push('/dashboard/clientDashboard'); break;
            case "Billing & Invoices":router.push('/dashboard/billingInvoice'); break;
            case "All Transactions":router.push('/dashboard/allTransaction'); break;
            case "Create Invoice":router.push('/dashboard/createInvoice'); break;
            case "Role":router.push('/dashboard/role');break;
            case "New Account":router.push('/dashboard/newaccount');break;
            case "Notification":router.push('/dashboard/notification');break;
            case "Client History":router.push('/dashboard/clientHistory');break;            
        }
    }
    return(
        <div className={`flex flex-row pl-12 py-2 items-center 
        hover:bg-slate-400 cursor-pointer bg-[${props?.color}]`} onClick={()=>handleLink()}>
            <Image src={props?.Imgurl} width={22} alt={""}/>
            <p className="text-white text-base ml-2">{props?.section}</p>
        </div>
    )
}