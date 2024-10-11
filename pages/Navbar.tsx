'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@fontsource/poppins';
import { useRouter } from 'next/navigation'



const NavBar: React.FC = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

   // This ensures that the component has mounted and the router is available
   useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render anything if the component is not mounted
  }


  return (
    <div className="bg-custom-bg shadow-lg p-2 fixed bottom-0 w-full grid grid-cols-6 gap-2 text-center">
      

      <div className="flex flex-col items-center">
      <button type="button" 
      onClick={() => router.push('/ ')} 
       className="flex flex-col items-center">
            <Image
              src="/dashboard.png"
              alt="dashboard"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className='mt-1 text-[0.7rem] text-gray-700 font-poppins'>Dashboard</p>
          </button>
      
      </div>
      
      {/* Add Ons */}
      <div className="flex flex-col items-center">
       
      <button type="button" 
      onClick={() => router.push('/addons')}
      className="flex flex-col items-center">
        <Image
          src='/addons1.png'
          alt='addon'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='mt-1 text-[0.7rem] text-gray-700 font-poppins'>Add-Ons</p></button>
      </div>
      
      {/* Combo */}
      <div className="flex flex-col items-center">
      <button type="button" 
      onClick={() => router.push('/combo')}
      className="flex flex-col items-center">

        <Image
          src='/combo1.png'
          alt='combo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='mt-1 text-[0.7rem] text-gray-700 font-poppins'>Combo</p></button>
      </div>
      
      {/* Discounts */}
      <div className="flex flex-col items-center">
      <button type="button" 
      onClick={() => router.push('/discounts/')}
      className="flex flex-col items-center">

        <Image
          src='/discounts.png'
          alt='discount'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='mt-1 text-[0.7rem] text-gray-700 font-poppins'>Discounts</p></button>
      </div>
      
      {/* Instory */}
      <div className="flex flex-col items-center ">
       <div className='mt-1'> 
       <button type="button" 
       onClick={() => router.push('/instory')}
       className="flex flex-col items-center">

        <Image
          src='/instagram-stories.png'
          alt='instory'
          width={25}
          height={25}
          className='object-contain '
        />
      
        <p className='mt-1 text-[0.7rem] text-gray-700 font-poppins'>Instory</p> </button></div>
      </div>
      {/* Live */}
      <div className="flex flex-col items-center">
      <button type="button" 
      onClick={() => router.push('/live')} 
      className="flex flex-col items-center">

        <Image
          src='/live.png'
          alt='live'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='mt-1 text-[0.7rem] text-gray-700 font-poppins'>Live</p></button>
      </div>
    </div>
  )
}

export default NavBar;
