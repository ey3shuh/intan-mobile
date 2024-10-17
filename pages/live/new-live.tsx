import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import SelectProductPopup from '../PopUp/SelectProductPopup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../../app/globals.css';

const NewLive = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [comment, setComment] = useState('');
  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [productGroups, setProductGroups] = useState<any[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleSelectProducts = (selectedItems: any[]) => {
    setProductGroups([...productGroups, selectedItems]);
  };

  const handleCheckboxChange = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      // Prepare the data to be saved
      const ssionData = {
        title,
        link,
        comment,
        code,
        desc,
        scheduleDate,
        scheduleTime,
        productGroups,
      };

      // Add a new document with a generated ID
      await addDoc(collection(db, 'ssions'), ssionData);

      // Handle success (e.g., show a success message, redirect, etc.)
      console.log('Live session saved successfully');
      // Reset the form fields if needed
      setTitle('');
      setLink('');
      setComment('');
      setCode('');
      setDesc('');
      setScheduleDate('');
      setScheduleTime('');
      setProductGroups([]);

    } catch (error) {
      console.error('Error saving live session:', error);
      // Handle the error (e.g., show an error message)
    }
  };


  return (
    <div className="w-full overflow-x-hidden mb-8">
      {/* Header Section */}
      <div className="w-full p-2 bg-custom-bg fixed top-0 z-50">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-4">
            <button>
              <ArrowBackIosIcon
                onClick={() => router.push('/live')}
                className="object-contain text-header-bg my-4"
              />
            </button>
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">
              Live
            </h1>
          </li>
        </ul>
      </div>
      {/* -----------------------------Breadcrumbs-------------------------- */}
<div className="w-full p-4 border-b flex items-start mt-[70px]">
    <ul className="text-[1rem] font-sfPro font-medium text-gray-500"> {/* Increased font size */}
      <li className="flex items-center px-2">
        <span className="mr-2  cursor-pointer" onClick={() => router.push('/live')} >Live</span>
        <span className="mx-2">/</span>
        <span className="ml-2 text-header-bg">New</span>
      </li>
    </ul>
  </div>
{/* -----------------------------Breadcrumbs-------------------------- */}

      {/* Form */}
      <div className="p-4  pb-60">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full text-[1rem] placeholder-gray-300 focus:border-header-bg focus:outline-none"
              placeholder="Insert title"
            />
          </div>

          {/* Schedule */}
          <div className="mb-6">
            <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
              Schedule
            </label>
            <input
              type="date"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full focus:border-header-bg focus:outline-none"
            />
            <input
              type="time"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full focus:border-header-bg focus:outline-none"
            />
          </div>

          {/* Live URL */}
          <div className="mb-6">
            <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
              Live URL
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full placeholder-gray-300 focus:border-header-bg focus:outline-none"
              placeholder="Insert link"
            />
          </div>

          {/* Pinned Comment */}
          <div className="mb-6">
            <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
              Pinned Comment
            </label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full placeholder-gray-300 focus:border-header-bg focus:outline-none"
              placeholder="Insert comment"
            />
          </div>

          {/* Voucher Code */}
          <div className="mb-6">
            <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
              Voucher Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full placeholder-gray-300 focus:border-header-bg focus:outline-none"
              placeholder="Insert voucher code"
            />
          </div>

          {/* Voucher Description */}
          <div className="mb-6">
            <label className="block text-[1rem] text-gray-500 font-sfPro font-semibold">
              Voucher Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="mt-2 border border-gray-300 rounded-lg p-4 w-full placeholder-gray-300 focus:border-header-bg focus:outline-none"
              placeholder="Insert voucher description"
            />
          </div>

          {/* Product Group Section */}
          <div className="text-[1.25rem] text-gray-700 font-sfPro font-semibold mt-4">
            Product
            <p className="text-[1rem] text-gray-500 font-sfPro font-normal mt-2">
              Add Group and Products
            </p>
          </div>
          <button
            type="button"
            onClick={handleOpenPopup}
            className="text-header-bg text-[1rem] font-sfPro font-semibold py-4"
          >
            + Add Product Group
          </button>

          {/* Display Product Groups */}
          {/* {productGroups.length > 0 && (
            <div className="px-4">
              {productGroups.map((group, index) => (
                <div key={index} className="mb-4 relative">
                  <button
                    onClick={() => {
                      setProductGroups(prev =>
                        prev.filter((_, i) => i !== index)
                      );
                    }}
                    className="absolute right-2 text-gray-500 text-2xl"
                  >
                    &times;
                  </button>
                  <table className="bg-gray-50 text-[1rem] rounded-lg w-full">
                    <thead className="border-b border-gray-300">
                      <tr className="text-[1rem] text-gray-500 font-semibold">
                        <th className="text-left pb-2 pt-6 px-4">Products</th>
                        <th className="text-left pb-2 pt-6 px-4">Pinned</th>
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
                              className="flex justify-center"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )} */}
           <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={() => router.push('/live')}
            className="border border-header-bg text-header-bg font-sfPro text-[1.1rem] px-6 py-1 w-45 inline-block hover:bg-red-200 rounded-full"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-full bg-header-bg font-sfPro text-[1.1rem] px-6 py-1 w-45 inline-block text-white hover:bg-header-bg"
          >
            Submit
          </button>
        </div>

          {/* Popup Component */}
          {/* <SelectProductPopup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            onSelect={handleSelectProducts}
          /> */}
        </form>
      </div>

      
    </div>
  );
};

export default NewLive;

