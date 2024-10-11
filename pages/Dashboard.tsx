import React from 'react';
import NavBar from './Navbar';
import Image from 'next/image';

const Dashboard = () => {
  return (
    /* Header */
    <div className='pb-[6rem]'>
      <NavBar />
 {/* -------------------------------Header--------------------------- */}
      <div className="w-full p-2 bg-custom-bg">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-2">
            <Image
              src="/dashboard.png"
              alt="dashboard"
              className="object-contain border-4"
              width={50}
              height={50}
            />
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">Dashboard</h1>
          </li>
        </ul>
      </div>
      
      {/* --------------------------Content------------------------ */}
      <div className='p-5 flex justify-center '> 
        <div className='grid grid-rows-6 gap-4 w-[80%] font-sfPro'>
          {/* Active Discounts */}
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
           <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/discounts.png" 
            alt="Active Discounts" 
            width={50} height={50} className=''/></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] font-sfPro
               font-bold">28</h2>
              <p className="text-gray-600">Active Discounts</p>
            </div>
          </div>

          {/* Active Combo */}
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/combo1.png" alt="Active Combo" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] font-sfPro
               font-bold">4</h2>
              <p className="text-gray-600">Active Combo</p>
            </div>
          </div>

          {/* Active Gifting */}
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/giftt1.png" alt="Active Gifting" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] font-sfPro
               font-bold">3</h2>
              <p className="text-gray-600">Active Gifting</p>
            </div>
          </div>

          {/* Active Add-ons */}
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/addons1.png" alt="Active Add-ons" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] font-sfPro
               font-bold">5</h2>
              <p className="text-gray-600">Active Add-ons</p>
            </div>
          </div>

          {/* Instory Category */}
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-3'> 
             <Image src="/instagram-stories.png" alt="Instory Category" width={40} height={40} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] font-sfPro
               font-bold">3</h2>
              <p className="text-gray-600">Instory Category</p>
            </div>
          </div>

          {/* Active Live */}
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'>  <Image src="/live.png" alt="Active Live" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] font-sfPro
               font-bold">1</h2>
              <p className="text-gray-600">Active Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
