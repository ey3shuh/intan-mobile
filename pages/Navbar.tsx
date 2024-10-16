'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@fontsource/poppins';
import { useRouter } from 'next/navigation';

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
<div className="bg-custom-bg shadow-lg p-2 fixed bottom-0 w-full grid grid-cols-6 gap-1 text-center z-50 place-items-center"> 
  {/* Ensuring navbar has a higher z-index */}
  
  {/* Dashboard */}
  <div className="flex flex-col items-center">
    <button type="button" onClick={() => router.push('/')} className="flex flex-col items-center">
      <Image src="/dashboard.png" alt="dashboard" width={27} height={27} className="object-contain" />
      <p className="mt-[0.4rem] text-[0.8rem] text-gray-700 font-sfPro ">Dashboard</p>
    </button>
  </div>

  {/* Add-ons */}
  <div className="flex flex-col items-center">
    <button type="button" onClick={() => router.push('/addons')} className="flex flex-col items-center">
      <Image src="/addons1.png" alt="addon" width={30} height={30} className="object-contain" />
      <p className="mt-1 text-[0.8rem] text-gray-700 font-sfPro ">Add-Ons</p>
    </button>
  </div>

  {/* Combo */}
  <div className="flex flex-col items-center">
    <button type="button" onClick={() => router.push('/combo')} className="flex flex-col items-center">
      <Image 
      src="/combo1.png" 
      alt="combo" 
      width={30} height={30} 
      className="object-contain" />
      <p className="mt-1 text-[0.8rem] text-gray-700 font-sfPro ">Combo</p>
    </button>
  </div>

  {/* Discounts */}
  <div className="flex flex-col items-center">
    <button type='button' onClick={() => router.push('/discount')} className="flex flex-col items-center"> 
        <Image
          src="/discounts.png"
          alt="discount"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="mt-1 text-[0.8rem] text-gray-700 font-sfPro">Discounts</p>
    </button>   
  </div>

  {/* Instory */}
  <div className="flex flex-col items-center">
    <button type="button" onClick={() => router.push('/instory')} className="flex flex-col items-center">
      <Image src="/instagram-stories.png" alt="instory" width={27} height={27} className="object-contain" />
      <p className="mt-[0.45rem] text-[0.8rem] text-gray-700 font-sfPro ">Instory</p>
    </button>
  </div>

  {/* Live */}
  <div className="flex flex-col items-center">
    <button type="button" onClick={() => router.push('/live')}>
      <Image src="/live.png" alt="live" width={30} height={30} className="object-contain" />
      <p className="mt-1 text-[0.8rem] text-gray-700 font-sfPro ">Live</p>
    </button>
  </div>
</div>


  )
};

export default NavBar;
