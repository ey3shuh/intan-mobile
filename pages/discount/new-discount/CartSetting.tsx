import React,{useState} from 'react'
import SelectProductPopup from '../../PopUp/SelectProductPopup';

const CartSeting = () => {
const [minSpend, setMinSpend] = useState('')
const [maxSpend, setMaxSpend] = useState('')
const [productSale, setProductSale] = useState('Include');
const [isPopupOpen, setIsPopupOpen] = useState(false);
const [productGroups, setProductGroups] = useState<any[]>([]);
const [selectedTypes, setSelectedTypes] = useState<{ [key: number]: string }>({});

const handleSelectProducts = (selectedItems: any[]) => {
  setProductGroups([...productGroups, selectedItems]);
};

// Handle Product Sale Radio button change
const handleProductSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setProductSale(event.target.value);
};

const handleOpenPopup = () => setIsPopupOpen(true);


const handleClosePopup = () => setIsPopupOpen(false);



  return (
    <div className='border border-gray-300 rounded-lg p-2 w-full'>
      <div className='grid grid-cols-2 gap-4 py-2 '>
   
   {/* Minimum Spend Column */}
   <div className='flex flex-col gap-1  '> {/* gap-1 for title and input */}
     <span className=" text-[1rem] font-sfPro font-semibold text-gray-500">
       Minimum Spend
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
   <div className='flex flex-col gap-1'> {/* gap-1 for title and input */}
     <span className=" text-[1rem] font-sfPro font-semibold text-gray-500">
       Maximum Spend
     </span>
     <input
       type='text'
       value={maxSpend}
       onChange={(e) => setMaxSpend(e.target.value)}
       className=' border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
       placeholder='Insert max spend'
     />
   </div>
 </div>
  {/* Product Sale Section */}
  <div className="py-4">
        <h3 className="mb-2 text-[1rem] font-sfPro font-semibold text-gray-500">Product Sale</h3>
        <div className="flex items-center gap-5">
          <label className="flex items-center py-1 mr-2 text-[1rem] font-sfPro font-semibold text-gray-500">
            <input
              type="radio"
              value="Include"
              checked={productSale === 'Include'}
              onChange={handleProductSaleChange}
              className="mr-2 w-5 h-5 accent-gray-500"
            />
            Include
          </label>
          <label className="flex items-center py-1 text-[1rem] font-sfPro font-semibold text-gray-500">
            <input
              type="radio"
              value="Exclude"
              checked={productSale === 'Exclude'}
              onChange={handleProductSaleChange}
              className="mr-2 w-5 h-5 accent-gray-500"
            />
            Exclude
          </label>
        </div></div>
 {/* Product Sale Section */}
<div className="py-2">       
  <h3 className=" text-[1rem] font-sfPro font-semibold text-gray-500">Include Product Sale</h3>
  <button type='button'
        onClick={handleOpenPopup} 
        className='
        text-header-bg text-[1rem] 
        font-sfPro font-semibold 
        py-4 '>
              + Add Product
</button></div>


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
          className="absolute right-2 text-gray-500 text-2xl "
        >
          &times;
        </button>
        {/* Product Table */}
        <table className="bg-gray-50 text-[1rem] rounded-lg w-full  ">
        <thead className='border-b border-gray-300 ' >
        <tr className="text-[1rem] text-gray-500 font-semibold border-b
   ">
    <th className="text-left px-4 pt-8 ">Products</th>
      <th className="text-right px-4  pt-8 pb-1">Price/ <br/> Stocks</th>
      
      
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







    </div>
  )
}

export default CartSeting