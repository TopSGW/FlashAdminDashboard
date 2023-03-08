
export default function tableItem(){
    return(
        <tr className="">
        <td className="pl-2 py-2 mt-2 rounded-l-md">
            <div className="rounded-md border-[1px] border-solid border-white w-4 h-4"></div>
        </td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center">#14586578</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-md:hidden">05/02/2023</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-md:hidden">05/02/2023</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-sm:hidden">2 shifts</td>
        <td className="text-[#717171] mt-2 text-base py-2 text-center max-sm:hidden">$500.00</td>
        <td className="py-2">
            <div className="w-full flex justify-center">
                <button className="px-3 py-1 bg-[#55BA681A]/[.1] rounded-md
                    text-[#55BA68] text-center text-sm">
                    paid
                </button>
            </div>
        </td>
        <td className="py-2 max-sm:hidden">
            <div className="w-full flex justify-center">
                <button className="px-2 py-1 bg-[#1B1B1B] border-[1px] border-solid border-[#F86E51] rounded-md
                    text-[#F86E51] text-center text-sm">
                    Open dispute
                </button>
            </div>
        </td>
        <td className="py-2 max-sm:hidden">
            <div className="w-full flex justify-center">
                <button className="px-3 py-1 bg-[#FBBF04] rounded-md
                    text-[black] text-center text-sm">
                    pay
                </button>
            </div>
        </td>
    </tr>    
    )
}