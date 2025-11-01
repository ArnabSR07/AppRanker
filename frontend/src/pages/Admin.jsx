import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";
import { RiGalleryLine } from "react-icons/ri";
import { GrApps } from "react-icons/gr";
import { MdFindInPage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { GiTrophyCup } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaCodeCompare } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Dashboard from '../components/Dashboard';
import AppsPending from '../components/AppsPending';
import CompareApps from '../components/CompareApps';

const Admin = () => {

const [activeSection,setActiveSection] = useState(null);

const renderActiveSection = ()=>{
  switch(activeSection){
    case "Dashboard":
      return <Dashboard/>;
    case "AppsPending":
      return <AppsPending/>;
    case "CompareApps":
      return <CompareApps/>;
    default:
      return <></>;
  }
}


  return (
    <div>
    <div className='grid grid-cols-[250px_1fr] gap-2 h-[calc(100vh-8rem)]'>
        <div className='relative z-20  
          bg-cyan-950 py-10 px-5 
          overflow-y-auto 
          scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                <h3 className='text-gray-400'>MAIN</h3>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'onClick={()=>setActiveSection("Dashboard")}><RxDashboard/>Dashboard</p>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer' onClick={()=>setActiveSection("AppsPending")}><SiTicktick/>Apps Pending</p>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-3 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><RiGalleryLine/>Media Library Pro</p>
                </div>
                
               <div className='flex flex-col gap-2'>
                <h3 className='text-gray-400'>CONTENT</h3>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><GrApps/>Apps</p>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><MdFindInPage/>Pages</p>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-3 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><IoIosNotifications/>Notifications</p>
                </div>

                 <div className='flex flex-col gap-2'>
                <h3 className='text-gray-400'>COMMUNITY</h3>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><GrGroup/>Users</p>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><GiTrophyCup/>Gamification</p>
                </div>

                 <div className='flex flex-col gap-2'>
                <h3 className='text-gray-400'>BUSINESS</h3>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><FaSackDollar/>Financials</p>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'><RiCoupon3Fill/>Coupons</p>
                </div>

                 <div className='flex flex-col gap-2'>
                <h3 className='text-gray-400'>TOOLS</h3>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700 py-2 cursor-pointer'onClick={()=>setActiveSection("CompareApps")} ><FaCodeCompare/>Compare Apps</p>
                </div>

                <div className='flex flex-col gap-2'>
                <h3 className='text-gray-400'>SYSTEM</h3>
                <p className='text-gray-400 flex items-center justify-start gap-3 pe-5 ps-2 text-sm hover:text-white rounded-xl  hover:bg-cyan-700'><IoSearch/>SEO Tools</p>
                </div>
            </div>

        </div>
        
        <div className='relative z-20  
           px-5 
          overflow-y-auto 
          scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent'>
            {renderActiveSection()}
           
        </div>
    </div>
    </div>
  )
}

export default Admin