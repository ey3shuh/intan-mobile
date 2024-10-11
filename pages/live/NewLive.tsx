'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';
import SubmitButton from '../../src/api/components/SubmitButton';
import CancelButton from '../../src/api/components/CancelButton';
import SelectProductPopup from '../PopUp/SelectProductPopup';

const NewLive = () => {
  
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [schedule, setSchedule] = useState('');
  const [comment, setComment] = useState('');
  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [productGroups, setProductGroups] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<{ [key: number]: string }>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your submission logic here
  };
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleSelectProducts = (selectedItems: any[]) => {
    setProductGroups([...productGroups, selectedItems]);
  };
  return (
    <div className="w-full overflow-x-hidden mb-8">
{/* ---------------------------Header Section------------------------- */}
<div className="w-full p-2 bg-custom-bg">
    <ul className='flex items-center h-full'>
      <li className="flex items-center px-2">
            <Image
              src="/live.png"
              alt="live"
              width={50}
              height={50}
              className="object-contain bg-custom-bg"
            />
      </li>
      <li className="flex items-center">
        <h1 className='text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium'>Live</h1> 
      </li>
    </ul>
  </div>
{/* ---------------------------Header Section------------------------- */}

{/* -----------------------------Breadcrumbs-------------------------- */}
<div className="w-full p-4 border-b flex items-start">
    <ul className="text-[1rem] font-sfPro font-medium text-gray-500"> {/* Increased font size */}
      <li className="flex items-center px-2">
        <span className="mr-2">Live</span>
        <span className="mx-2">/</span>
        <span className="ml-2 text-header-bg">New</span>
      </li>
    </ul>
  </div>
{/* -----------------------------Breadcrumbs-------------------------- */}
<div className='p-4'>
<form onSubmit={handleSubmit}>

{/* ---------------------------------Title---------------------------- */}
<div className='mb-6'> {/* Increased margin */}
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>Title</label>
    <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-2 border border-gray-300 rounded-lg 
          p-4 w-full text-[1rem] 
          font-sfPro font-normal 
          placeholder-gray-300 
          focus:border-header-bg focus:outline-none'
          placeholder='Insert title'
        />
      </div>
{/* ---------------------------------Title---------------------------- */}

{/* -------------------------------Schedule----------------------------*/}
<div className='mb-6'>
      <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
          Schedule
        </label>
        <input
          type="date"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className='mt-2 border border-gray-300 rounded-lg 
          p-4 w-full text-[1rem] 
          font-sfPro font-normal 
          placeholder-gray-300 
          focus:border-header-bg focus:outline-none'
        />
</div>
{/* -------------------------------Schedule----------------------------*/}

{/* -------------------------------Live URL--------------------------- */}
<div className='mb-6'>
  <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
          Live URL
  </label>
  <input type="link"
         value={link}
         onChange={(e) => setLink(e.target.value)}
         className='mt-2 border border-gray-300 rounded-lg 
         p-4 w-full text-[1rem] 
         font-sfPro font-normal 
         placeholder-gray-300 
         focus:border-header-bg focus:outline-none'
          placeholder="Insert link"
        />
</div>
{/* -------------------------------Live URL--------------------------- */}

<h3 className='text-[1.2rem] text-gray-700
          font-sfPro font-semibold py-2'>On Screen Information </h3>

{/* --------------------------Pinned Comment-------------------------- */}
<div className='mb-6'>
  <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
          Pinned Comment
  </label>
  <input type="text"
         value={comment}
         onChange={(e) => setComment(e.target.value)}
         className="mt-2 border border-gray-300 rounded-lg 
         p-4 w-full text-[1rem] 
         font-sfPro font-normal 
         placeholder-gray-300 
         focus:border-header-bg focus:outline-none"
          placeholder="Insert comment"
        />
</div>
{/* --------------------------Pinned Comment-------------------------- */}

{/* ----------------------------Voucher Code---------------------------*/}
<div className='mb-6'>
  <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
          Voucher Code
  </label>
<input type="text"
       value={code}
       onChange={(e) => setCode(e.target.value)}
       className="mt-2 border border-gray-300 rounded-lg 
         p-4 w-full text-[1rem] 
         font-sfPro font-normal 
         placeholder-gray-300 
         focus:border-header-bg focus:outline-none"
       placeholder="Insert voucher code"
        />
      </div>
{/* ----------------------------Voucher Code---------------------------*/}

{/* ------------------------Voucher Description------------------------*/}
<div className='mb-6'>
  <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
        Voucher Description
  </label>
  <input type="text"
         value={desc}
         onChange={(e) => setDesc(e.target.value)}
         className="mt-2 border border-gray-300 rounded-lg 
         p-4 w-full text-[1rem] 
         font-sfPro font-normal 
         placeholder-gray-300 
         focus:border-header-bg focus:outline-none"
         placeholder="Insert voucher code"
  />
</div>
{/* ------------------------Voucher Description------------------------*/}
<div className='text-[1.25rem] text-gray-700 
font-sfPro font-semibold mt-4 '> 
  Product
  <p className='text-[1rem] text-gray-500 font-sfPro font-normal mt-2'>
    Add Group and Products</p>
</div>
<button type='button'
        onClick={handleOpenPopup} 
        className='
        text-header-bg text-[1rem] 
        font-sfPro font-semibold 
        py-4 '>
              + Add Product Group
</button>
{/* -----------------------Add Product Group------------------------- */}
{productGroups.length > 0 && (
        <div>
          {productGroups.map((group, index) => (
            <div key={index} className="mb-4 relative ">
              {/*---------------- Delete button in top-right---------------- */}
        
{/*---------------- Delete button in top-right---------------- */}
<table className="bg-gray-50 rounded-lg min-w-full  ">
  <thead>
    <tr className="text-[1rem] text-gray-500 font-semibold border-b
    pt-4">
    <th className="text-left px-4 py-2">Products</th>
      <th className="text-right px-4  py-2">Price/Stocks</th>
      <th className="text-right px-4 py-2">Pinned</th>
      
    </tr>
  </thead>
  <tbody>
    
  {group.map((item: any) => (
    <tr key={item.name}>
      <td className="flex items-start 
      font-sfPro font-normal 
      text-gray-500 
      px-4 py-4">{item.name}</td>
      <td className="font-sfPro 
      text-gray-500 px-4 text-right py-4">
          {item.price && item.discountedPrice ? (<>
            
            <span className="text-gray-500 ">{item.price}</span><br/>
                
                Stocks: {item.stocks}
              </>
            ) : (
              `${item.product} Products`
            )}
          </td>
          
<div className='flex justify-center'>
  <Checkbox
    {...label}
    defaultChecked
    sx={{
      color: orange[800],
      "&.Mui-checked": {
        color: orange[600],
      },
      "& .MuiSvgIcon-root": {
        fontSize: 25, // Adjust the size of the checkbox
      },
    }}
  />
</div>

    </tr>
  ))}
  </tbody>
  </table>
     
  </div>))}</div>)}
{/* Popup Component */}
<SelectProductPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSelect={handleSelectProducts}
      />



    </form></div>
    {/*button*/}
<div className="flex justify-center space-x-2 ">
 <CancelButton/> <SubmitButton />  
 </div>
    </div>
  );
};

export default NewLive;
