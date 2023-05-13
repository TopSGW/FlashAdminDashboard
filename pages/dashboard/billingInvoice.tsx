import HeaderV from "../../components/Header"
import DashboardBillingInvoice from "../../components/BillingInvoice"
export default function BillingInvoice(){
    return(
        <div>
            <HeaderV/>
            <main>
                <DashboardBillingInvoice/>
                <div className=" w-screen h-[100vh] z-[-1] bg-[#141414] fixed"></div>
            </main>
        </div>
    )

}