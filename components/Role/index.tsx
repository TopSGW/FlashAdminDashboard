import HeaderA from "../Header/HeaderA";
import Sidebar from "../Sidebar/Sidebar";
import searchImg from '../assets/image/header/searchImg.png';
import plusImg from '../assets/image/role/plus.png';
import downloadImg from '../assets/image/role/download.png';
import dropdownImg from '../assets/image/role/dropdown.png';
import modalCloseImg from '../assets/image/role/modal_colose.png';
import Image from "next/image";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";
import CheckComponent from "./CheckComponent";

const style = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function Role(){
    const [checkedstate, setcheckedstate] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(

        <div className="w-auto m-0 p-0">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <div className="w-[80%] absolute top-[5%] mx-auto left-[10%]
                 bg-[#1B1B1B] p-5 rounded-md overflow-y-auto max-h-[90%]">
                    <div className="w-full">
                        <div className="flex flex-row items-center">
                            <p className="text-white text-lg font-bold">Invite Team Members</p>
                            <Image src={modalCloseImg} width={24} className="ml-auto mr-2 cursor-pointer" alt={""} onClick={()=>handleClose()}/>
                        </div>
                    </div>
                    <div className="mt-3 bg-[#1C1C1C] w-full flex md:justify-between max-md:flex-col relative">
                        <div className="w-[50%] max-md:w-full px-2 py-3">
                            <p className="text-[#BCBBB9] text-base">Select team member roles</p>
                            <div className="bg-[#161616] px-4 py-2 flex flex-row items-center rounded-lg
                                 border-[#717171] border-solid border-[1px] mt-2">
                                <Image src={searchImg} width={16} alt={"search"}/>
                                <input type="text" className="px-4 text-[#717171] text-sm bg-[#161616] rounded-sm
                                focus:outline-none font-medium placeholder:text-[#717171] placeholder:text-sm max-sm:w-full" placeholder="Search by role..."/>
                            </div>
                            <p className="text-[#BCBBB9] text-base mt-3">Select team member roles</p>
                            <div className="bg-[#161616] px-4 py-2 flex flex-row items-center rounded-lg
                                 border-[#717171] border-solid border-[1px] mt-2">
                                <Image src={searchImg} width={16} alt={"search"}/>
                                <input type="text" className="px-4 text-[#717171] text-sm bg-[#161616] rounded-sm
                                focus:outline-none font-medium placeholder:text-[#717171] placeholder:text-sm max-sm:w-full" placeholder="Search by role..."/>
                            </div>
                            <h1 className="my-3 text-[#BCBBB9] text-lg font-medium">Administrator Role</h1>
                            <div className="mt-3">
                                <CheckComponent section={"admin Now"}/>                                    
                            </div>
                            <div className="mt-2">
                                <CheckComponent section={"Administrator"}/>
                            </div>
                            <h1 className="my-3 text-[#BCBBB9] text-lg font-medium">Support Role</h1>
                            <div className="mt-2">
                                <CheckComponent section={"Help desk member"}/>
                            </div>
                            <h1 className="my-3 text-[#BCBBB9] text-lg font-medium">Developer Roles</h1>
                            <div className="mt-2">
                                <CheckComponent section={"Developer"}/>
                            </div>                            
                            <h1 className="my-3 text-[#BCBBB9] text-lg font-medium">Payment Roles</h1>
                            <div className="mt-2">
                                <CheckComponent section={"Analyst"}/>
                            </div>
                            <div className="mt-2">
                                <CheckComponent section={"Litigation Analyst"}/>
                            </div>                            
                            <div className="mt-2">
                                <CheckComponent section={"Refunds Analyst"}/>
                            </div>                                                        
                            <h1 className="my-3 text-[#BCBBB9] text-lg font-medium">Read Only Roles</h1>
                            <div className="mt-2">
                                <CheckComponent section={"Read Only"}/>
                            </div>                            

                        </div>
                        <div className="w-[50%] max-md:w-full max-md:mt-4 px-2 py-3">
                            <p className="text-[#BCBBB9] text-base">Role Description</p>
                            <textarea className="text-sm placeholder:text-[#717171] mt-4 rounded-md p-4 text-[#717171] focus:outline-none
                                placeholder:text-sm bg-[#161616] border-[2px] border-solid border-[#717171] w-full min-h-[300px]" 
                                placeholder="Search by role...">
                            </textarea>
                            <div className="md:bottom-12 flex flex-row items-center  max-md:w-full md:w-[50%] md:absolute">
                                <div className="ml-auto">
                                    <button className="flex justify-center items-center max-sm:h-[45px]
                                            bg-white rounded-md px-4 max-sm:px-3 py-3">
                                        <Image src={downloadImg} width={20} alt={""}/>
                                        <p className="ml-2 text-[#717171] text-sm 
                                            max-sm:hidden">Import</p>
                                    </button>
                                </div>
                                <div className="ml-2 mr-4">
                                    <button className="flex justify-center items-center
                                            bg-[#FBBF04] rounded-md px-4 py-3 max-sm:px-3" onClick={()=>handleOpen()}>
                                            <Image src={plusImg} width={20} alt={""}/>
                                            <p className="ml-2 text-black text-sm 
                                                max-sm:hidden">Send invitation</p>
                                    </button>
                                </div>                            
                            </div>
                        </div>
                    </div>
                 </div>
            </Modal>            
            <HeaderA/>
            <div className=" flex flex-row w-full pt-[70px]">
                <Sidebar/>
                <div className=" w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0">
                    <div className="pt-5 px-5">
                        <h1 className="text-white text-lg font-bold leading-3">
                            Roles
                        </h1>
                        <p className="mt-2 text-[#717171] text-sm">
                            You can choose a role for each other.
                        </p>
                    </div>
                    <div className="mt-4 border-t-[1px] border-[#717171] border-solid"></div>
                    <div className="pt-8 px-5">
                        <h1 className="text-white text-lg font-bold">
                            Two facetor authentications required for your team
                        </h1>
                        <p className="mt-2 text-white text-sm">
                            Lorem lpsum is simply dummy text of the printing and typesetting
                        </p>
                    </div>
                    <div className="px-5 pt-8 flex flex-row items-center">
                        <div className="max-sm:w-[55%]">
                            <div className="ml-5 max-sm:ml-0 px-4 py-2 bg-[#161616] flex flex-row items-center rounded-lg
                                 border-[#717171] border-solid border-[1px]">
                                <Image src={searchImg} width={16} alt={"search"}/>
                                <input type="text" className="pl-2 text-[#717171] text-sm bg-[#161616] rounded-sm
                                focus:outline-none font-medium placeholder:text-[#717171] placeholder:text-sm max-sm:w-full" placeholder="Search"/>
                            </div>                           
                        </div>
                        <div className="ml-auto mr-2 max-sm:mr-0">
                            <div className="flex flex-row items-center">
                                <div>
                                    <button className="flex justify-center items-center
                                         bg-white rounded-md px-4 max-sm:px-3 py-3">
                                        <Image src={downloadImg} width={20} alt={""}/>
                                        <p className="ml-2 text-[#717171] text-sm 
                                            max-sm:hidden">Import</p>
                                    </button>
                                </div>
                                <div className="ml-2">
                                    <button className="flex justify-center items-center
                                         bg-[#FBBF04] rounded-md px-4 py-3 max-sm:px-3" onClick={()=>handleOpen()}>
                                        <Image src={plusImg} width={20} alt={""}/>
                                        <p className="ml-2 text-black text-sm 
                                            max-sm:hidden">Add member</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pt-8 grid grid-cols-4 gap-0 max-md:grid-cols-3 max-sm:grid-cols-2">
                        <div className="">
                            <div className="flex items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg font-bold">Member</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm max-sm:text-xs font-bold">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>                      
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center rounded-l-lg bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-base max-sm:text-sm">Alaeddine Abu Saed</p>
                                <p className="text-[#717171] text-sm font-bold max-sm:text-xs">aladdine34@hotmai.com</p>
                            </div>

                        </div>
                        <div className="max-md:hidden">
                            <div className="flex items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg font-bold">Roles</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>    
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>    
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>    
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>    
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>    
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Read Only</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg">Administrator</p>
                                <p className="text-[#717171] text-sm font-bold">Owner</p>
                            </div>    
                        </div>
                        <div className="">
                            <div className="flex items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <p className="text-white text-lg font-bold">Authorisation</p>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        
                            <div className="mt-2 flex flex-col items-center bg-[#1B1B1B] h-[70px] pl-2 justify-center">
                                <button className="text-[#55BA68] text-sm rounded-full px-3 py-1 bg-[#202B22]
                                    ">Two Factor</button>
                            </div>                                                        

                        </div>
                        <div className="max-sm:hidden">
                            <div className="flex items-center bg-[#1B1B1B] h-[70px] pl-2 justify-start">
                                <p className="text-white text-lg font-bold">Last Connection</p>
                            </div>
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             
                            <div className="mt-2 flex flex-row items-center bg-[#1B1B1B] h-[70px] pl-2">
                                <p className="text-[#717171] text-sm font-bold">18 Jan 2022</p>
                                <Image src={dropdownImg} width={20} alt={""} className="ml-auto mr-2"/>
                            </div>                             

                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}