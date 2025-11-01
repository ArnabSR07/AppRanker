import React from 'react'
import { SiTicktick } from "react-icons/si";
import { GiCancel } from "react-icons/gi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";


const AppsPending = () => {
  return (
    <div>
        <h2 className='font-bold text-white text-3xl mb-5'>Apps Pending (FIFO)</h2>
        <div className='flex items-center justify-center gap-5 mb-8'>
            <div className='w-full rounded-lg p-3 bg-green-900'>
                <div className='flex justify-between'>
                    <p className='text-gray-400'>Approved This Month</p>
                    <SiTicktick className='h-6 w-10 text-green-500'/>
                </div>
                <h4 className='text-3xl text-white font-bold'>3</h4>
            </div>
            <div className='w-full rounded-lg p-3 bg-red-950'>
                <div className='flex justify-between'>
                    <p className='text-gray-400'>Rejected This Month</p>
                    <GiCancel className='h-6 w-10 text-red-500'/>
                </div>
                <h4 className='text-3xl text-white font-bold'>1</h4>
            </div>
            <div className='w-full rounded-lg p-3 bg-yellow-900'>
                <div className='flex justify-between'>
                    <p className='text-gray-400'>Changes Requested</p>
                    <IoAlertCircleOutline className='h-6 w-10 text-yellow-500'/>
                </div>
                <h4 className='text-3xl text-white font-bold'>1</h4>
            </div>
            <div className='w-full rounded-lg p-3 bg-cyan-900'>
                <div className='flex justify-between'>
                    <p className='text-gray-400'>Total Submitted</p>
                    <IoCubeOutline className='h-6 w-10 text-cyan-500'/>
                </div>
                <h4 className='text-3xl text-white font-bold'>8</h4>
            </div>
        </div>

        <div className='bg-cyan-800 pb-5 rounded-xl'>
            <div className='flex justify-start items-center rounded-t-xl bg-cyan-700 py-3'>
                <h4 className='text-gray-300 text-center w-48'>APP NAME</h4>
                <h4 className='text-gray-300 text-center w-48'>VENDOR</h4>
                <h4 className='text-gray-300 text-center w-48'>SUBMITTED ON</h4>
                <h4 className='text-gray-300 text-end w-88'>ACTIONS</h4>
            </div>
            <div className='bg-cyan-950 flex justify-center items-center gap-8 py-2 px-5'>

                <input type="text" className='w-40 bg-cyan-800 rounded-md px-2 py-2 text-gray-400' placeholder='Filter by name...' />
                <input type="text" className='w-40 bg-cyan-800 rounded-md px-2 py-2 text-gray-400' placeholder='Filter by vendor...' />
                <input type="text" className='w-40 bg-cyan-800 rounded-md px-2 py-2 text-gray-400' placeholder='Filter by name...' />
                <h5 className='w-full text-gray-400 text-center'>3 results</h5>
            </div>

            <div className='flex flex-col gap-3'>

                <div className='flex items-center justify-start  gap-4 px-8'>
                    <h5 className='text-white font-bold w-44'>Design Studio</h5>
                    <p className='text-gray-300 w-44'>Creative Labs</p>
                    <p className='text-gray-300 w-44'>22 Oct, 2025</p>
                    <div className='flex items-center justify-center gap-5 ps-3 py-2'>
                        <div className='bg-blue-800 text-blue-300 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><FaRegEye className='h-4 w-5'/>View</div>
                        <div className='bg-green-800 text-green-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><TiTickOutline className='h-4 w-5'/>Approve</div>
                        <div className='bg-yellow-800 text-yellow-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><IoAlertCircleOutline className='h-4 w-5'/>Request Changes</div>
                        <div className='bg-red-800 text-red-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><GiCancel className='h-4 w-5'/>Reject</div>
                    </div>
                    
                </div>

                <div className='flex items-center justify-start  gap-4 px-8'>
                    <h5 className='text-white font-bold w-44'>SecureVault VPN</h5>
                    <p className='text-gray-300 w-44'>Privacy Solutions</p>
                    <p className='text-gray-300 w-44'>22 Oct, 2025</p>
                    <div className='flex items-center justify-center gap-5 ps-3 py-2'>
                        <div className='bg-blue-800 text-blue-300 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><FaRegEye className='h-4 w-5'/>View</div>
                        <div className='bg-green-800 text-green-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><TiTickOutline className='h-4 w-5'/>Approve</div>
                        <div className='bg-yellow-800 text-yellow-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><IoAlertCircleOutline className='h-4 w-5'/>Request Changes</div>
                        <div className='bg-red-800 text-red-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><GiCancel className='h-4 w-5'/>Reject</div>
                    </div>
                    
                </div>

                <div className='flex items-center justify-start  gap-4 px-8'>
                    <h5 className='text-white font-bold w-44'>TaskMaster Pro</h5>
                    <p className='text-gray-300 w-44'>Productivity Co.</p>
                    <p className='text-gray-300 w-44'>22 Oct, 2025</p>
                    <div className='flex items-center justify-center gap-5 ps-3 py-2'>
                        <div className='bg-blue-800 text-blue-300 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><FaRegEye className='h-4 w-5'/>View</div>
                        <div className='bg-green-800 text-green-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><TiTickOutline className='h-4 w-5'/>Approve</div>
                        <div className='bg-yellow-800 text-yellow-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><IoAlertCircleOutline className='h-4 w-5'/>Request Changes</div>
                        <div className='bg-red-800 text-red-500 flex justify-center items-center gap-2 rounded-full px-2 py-1 text-sm'><GiCancel className='h-4 w-5'/>Reject</div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default AppsPending