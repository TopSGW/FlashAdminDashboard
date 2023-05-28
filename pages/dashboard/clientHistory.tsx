import HeaderV from "../../components/Header"
import ClientHistory from "components/ClientHistroy"
export default function clientDashboard(){
    return(
        <div>
            <HeaderV/>
            <main>
                <ClientHistory/>
                <div className=" w-screen h-[100vh] z-[-1] bg-[#000] fixed"></div>
            </main>
        </div>
    )
}