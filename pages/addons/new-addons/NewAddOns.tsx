'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import DropDownAddOns from './DropDownAddOns';
import SelectProductPopup from '@/pages/PopUp/SelectProductPopup';
import CancelButton from '@/pages/CancelButton';
import SubmitButton from '@/pages/SubmitButton';


const NewAddOns = () => {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
      const [status, setStatus] = useState('Draft');
      const [productGroups, setProductGroups] = useState<any[]>([]);
      const [selectedTypes, setSelectedTypes] = useState<{ [key: number]: string }>({});
      const [isPopupOpen, setIsPopupOpen] = useState(false);
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
    <div>
{/*--------------------------- Header Section------------------------- */}
<div className="w-full p-2 bg-custom-bg">
    <ul className="flex items-center h-full">
        <li className="flex items-center px-4">
            <Image
              src="/addons1.png"
              alt="live"
              width={40}
              height={40}
              className="object-contain bg-custom-bg my-2"
            />
        </li>
        <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
              Add Ons
            </h1>
        </li>
    </ul>
</div>
{/*--------------------------- Header Section------------------------- */}

{/* ----------------------------Breadcrumbs--------------------------- */}
<div role="presentation" 
onClick={handleClick} 
className='font-sfPro text-[1rem] font-medium p-3 border-b'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Add Ons
        </Link>
        
        <Typography className='text-header-bg '>New</Typography>
      </Breadcrumbs>
    </div>
{/* ----------------------------Breadcrumbs--------------------------- */}
<div className='p-4'>
{/* ----------------------------DropDown--------------------------- */}

  <p className='text-[1rem] text-gray-500 font-sfPro font-semibold pb-2'> Select Add-On Product</p>
<DropDownAddOns/></div> 
{/* ----------------------------DropDown--------------------------- */}

{/* ----------------------------Radio--------------------------- */}
<div className='p-4'>
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
{/* ----------------------------Radio--------------------------- */}

{/* ----------------------------Add Product--------------------------- */}
<div className='p-4'>
<p className='text-[1rem]  text-gray-500 font-sfPro font-semibold pb-4'> Select Product</p>
<button type='button'
        onClick={handleOpenPopup} 
        className='
        text-header-bg text-[1rem] 
        font-sfPro font-semibold 
      '>
              + Add Product Group
</button>

</div>
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
    <th className="text-left p-4 ">Products</th>
      
      
    </tr>
          </thead>
          <tbody>
            {group.map((item: any) => (
              <tr key={item.title}>
                <td className="flex items-start font-sfPro font-normal text-gray-500 px-4 py-4">
                  {item.title}
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

<div className="flex justify-center  space-x-2 py-6">
 <CancelButton/> <SubmitButton />  
 </div>



   </div>
  )
}

export default NewAddOns