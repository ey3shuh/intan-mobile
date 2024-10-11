import React,{useState} from 'react'
import ToggleSwitch from './ToggleDisc';

const DiscSetting = () => {

    const [discountSetting, setDiscountSetting] = useState('');
    const [discount, setDiscount] = useState('');

  return (
    <div className='px-4 py-2 '>
        <div >
    <ul className='text-[1rem] text-gray-500 font-sfPro font-semibold'>
      <li className='flex items-center py-2'>
        <input
          type='radio'
          value='Discount by Variant'
          checked={discountSetting === 'Discount by Variant'}
          onChange={(e) => setDiscountSetting(e.target.value)}
          className='mr-2 w-5 h-5 accent-gray-500'
        />
        Discount by Variant
      </li>
      <li className='flex items-center py-1'>
        <input
          type='radio'
          value='Whole Discount'
          checked={discountSetting === 'Whole Discount'}
          onChange={(e) => setDiscountSetting(e.target.value)}
          className='mr-2 w-5 h-5 accent-gray-500'
        />
        Whole Discount
      </li>
    </ul>
  </div>

  <div className='py-4'>
  <h4 className='text-[1rem] font-sfPro font-semibold text-gray-500 pb-2'>Discount</h4>
  <div className="grid grid-cols-2 items-center "> {/* Add gap-4 for spacing */}
    <div>
        <input
            type='text'
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className='border border-gray-300 rounded-lg 
            p-4  text-[1rem] font-sfPro font-normal 
            placeholder-gray-300 
            focus:border-header-bg focus:outline-none w-[130%]'
            placeholder='Insert discount amount'
        />
    </div>
    <div className="flex justify-end "> {/* Use flex for alignment */}
        <ToggleSwitch/>
    </div>
</div>

  </div>





  </div>
  )
}

export default DiscSetting