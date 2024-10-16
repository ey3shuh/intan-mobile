'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';
import SubmitButton from '../SubmitButton';
import CancelButton from '../CancelButton';
import SelectProductPopup from '../PopUp/SelectProductPopup';
import '../../app/globals.css'
import { useRouter } from 'next/navigation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
      

const NewLive = () => {
  
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
 
  const [comment, setComment] = useState('');
  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [productGroups, setProductGroups] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<{ [key: number]: string }>({});
  const [selectedIndex, setSelectedIndex] = useState(-1); 
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your submission logic here
  };
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleSelectProducts = (selectedItems: any[]) => {
    setProductGroups([...productGroups, selectedItems]);
  };

  const handleCheckboxChange = (index: React.SetStateAction<number>) => {
    // If the clicked checkbox is already selected, unselect it
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index); // Set the selected checkbox index
    }
  };

  return (
    <div className="w-full overflow-x-hidden mb-8">
      
{/* ---------------------------Header Section------------------------- */}
<div className="w-full p-2 bg-custom-bg fixed top-0 z-50">
    <ul className='flex items-center h-full'>
      <li className="flex items-center px-4">
      <button>
        <ArrowBackIosIcon
        onClick={() => router.push('/live')}
          className="object-contain text-header-bg my-4"
        /></button>
      </li>
      <li className="flex items-center">
        <h1 className='text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium'>Live</h1> 
      </li>
    </ul>
  </div>
{/* ---------------------------Header Section------------------------- */}

{/* -----------------------------Breadcrumbs-------------------------- */}
<div className="w-full p-4 border-b flex items-start mt-[70px]">
    <ul className="text-[1rem] font-sfPro font-medium text-gray-500"> {/* Increased font size */}
      <li className="flex items-center px-2">
        <span className="mr-2 underline cursor-pointer" onClick={() => router.push('/live')} >Live</span>
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

      {/* Date Input */}
      <input
        type="date"
        value={scheduleDate}
        onChange={(e) => setScheduleDate(e.target.value)}
        className='mt-2 border border-gray-300 rounded-lg 
        p-4 w-full text-[1rem] 
        font-sfPro font-normal 
        placeholder-gray-300 
        focus:border-header-bg focus:outline-none'
      />

      {/* Time Input */}
      <input
        type="time"
        value={scheduleTime}
        onChange={(e) => setScheduleTime(e.target.value)}
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
  <div className='px-4'>
    {productGroups.map((group, index) => (
      <div key={index} className="mb-4 relative">
        {/* Delete button in top-right */}
        <button
          onClick={() => {
            setProductGroups(prev => prev.filter((_, i) => i !== index));
            setSelectedTypes(prev => {
              const newState = { ...prev };
              delete newState[index];
              return newState;
            });
          }}
          className="absolute right-2 text-gray-500 text-2xl "
        >
          &times;
        </button>
        {/* Product Table */}
        <table className="bg-gray-50 text-[1rem] rounded-lg w-full  ">
        <thead className='border-b border-gray-300 ' >
        <tr className="text-[1rem] text-gray-500 font-semibold border-b
   ">
    <th className="text-left pb-2 pt-6 px-4 ">Products</th>
   
    <th className="text-left pb-2 pt-6 px-4  ">Pinned</th> 
      
    </tr>
          </thead>
          <tbody>
            {group.map((item: any, itemIndex: number) => (
              <tr key={item.title}>
                <td className="flex items-start font-sfPro font-normal text-gray-500 px-4 py-4">
                  {item.title}
                </td>
                <td>
                  <Checkbox
                    checked={selectedIndex === itemIndex}
                    onChange={() => handleCheckboxChange(itemIndex)}
                    sx={{
                      color: orange[800],
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 25,
                      },
                    }}
                    className='flex justify-center'
                  />
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
)}


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
