import { useState } from "react";


export default function CheckComponent(props:any){
    const [checkedstate, setcheckedstate] = useState(false);
    return(
        <div className="flex flex-row items-center">
            {
                !checkedstate ? <div className='w-[20px] h-[19px] border-[1px] rounded-sm border-solid border-[#BCBBB9]'
                onClick={()=>setcheckedstate(!checkedstate)}></div>
                : <input type="checkbox" className='w-[20px] h-[19px] accent-[#1B1B1B] border-2 
                border-solid border-[#BCBBB9]' onChange={()=>setcheckedstate(!checkedstate)} checked/>
            }
            <p className='text-[#BCBBB9] text-[0.875rem] ml-3'>{props?.section}</p>        
        </div>
    )
}