'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WalletIcon from '@mui/icons-material/Wallet';
import ChatMessages from './view-live/ChatMessages';
import SelectProductPopup from '@/pages/PopUp/SelectProductPopup';
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/navigation';
import '../../app/globals.css'
import NavBar from '../Navbar';
const ViewLive = () => {

  const router = useRouter();
  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');
  const [comment, setComment] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [productGroups, setProductGroups] = useState<any[]>([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [selectedIndex, setSelectedIndex] = useState(-1); 
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
  const handleCheckboxChange = (index: React.SetStateAction<number>) => {
    // If the clicked checkbox is already selected, unselect it
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index); // Set the selected checkbox index
    }
  };

  return (
    <div className="pb-40">
      <NavBar
      />
{/* -------------------------------Header--------------------------- */}
<div className="w-full p-2 bg-custom-bg ">
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
<div className="w-full p-4 border-b flex items-start">
    <ul className="text-[1rem] font-sfPro font-medium text-gray-500"> {/* Increased font size */}
      <li className="flex items-center px-2">
        <span className="mr-2 underline cursor-pointer" onClick={() => router.push('/live')} >Live</span>
        <span className="mx-2">/</span>
        <span className="ml-2 text-header-bg">View</span>
      </li>
    </ul>
  </div>
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
    <div className='flex flex-wrap justify-center gap-4'>
      <div className='flex flex-col items-center'>
        <span className='text-center font-bold text-[2.1rem] text-[#6F191F] tracking-[0.5rem]'>2</span>
        <p className='font-medium text-center text-gray-500 text-[1rem]'>Hours</p>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-center font-bold text-[2.1rem] text-[#6F191F]'>15</span>
        <p className='font-medium text-center text-gray-500 text-[1rem]'>Minutes</p>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-center font-bold text-[2.1rem] text-[#6F191F]'>30</span>
        <p className='font-medium text-center text-gray-500 text-[1rem]'>Seconds</p>
      </div>
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



</div></div>
  )
}

export default ViewLive
