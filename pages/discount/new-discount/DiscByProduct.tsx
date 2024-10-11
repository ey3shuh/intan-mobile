import React, { useState } from 'react';
import ToggleDisc from './ToggleDisc';
import ToggleSwitch from '@/src/api/components/ToggleSwitch';

interface DiscByProductProps {
    onClose: () => void; // The onClose function is passed from the parent component
}

const DiscByProduct: React.FC<DiscByProductProps> = ({ onClose }) => {
    const [isPercent, setIsPercent] = useState(false); // For ToggleDisc
    const [isCombo, setIsCombo] = useState(true); // For ToggleSwitch
    const handleToggleSwitch = () => {
        setIsCombo(!isCombo);
    };
    

    const handleToggle = () => {
        setIsPercent(!isCombo); // Toggle between tick and cross
    };

    return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg relative w-[90%]">
        <h2 className="text-[1.2rem]  text-gray-700
      font-sfPro font-semibold p-4 border-b">Discount by Product</h2>

        {/* Close button to trigger the onClose function */}
        <button
            onClick={onClose}
            className="absolute top-2 right-2
             text-gray-500 hover:text-gray-800" >
            &#x2715; {/* Cross (X) symbol for close button */}
        </button>

        {/* Example form or content */}
       <div className='px-4 pt-4 pb-2'>
        <label htmlFor="discount" className="text-[1rem] text-gray-500 font-semibold font-sfPro  ">Discount Rule</label>
        </div> 

        <div className="flex flex-cols-2 justify-between items-center px-4">
            <div>
                <input
                    id="discount"
                    type="number"
                    className="border rounded-lg p-4 text-[1rem] text-gray-400 font-sfPro w-[120%]"
                    placeholder="Enter discount amount"
                />
            </div>
            <div  className="flex justify-end">
                <ToggleDisc />
            </div>
        </div>
        <div className="flex flex-cols-2 justify-between items-center px-4 pt-4">
    <div className="text-[1rem] text-gray-500 font-semibold font-sfPro">
        Exclude Combo?
    </div>
    <div className="flex items-center">
            <div className="relative w-16 h-8">
                {/* Track without symbols */}
                <div className="absolute inset-0 bg-header-bg rounded-full"></div>

                {/* Thumb with dynamic symbol */}
                <button
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 
                        ${isCombo ? 'translate-x-0' : 'translate-x-8'}`}
                    onClick={handleToggleSwitch}
                >
                    <span className="text-xs text-header-bg font-bold text-center 
                    absolute inset-0 flex items-center justify-center">{isCombo ? '✓' : '✗'}</span>
                </button>
            </div>
        </div>
</div>
<div className='grid pb-4 justify-center font-sfPro
font-semibold '>
        {/* Submit button */}
        <button
            className="mt-4 bg-orange-500
             text-white p-2 px-4 rounded-lg
              hover:bg-orange-500"
        >
            Apply Discount
        </button>
        
        </div>
    </div>
</div>

    );
};

export default DiscByProduct;
