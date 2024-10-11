'use client';
import React,{useState} from 'react'
import ToggleDiscount from '../discount/ToggleDiscount';
import SelectProductPopup from '../PopUp/SelectProductPopup';


const NewGifting = () => {
    const [imageLink, setImageLink] = useState('');
    const [minSpend, setMinSpend] = useState('');
    const [discount, setDiscount] = useState('');
    const [productGroups, setProductGroups] = useState<any[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<{ [key: number]: string }>({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleOpenPopup = () => setIsPopupOpen(true);
  
    const handleClosePopup = () => setIsPopupOpen(false);
  
    const handleSelectProducts = (selectedItems: any[]) => {
      setProductGroups([...productGroups, selectedItems]);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Add your submission logic here
    };
  

  return (
    <div>
{/* ---------------------Combo Product Image Link ---------------------*/}
    <div className='mb-4'>
              <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>
                Combo Product Image Link
                <span className='text-red-500'> (Image Source) </span> </label>
              <input
                type='text'
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className='mt-2 border border-gray-300 rounded-lg p-4 w-full text-[1rem] text-gray-500 font-thin placeholder-gray-300 focus:border-header-bg focus:outline-none'
                placeholder='Insert combo image link'
              />
    </div>
{/* ---------------------Combo Product Image Link ---------------------*/}

{/*-------------------------- Discount Rule--------------------------- */}
        {/* Discount Rule */}
        <div className="text-[1.2rem] font-sfPro font-semibold text-gray-700 mb-2"> Discount Rule
</div>


<div className='flex flex-col-3 gap-2 justify-start'>
 
  {/* Minimum Spend Column */}
  <div className='flex flex-col gap-2'> {/* gap-1 for title and input */}
    <span className="text-[1rem] font-sfPro font-semibold text-gray-500">
      Buy
    </span>
    <input
      type='text'
      value={minSpend}
      onChange={(e) => setMinSpend(e.target.value)}
      className=' border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
      placeholder='Insert min spend'
    />
  </div>


  {/* Maximum Spend Column */}
  <div className='flex flex-col gap-2'> {/* gap-1 for title and input */}
    <span className="text-[1rem] font-sfPro font-semibold text-gray-500">
      Get
    </span>
    <input
      type='text'
      value={discount}
      onChange={(e) => setDiscount(e.target.value)}
      className=' border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
      placeholder='Insert discount'
    />
  </div>
  <div className='flex justify-end items-center pl-2 pt-7 '>
    <ToggleDiscount/>
  </div>
</div>
{/* -----------------------Add Product Group------------------------- */}
<div className='text-[1.25rem] text-gray-700 
font-sfPro font-semibold mt-4  '> 
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
      <div key={index} className="relative mb-4 border border-gray-300 rounded-lg"> {/* Add relative positioning here */}
        {/*---------------- Delete button in top-right---------------- */}
        <button
          onClick={() => {
            setProductGroups(prev => prev.filter((_, i) => i !== index));
            setSelectedTypes(prev => {
              const newState = { ...prev };
              delete newState[index];
              return newState;
            });
          }}
          className="absolute right-2 text-gray-500 text-2xl"  // Adjust position with absolute
        >
          &times;
        </button>
        {/*---------------- Delete button in top-right---------------- */}

{/*------------------------- Gifting Options---------------------------*/}
        {/*------------------------ Column 1-------------------------- */}
        <div className="grid grid-cols-3 p-4">
          {/* Column 1 */}
          <div className="">
            {["main", "accessories", "wrapping"].map(type => (
              <label key={type} className="flex items-center space-x-2 text-[0.5rem] text-gray-700 font-sfPro font-normal">
                <input
                  type="radio"
                  name={`productType_${index}`}
                  value={type}
                  checked={selectedTypes[index] === type}
                  onChange={(e) => {
                    setSelectedTypes(prev => ({ ...prev, [index]: e.target.value }));
                  }}
                  className="mb-2 accent-gray-500 w-5 h-5"
                />
                <span className="text-[0.9rem] mb-2 w-5 h-5 font-sfPro font-semibold text-gray-500">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </label>
            ))}
          </div>
        {/*------------------------ Column 1-------------------------- */}

        {/* ------------------------Column 2---------------------------*/}
          <div className='mx-4'>
            {["wishcard", "box", "embroidery"].map(type => (
              <label key={type} className="flex items-center space-x-2 text-[0.5rem] text-gray-700 font-sfPro font-normal">
                <input
                  type="radio"
                  name={`productTypeColumn2_${index}`}
                  value={type}
                  checked={selectedTypes[index] === type}
                  onChange={(e) => {
                    setSelectedTypes(prev => ({ ...prev, [index]: e.target.value }));
                  }}
                  className="mb-1 accent-gray-500 w-5 h-5"
                />
                <span className='text-[0.9rem] mb-2 w-5 h-5 font-sfPro font-semibold text-gray-500'>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </label>
            ))}
          </div>
         {/*----------------------Column 2-------------------------- */}
        </div>
{/*------------------------- Gifting Options---------------------------*/}

{/*---------------------------- Group Table-------------------------- */}
        <table className='bg-gray-50 rounded-lg  min-w-full '>
          <thead>
            <tr>
              <th colSpan={2} className='text-left border-b border-gray-300 px-4 py-2 font-sfPro font-semibold text-gray-500 
              '>
                Group {index + 1}
              </th>
            </tr>
          </thead>
          <tbody>
            {group.map((item: any) => (
              <tr key={item.name}>
                <td className='flex items-start font-sfPro font-normal text-gray-500 px-4 py-4'>
                  {item.name}
                </td>
                <td className='font-sfPro text-right text-gray-500 px-4 py-4'>
                  {item.price ? (
                    <>
                      {item.price} <br /> Stocks: {item.stocks}
                    </>
                  ) : (
                    `${item.product} Products`
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
{/*---------------------------- Group Table-------------------------- */}
      </div>
    ))}
  </div>
)}
{/*----------------------------- Popup Component ----------------------*/}
      <SelectProductPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSelect={handleSelectProducts}
      />
{/*----------------------------- Popup Component ----------------------*/}
    </div>
  );
};

export default NewGifting;