'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import SelectProductPopup from '../PopUp/SelectProductPopup';
import NewGifting from './NewGifting';
import SubmitButton from '../SubmitButton';
import CancelButton from '../CancelButton';
import '../../app/globals.css'
import { useRouter } from 'next/navigation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const NewCombo = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Draft');
  const [type, setType] = useState('Combo');
  const [originalPrice, setOriginalPrice] = useState('');
  const [comboPrice,setComboPrice ] = useState('');
  const [description,setDescription ] = useState('');
  const [startDate,setStartDate ] = useState('');
  const [endDate, setEndDate ] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [productGroups, setProductGroups] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<{ [key: number]: string }>({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [item, setItem] = useState('')
  const router = useRouter();


  const handleOpenPopup = () => setIsPopupOpen(true);

  const handleClosePopup = () => setIsPopupOpen(false);

  const handleSelectProducts = (selectedItems: any[]) => {
    setProductGroups((prevGroups) => [...prevGroups, selectedItems]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your submission logic here
  };


  return (
    <div className='mb-4'>
    {/* -------------------------------Header--------------------------- */}
    <div className="w-full p-2 bg-custom-bg fixed top-0 z-50">
      <ul className="flex items-center h-full">
        <li className="flex items-center px-4">
          <button>
            <ArrowBackIosIcon
              onClick={() => router.push('/combo')}
              className="object-contain text-header-bg my-4"
            />
          </button>
        </li>
        <li className="flex items-center">
          <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
            Combo & Gifting
          </h1>
        </li>
      </ul>
    </div>
    {/* -------------------------------Header--------------------------- */}
  
    {/* -----------------------------Breadcrumbs-------------------------- */}
    <div className="w-full p-4 border-b flex items-start mt-[70px]"> {/* Adjust margin to prevent overlap */}
      <ul className="text-[1rem] font-sfPro font-medium text-gray-500">
        <li className="flex items-center px-2">
          <span className="mr-2  cursor-pointer" onClick={() => router.push('/combo')}>
            Combo & Gifting
          </span>
          <span className="mx-2">/</span>
          <span className="ml-2 text-header-bg">New</span>
        </li>
      </ul>
    </div>
    {/* -----------------------------Breadcrumbs-------------------------- */}

<div className='p-4'>
<form onSubmit={handleSubmit}> 

{/* ---------------------------------Title---------------------------- */}
<div className='mb-8'> {/* Increased margin */}
        <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-2 border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
          placeholder='Insert title'
        />
      </div>
{/* ---------------------------------Title---------------------------- */}

{/* ---------------------------Status--------------------------------- */}
<div className='mb-8'>
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

{/* ---------------------------Type------------------------------- */}

<div className='mb-8'>
        <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold pb-4'>Type</label>
        <div className='flex space-x-12'> {/* Increased space */}
          <label className='flex items-center space-x-4 text-[1rem] font-sfPro'> {/* Increased font size */}
            <input
              type='radio'
              value='Combo'
              checked={type === 'Combo'}
              onChange={(e) => setType(e.target.value)}
              className='accent-gray-500  w-6 h-6'
            />
            <span>Combo</span>
          </label>
          <label className='flex items-center space-x-4 text-[1rem] font-sfPro'> {/* Increased font size */}
            <input
              type='radio'
              value='Gifting'
              checked={type === 'Gifting'}
              onChange={(e) => setType(e.target.value)}
              className='accent-gray-500  w-6 h-6'
            />
            <span>Gifting</span>
          </label>
        </div>
      </div>
{/* ---------------------------Type------------------------------- */}

{type === 'Combo'&&(
  <>
  {/* ---------------------Original Price--------------------- */}
  <div className='mb-8'>
    <label className='
    block text-[1rem] text-gray-500 
    font-sfPro font-semibold'>
    Original Price</label>

    <input
          type='text'
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          className='
          mt-2 border border-gray-300 
          rounded-lg p-4 w-full 
          text-[1rem] font-sfPro font-normal 
          placeholder-gray-300 
          focus:border-header-bg focus:outline-none'
          placeholder='Insert original price' />
  </div>
  {/* ---------------------Original Price--------------------- */}

{/* ----------------------Combo Price-------------------------- */}
<div className='mb-8'>
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>Combo Price</label>
  <input type='text'
         value={comboPrice}
         onChange={(e) => setComboPrice(e.target.value)}
         className='
         mt-2 border border-gray-300
         rounded-lg p-4 w-full 
         text-[1rem] font-sfPro font-normal 
         placeholder-gray-300 
         focus:border-header-bg focus:outline-none'
         placeholder='Insert combo price'/>
</div>
{/* ----------------------Combo Price-------------------------- */}
{/* -----------------------Product Description------------------- */}
<div className='mb-8'>
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>Product Description</label>
    <input type='text'
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           className='
           mt-2 border border-gray-300 
           rounded-lg p-4 w-full 
           text-[1rem] font-sfPro font-normal 
           placeholder-gray-300 
           focus:border-header-bg focus:outline-none'
           placeholder='Insert product description' />
</div>
{/* -------------------------Product Description--------------------- */}
{/* --------------------Combo Product Image Link ---------------------*/}
<div className='mb-8'>
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>
              Combo Product Image Link
    <span className='text-red-500'> (Image Source) </span>
  </label>
    <input type='text'
           value={imageLink}
           onChange={(e) => setImageLink(e.target.value)}
           className='
           mt-2 border border-gray-300 
           rounded-lg p-4 w-full 
           text-[1rem] text-gray-500 font-thin
         placeholder-gray-300 
         focus:border-header-bg focus:outline-none'
           placeholder='Insert combo image link'/>
</div>
{/* --------------------Combo Product Image Link ---------------------*/}
{/* ---------------------------Schedule------------------------------ */}
<div className='mb-4'>
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>Schedule</label>
    <div className='flex space-x-8 pt-2'> {/* Increased space */}
      <input type='date'
             value={startDate}
             onChange={(e) => setStartDate(e.target.value)}
             className='
             border border-gray-300 
             rounded-lg p-4 w-full 
             text-gray-500 font-sfPro text-[1rem] 
             focus:border-header-bg focus:outline-none'
             placeholder='Start date'/>
      <input type='date'
             value={endDate}
             onChange={(e) => setEndDate(e.target.value)}
             className='
             border border-gray-300 
             rounded-lg p-4 w-full 
             text-gray-500 font-sfPro text-[1rem] 
             focus:border-header-bg focus:outline-none'
             placeholder='End date'/>
   </div>
</div>
{/* ---------------------------Schedule------------------------------ */}
{/* -----------------------Add Product Group------------------------- */}
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
          className="absolute right-2 text-gray-500 text-2xl"
        >
          &times;
        </button>
        {/* Product Table */}
        <table className="bg-gray-50 rounded-lg w-full mt-4  ">
        <thead >
            <tr >
            <th colSpan={2} className='text-left border-b border-gray-300 px-4 py-2 font-sfPro font-semibold text-gray-500 '>
            Group {index + 1} 
              </th>
              
            </tr>
          </thead>
          <tbody>
            {group.map((item: any) => (
              <tr key={item.title}>
                <td className="flex items-start font-sfPro font-normal text-gray-500 px-4 py-4">
                  {item.title}
                </td>
                <td className="font-sfPro text-gray-500 px-4 text-right py-4">
                  {item.price !== undefined && item.stocks !== undefined ? (
                    <>
                      <span>{item.price}</span> <br />
                      Stocks: {item.stocks}
                    </>
                  ) : (
                    'N/A'
                  )}
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
</>)}
{type  ==='Gifting'&&( 
<>
<NewGifting/>

</>)}






</form></div>
{/*button*/}
<div className="flex justify-center space-x-2 ">
 <CancelButton/> <SubmitButton />  
 </div>
</div>
  )
}

export default NewCombo
