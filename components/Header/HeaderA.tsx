import Image from "next/image"
import logo from '../assets/logo/logo.png';
import searchImg from '../assets/image/header/searchImg.png';
import chevronDown from '../assets/image/header/chevron-down.png';
import man1 from '../assets/image/header/man1.png';
import notification from '../assets/image/sidebar/notification.png';
import menu from '../assets/image/sidebar/menu.png';
import { useRouter } from "next/router";
export default function HeaderA(){
    const router = useRouter()
    return(
        <div className="px-4 flex flex-row items-center w-full h-[70px] bg-[#1B1B1B]
        fixed">
        <div className="">
            <div className="flex flex-row items-center">
                <Image src={logo} width={30} alt="Logo"/>
                <p className="text-white text-[1em] ml-2 font-medium">
                    Flash Admin
                </p>
            </div>
        </div>
        <div className="ml-32 px-4 py-2 bg-[#161616] flex flex-row items-center rounded-lg
             max-lg:hidden">
            <Image src={searchImg} width={19} alt={"search"}/>
            <input type="text" className="pl-2 text-[#717171] text-base bg-[#161616] rounded-sm
                 focus:outline-none font-medium placeholder:text-[#717171]" placeholder="Search"/>
        </div>
        <div className="mx-auto max-lg:hidden">
            <div className="flex flex-row items-center">
                <h1 className="text-white text-lg font-bold">Flash Transfer</h1>
                <Image src={chevronDown} width={25} alt={"Chevdown"} className="ml-1 mt-2"/>
            </div>
        </div>
        <div className=" max-lg:ml-auto mr-2 max-sm:hidden cursor-pointer" onClick={()=>router.push('/dashboard/setting')}>
            <div className="flex flex-row items-center">
                <Image src={man1} width={25} alt={"man"}/>
                <p className="text-[#717171] text-sm ml-1">
                    Jenny Willson
                </p>
            </div>
        </div>
        <div className=" ml-auto mr-2 sm:hidden">
            <div className="flex flex-row items-center">
                <Image src={notification} width={18} alt={""}/>
                <Image src={menu} width={18} className="ml-2" alt={""}/>
            </div>
        </div>
    </div>    
    )
}