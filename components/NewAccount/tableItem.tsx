
export default function tableItem(props:any){
    return(
        <tr>
        <td className="text-[#717171] mt-2 text-base py-2 text-left">
            <p className="text-base text-white max-sm:text-sm">Apple</p>
            <p className="text-sm max-sm:text-xs">Apple</p>
        </td>
        <td className="text-[#717171] mt-2 text-base py-2 text-left max-sm:text-sm">lh.ago</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-left max-sm:hidden ">$100.00</td>
        <td className="py-2">
            <div className="w-full flex justify-start">
                <button className={`w-[78px] px-3 py-1 bg-[${props.bgcolor}]/[.2] rounded-md text-[${props.txtcolor}] text-center text-sm
                     max-sm:hidden max-sm:text-center`}>
                    {props.section}
                </button>
            </div>
        </td>
    </tr>        
    )
}