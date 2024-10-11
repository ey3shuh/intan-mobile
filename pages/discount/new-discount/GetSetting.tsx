'use client'
import React,{useState} from 'react'
import SelectProductPopup from '@/pages/PopUp/SelectProductPopup';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DiscByProduct from './DiscByProduct';
const GetSetting = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [productGroups, setProductGroups] = useState<any[][]>([[]]); // Initialize with one empty group
    const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(null); // Track the selected group index
    const [isDiscPopupOpen, setIsDiscPopupOpen] = useState(false); // Add state for DiscByProduct popup


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
    const handleOpenDiscPopup = () => {
        setIsDiscPopupOpen(true);
    };

    // Function to handle closing DiscByProduct popup
    const handleCloseDiscPopup = () => {
        setIsDiscPopupOpen(false);
    };

    const handleDeleteGroup = (index: number) => {
        setProductGroups((prevGroups) => prevGroups.filter((_, i) => i !== index));
    };

  return (
    <div>{productGroups.map((group, index) => (
        <div key={index} >
            <div className=" border border-gray-300 rounded-lg p-4">
           <div className='flex justify-between'> 
             <p className="text-[1rem] text-gray-500 font-sfPro">Group {index + 1}</p>
            <button
        type="button"
        onClick={() => handleDeleteGroup(index)}
        className="  text-gray-500 hover:text-gray-800"> {/* Change to absolute positioning */}
        &#x2715; {/* Cross (X) symbol for delete button */}
    </button>
               </div>
                <button type="button" 
                        onClick={() => handleOpenPopup(index)} 
                        className="text-header-bg text-[1rem] 
                        font-sfPro font-semibold py-2" >
                            + Add Product </button>
    
                {group.length > 0 && (
                    <table className="rounded-lg w-full">
                        <tbody>
                            {group.map((item: any) => (
                                 <tr key={item.title}>
                                 <td className="py-2">
                                     <div className="font-sfPro font-normal text-gray-500">{item.title}</div>
                                 </td>
                                 <td className="flex items-center justify-end"> {/* Adjust alignment as needed */}
                                     <EditNoteIcon
                                         className="text-orange-400 cursor-pointer mr-2" // Add right margin for spacing
                                         onClick={handleOpenDiscPopup} // Open DiscByProduct popup 
                                     />
                                     <div className="text-[1rem] font-sfPro font-semibold text-gray-300 border-[2px] rounded-full w-[48px] h-[27.6px] text-center border-gray-300"> OR </div>
                                 </td>
                             </tr>
                            ))}
                            </tbody>
                    </table>
                )}
            </div>                  
            <div className="w-full mx-5 p-2 border-l"> </div>
                    {/* AND button between groups */}
        {index < productGroups.length - 1 && (
            <p className="flex justify-start ">
                <button type="button"
                        className="text-[1rem] font-sfPro font-semibold text-gray-300 border-[2px] rounded-full w-[50px] h-[29.6px] text-center border-gray-300" > AND
                </button>
            </p>
        )}
        <div className="w-full mx-5 p-2 border-l"> </div>
    </div>
))}

            {/* AND button to add a new group */}
            <div className="flex justify-start ">
                <button
                    type="button"
                    onClick={handleAddGroup}
                    className="text-[1rem] font-sfPro font-semibold text-orange-400 border-[2px] rounded-full w-[50px] h-[29.6px] text-center border-orange-400" >  AND
                </button>
            </div>
    
                {/* Popup Component */}
                <SelectProductPopup
                    isOpen={isPopupOpen}
                    onClose={handleClosePopup}
                    onSelect={handleSelectProducts}
                />
                {/* DiscByProduct Popup */}
            {isDiscPopupOpen && (
                <DiscByProduct onClose={handleCloseDiscPopup} />
            )}
                </div>
  )
}

export default GetSetting