'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WalletIcon from '@mui/icons-material/Wallet';
import ChatMessages from './ChatMessages';
import SelectProductPopup from '@/pages/PopUp/SelectProductPopup';
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const ViewLive = () => {

  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');
  const [comment, setComment] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [productGroups, setProductGroups] = useState<any[]>([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    <div >
{/* -------------------------------Header--------------------------- */}
<div className="w-full p-2 bg-custom-bg">
 <ul className="flex items-center h-full">
    <li className="flex items-center px-2">
            <Image
              src="/live.png"
              alt="instory"
              className="object-contain border-4"
              width={50}
              height={50}
            />
    </li>
    <li className="flex items-center">
        <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">Live</h1>
    </li>
  </ul>
</div>
{/* -------------------------------Header--------------------------- */}
<div className='m-4'>
  <div className='text-[1.2rem] font-sfPro font-bold'>
[Live] Free Telekung Ambar on min spend of RM550
  </div>
  
{/* ------------------------------Total Size-------------------------- */}
  <div className='py-4'>
    <p className='text-[1.2rem] font-bold text-[#5E6366] pb-2'>Total Sales</p>
    <div className='border rounded-3xl p-8 font-sfPro'> 
      <p className=' text-center font-bold 
      text-[2.1rem] text-[#6F191F] '>RM3059.90</p>  
      <p className=' font-medium text-center text-gray-500 text-[1rem]'>Total Sales</p></div>
  </div>
{/* ------------------------------Total Size-------------------------- */}

{/* -------------------------------Duration--------------------------- */}
<div className='py-4'>
  <p className='text-[1.2rem] font-bold text-[#5E6366] pb-2'>Duration</p>
    <div className='border rounded-3xl p-8 font-sfPro'> 
     <div className='flex justify-center'>
        <span className=' text-center font-bold 
      text-[2.1rem] text-[#6F191F] tracking-[0.5rem] '>2:
      <p className='items-center font-medium text-center text-gray-500 text-[1rem] tracking-[0rem] pr-2'>Hours</p>
      </span>
        <span className=' text-center font-bold 
      text-[2.1rem] text-[#6F191F] '>15 : 
      <p className=' font-medium text-center text-gray-500 text-[1rem] tracking-[0rem] pl-2'>Minutes</p>
      </span>
        <span className=' text-center font-bold 
      text-[2.1rem] text-[#6F191F]  '> 30
      <p className=' font-medium text-center text-gray-500 text-[1rem] tracking-[0rem] pl-2'>Seconds</p></span> 
     </div>
    <div className='flex flex-cols-5 gap-4 justify-center items-center font-medium text-center text-gray-500 text-[1rem] '>
         
         

    </div>
   </div>
</div>
{/* -------------------------------Duration--------------------------- */}
         
{/* --------------------------Customer behaviour---------------------- */}
<div className='py-4'>
  <p className='text-[1.2rem] font-bold text-[#5E6366] pb-2'>Customer behaviour</p>
  <div className="flex justify-around items-center border rounded-3xl p-8">
    
  
    <div className="flex flex-col items-center">
      <span className="text-3xl text-[#6F191F]">
        
        <RemoveRedEyeIcon/> 
      </span>
      <p className="text-[2.1rem] font-sfPro font-bold text-[#6F191F]">285</p>
      <p className="text-gray-500 font-sfPro font-semibold">Viewers</p>
    </div>
    
   
    <div className="w-10 border-t-[2px] border-[#6F191F] mb-[70px]"></div>
    
  
    <div className="flex flex-col items-center">
      <span className="text-3xl text-[#6F191F]">
        
        <ShoppingCartIcon/>
      </span>
      <p className="text-[2.1rem] font-sfPro font-bold text-[#6F191F]">150</p>
      <p className="text-gray-500 font-sfPro font-semibold">Checking Out</p>
    </div>
    
    
    <div className="w-10 border-t-[2px] border-[#6F191F] mb-[70px]"></div>
    

    <div className="flex flex-col items-center">
      <span className="text-3xl text-[#6F191F]">
       
        <WalletIcon/> 
      </span>
      <p className="text-[2.1rem] font-sfPro font-bold text-[#6F191F]">90</p>
      <p className="text-gray-500 font-sfPro font-semibold">Purchased</p>
    </div>

  </div>

</div>
{/* --------------------------Customer behaviour---------------------- */}
<ChatMessages/>
{/* --------------------------Pinned Comment-------------------------- */}
<div className='py-4'>
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
         placeholder="Insert voucher description"
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



</div></div>
  )
}

export default ViewLive