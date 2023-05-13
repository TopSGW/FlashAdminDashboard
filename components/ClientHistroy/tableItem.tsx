
export default function tableItem(props:any){
    return(
    <tr className="">
        <td className="text-[#717171] mt-2 text-base py-2 text-center">
            <p className="text-base text-white">Apple</p>
            <p className="text-sm">Apple</p>
        </td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-md:hidden">1h ago</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-md:hidden">1h ago</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-sm:hidden">$200.00</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-sm:hidden">Euro/usdt</td>
        <td className="py-2">
            <div className="w-full flex justify-center">
                <button className={`px-3 py-2 rounded-md
                    text-[${props.color}] text-center text-sm w-[90px]`} style={{backgroundColor:`${props.bgcolor}`}}>
                    {props.text}
                </button>
            </div>
        </td>
    </tr>    
    )
}