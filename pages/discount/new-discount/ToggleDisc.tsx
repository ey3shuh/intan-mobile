import React, { useState } from 'react';

const ToggleDisc = () => {
    const [isPercent, setIsPercent] = useState(true); // true for %, false for RM

    const handleToggle = () => {
        setIsPercent(!isPercent); // Toggle between % and RM
    };

    return (
        <div className="flex items-center">
            <div className="relative w-16 h-8">
                {/* Track without symbols */}
                <div className="absolute inset-0 bg-header-bg rounded-full"></div>

                {/* Thumb with dynamic symbol */}
                <button
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 
                        ${isPercent ? 'translate-x-0' : 'translate-x-8'}`}
                    onClick={handleToggle}
                >
                    <span className="text-xs text-header-bg font-bold text-center 
                    absolute inset-0 flex items-center justify-center">{isPercent ? '%' : 'RM'}</span>
                </button>
            </div>
        </div>
    );
};

export default ToggleDisc;
