/** @format */
import OverViewPart from "./overviewIndex"
import OverViewAffiliatorPart from "./overviewAffiliatorIndex"
import { useSelector } from "react-redux"
import { OverviewAffiliator_State } from "@utils/slice/overviewAffiliator"
export default function Overview(){
	const modeState = useSelector(OverviewAffiliator_State)
	return(
		<>
			{modeState ? <OverViewAffiliatorPart/> : <OverViewPart/>}
		</>
	)
}