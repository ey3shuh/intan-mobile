'use client'
import React, { useState } from 'react';
import SelectProductPopup from '@/pages/PopUp/SelectProductPopup';
import dummyData from '@/pages/dummyData.json';
import BuySetting from './BuySetting';
import GetSetting from './GetSetting';

const ProdSetting = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [productGroups, setProductGroups] = useState<any[][]>([[]]); // Initialize with one empty group
    const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(null); // Track the selected group index

    const handleOpenPopup = (groupIndex: number) => {
        setSelectedGroupIndex(groupIndex);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedGroupIndex(null); // Reset group index
    };

    const handleSelectProducts = (selectedItems: any[]) => {
        setProductGroups((prevGroups) => {
            const newGroups = [...prevGroups];
            if (selectedGroupIndex !== null) {
                newGroups[selectedGroupIndex] = [...newGroups[selectedGroupIndex], ...selectedItems];
            }
            return newGroups;
        });
        setIsPopupOpen(false); // Close popup after selecting products
    };

    const handleAddGroup = () => {
        setProductGroups((prevGroups) => [...prevGroups, []]); // Adds a new empty group
    };

    return (
<div>
    <p className="text-[1.2rem] text-gray-700 font-sfPro font-semibold pt-4 pb-2">Product Settings</p>
    <p className="text-[1rem] text-gray-500 font-sfPro font-semibold py-2">Buy</p>
<BuySetting/>
<p className="text-[1rem] text-gray-500 font-sfPro font-semibold pt-6 pb-2">Get</p>
<GetSetting/>
</div>
    );
};

export default ProdSetting;
