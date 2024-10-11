'use client';
import React  , {useState} from 'react'
import Image from 'next/image'

import ImageCard from './ImageCard';
import SubmitButton from '../../src/api/components/SubmitButton';
import CancelButton from '../../src/api/components/CancelButton';


const NewInstory = () => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [status, setStatus] = useState('Draft');

  return (
    <div>
        
        {/* Header Section */}
    <div className="w-full p-2 bg-custom-bg">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-4">
            <Image
              src="/instagram-stories.png"
              alt="live"
              width={40}
              height={40}
              className="object-contain bg-custom-bg my-2"
            />
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
              Instory
            </h1>
          </li>
        </ul>
      </div>
      {/* ------------------------------------------------------------ */}

      {/* Breadcrumbs */}
      <div className="w-full p-3 border-b flex items-start">
        <ul className="text-[1rem] font-sfPro font-medium text-gray-500">
          <li className="text-[1rem] font-sfPro font-medium text-gray-500 flex items-center px-2">
            <span className="mr-2">Instory</span>
            <span className="mx-2">/</span>
            <span className="ml-2 text-header-bg">New</span>
          </li>
        </ul>
      </div>
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