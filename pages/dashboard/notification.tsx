import HeaderV from "../../components/Header"
import DashboardNotification from "../../components/Notification"
export default function Notification(){
    return(
        <div>
            <HeaderV/>
            <main>
                <DashboardNotification/>
                <div className=" w-screen h-[100vh] z-[-1] bg-[#141414] fixed"></div>
            </main>
        </div>
    )
}