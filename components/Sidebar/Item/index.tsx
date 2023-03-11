import Image from "next/image"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import { setorders } from "../../../utils/slice/ordersSlice";
export default function Item(props:any){
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLink = () =>{
        switch (props?.section){
            case "OverView": router.push('/dashboard/overview'); dispatch(setorders(0)); break;
            case "Statistics": router.push('/dashboard/statistics'); dispatch(setorders(1)); break;
            case "Client Dashboard": router.push('/dashboard/clientDashboard');dispatch(setorders(2)); break;
            case "Billing & Invoices":router.push('/dashboard/billingInvoice');dispatch(setorders(3)); break;
            case "All Transactions":router.push('/dashboard/allTransaction');dispatch(setorders(4)); break;
            case "Create Invoice":router.push('/dashboard/createInvoice');dispatch(setorders(5)); break;
            case "Role":router.push('/dashboard/role');dispatch(setorders(6)); break;            
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