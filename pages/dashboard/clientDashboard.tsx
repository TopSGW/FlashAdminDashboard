import HeaderV from "../../components/Header"
import DashboardClient from "../../components/ClientDashboard"
export default function clientDashboard(){
    return(
        <div>
            <HeaderV/>
            <main>
                <DashboardClient/>
            </main>
        </div>
    )
}