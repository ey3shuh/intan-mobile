'use client';
import React from 'react';
import NavBar from './Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const router = useRouter();

  return (
    /* Header */
    <div className='pb-[6rem]'>
      <NavBar/>
 {/* -------------------------------Header--------------------------- */}
 <div className="w-full p-2 bg-custom-bg fixed top-0  ">
    <ul className="flex items-center h-full">
        <li className="flex items-center px-4">
            <Image
              src="/dashboard.png"
              alt="dashboard"
              width={40}
              height={40}
              className="object-contain bg-custom-bg my-2"
            />
        </li>
        <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">Dashboard</h1>
          </li>
        </ul>
      </div>
      
      {/* --------------------------Content------------------------ */}
      <div className='p-5 flex justify-center pt-20 '> 
        <div className='grid grid-rows-3 gap-4 w-[80%] font-sfPro'>
          
          {/* Active Discounts */} 
          <button type='button' onClick={() => router.push('/discount')}>
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
           <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/discounts.png" 
            alt="Active Discounts" 
            width={50} height={50} className=''/></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] text-left font-sfPro
               font-bold">28</h2>
              <p className="text-gray-600">Active Discounts</p>
            </div>
          </div></button>

          {/* Active Combo */}
          <button type="button" onClick={() => router.push('/combo')}>
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/combo1.png" alt="Active Combo" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] text-left font-sfPro
               font-bold">4</h2>
              <p className="text-gray-600">Active Combo</p>
            </div>
          </div></button>

          {/* Active Gifting */}
          <button type="button" onClick={() => router.push('/combo')}>
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/giftt1.png" alt="Active Gifting" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] text-left font-sfPro
               font-bold">3</h2>
              <p className="text-gray-600">Active Gifting</p>
            </div>
          </div></button>

          {/* Active Add-ons */}
          <button type="button" onClick={() => router.push('/addons')}>
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'> 
            <Image src="/addons1.png" alt="Active Add-ons" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] text-left font-sfPro
               font-bold">5</h2>
              <p className="text-gray-600">Active Add-ons</p>
            </div>
          </div></button>

          {/* Instory Category */}
          <button type='button' onClick={() => router.push('/instory')}>
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-3'> 
             <Image src="/instagram-stories.png" alt="Instory Category" width={40} height={40} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] text-left font-sfPro
               font-bold">3</h2>
              <p className="text-gray-600">Instory Category</p>
            </div>
          </div></button>

          {/* Active Live */}
          <button type='button' onClick={() => router.push('/live')}>
          <div className='bg-[#F4F4F4] rounded-xl p-6 flex items-center'>
          <div className='bg-[#DFD5DA] rounded-full p-2'>  <Image src="/live.png" alt="Active Live" width={50} height={50} /></div>
            <div className='ml-6'>
              <h2 className="text-[2rem] text-left font-sfPro
               font-bold">1</h2>
              <p className="text-gray-600">Active Live</p>
            </div>
          </div></button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

