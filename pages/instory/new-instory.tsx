'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageCard from './ImageCard'; // Ensure the path is correct
import SubmitButton from '../SubmitButton';
import CancelButton from '../CancelButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
        

const NewInstory = () => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [status, setStatus] = useState('Draft');
    const router = useRouter();

  return (
    <div>
        
        {/* Header Section */}
    <div className="w-full p-2 bg-custom-bg fixed top-0 z-50 ">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-4">
            <button> 
        <ArrowBackIosIcon
        onClick={() => router.push('/discount')}
          className="object-contain text-header-bg my-4"
        /></button>
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
              Instory
            </h1>
          </li>
        </ul>
      </div>
      {/* ------------------------------------------------------------ */}

{/* -----------------------------Breadcrumbs-------------------------- */}
<div className="w-full p-4 border-b flex items-start mt-[70px]">
    <ul className="text-[1rem] font-sfPro font-medium text-gray-500"> {/* Increased font size */}
      <li className="flex items-center px-2">
        <span className="mr-2 underline cursor-pointer" onClick={() => router.push('/instory')} >Instory</span>
        <span className="mx-2">/</span>
        <span className="ml-2 text-header-bg">New</span>
      </li>
    </ul>
  </div>
{/* -----------------------------Breadcrumbs-------------------------- */}
      {/* ------------------------------------------------------------ */}
      <div className='m-4'>

    {/* Title */}
      <div>
        <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold mt-4">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-2 border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
          placeholder="Insert title"
        />
      </div>

{/* ---------------------------Status--------------------------------- */}
<div className='my-6'>
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold pb-4'>Status</label>
    <div className='flex space-x-12 '> {/* Increased space */}
      <label className='flex items-center space-x-4 text-[1rem] font-sfPro'> {/* Increased font size */}
        <input
              type='radio'
              value='Draft'
              checked={status === 'Draft'}
              onChange={(e) => setStatus(e.target.value)}
              className='accent-gray-500  w-6 h-6'
            />
          <span>Draft</span>
      </label>
      <label className='flex items-center space-x-4 text-[1rem] font-sfPro'> {/* Increased font size */}
        <input
              type='radio'
              value='Active'
              checked={status === 'Active'}
              onChange={(e) => setStatus(e.target.value)}
              className='accent-gray-500  w-6 h-6'
            />
          <span>Active</span>
      </label>
    </div>
</div>
{/* ---------------------------Status--------------------------------- */}

{/* ------------------------------------------------------------ */}

      {/* Live URL */}
      <div className='my-6'>
        <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
          Link
        </label>
        <input
          type="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="mt-1 border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none"
          placeholder="Insert link"
        />
      </div>

{/* ------------------------------------------------------------ */}

{/* Image Upload*/}


<div className='my-6 flex flex-col mb-2'>
<label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
          Image Upload
        </label>
<div className='flex justify-center '>
        <ImageCard  /></div>
</div>

{/*button*/}
<div className="flex justify-center space-x-2 ">
 <CancelButton/> <SubmitButton />  
 </div>







      </div>





    </div>
  )
}

export default NewInstory
