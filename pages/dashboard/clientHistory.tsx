import HeaderV from "../../components/Header"
import ClientHistory from "components/ClientHistroy"
export default function clientDashboard(){
    return(
        <div>
            <HeaderV/>
            <main>
                <ClientHistory/>
            </main>
        </div>
    )
}