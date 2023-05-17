import { useSelector } from "react-redux"
import { StatiSticsAffiliator_State } from "@utils/slice/overviewAffiliator"
import TransferIndex from "./TransferIndex"
import StatisticsAffiliatorIndex from "./Affiliator"
export default function Statistics(){
    const modeState = useSelector(StatiSticsAffiliator_State)
    return(
        <>
            {modeState ? <StatisticsAffiliatorIndex/> : <TransferIndex/>}
        </>
    )
}