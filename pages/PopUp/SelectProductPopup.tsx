import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import CollectionFilter from './CollectionFilter'; // Assuming this is also implemented correctly
import dummyData from '../dummyData.json';

interface SelectProductPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (selectedItems: any[]) => void;
}

interface Product {
  title: string;
  price: string;
  discountedPrice?: string;
  stocks: number;
}

// Explicitly cast dummyData to an array of Product
const products: Product[] = dummyData as Product[];

const SelectProductPopup: React.FC<SelectProductPopupProps> = ({ isOpen, onClose, onSelect }) => {
  const [filter, setFilter] = useState('Product'); // State for toggling between filters
  const [selectedItems, setSelectedItems] = useState<Product[]>([]); // State for selected items

  const handleSelectionChange = (selectedProducts: Product[]) => {
    setSelectedItems(selectedProducts);
    console.log(selectedProducts); // Check the structure of selectedProducts
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%]">
        <h2 className="text-lg font-bold mb-4">Select Product/Collection</h2>
        <h3 className="text-sm font-medium text-gray-500">Filter by</h3>

        <div className="flex space-x-12 mt-2">
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              value="Product"
              checked={filter === 'Product'}
              onChange={(e) => setFilter(e.target.value)}
              className="accent-gray-500 w-6 h-6"
            />
            <span>Product</span>
          </label>
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              value="Collection"
              checked={filter === 'Collection'}
              onChange={(e) => setFilter(e.target.value)}
              className="accent-gray-500 w-6 h-6"
            />
            <span>Collection</span>
          </label>
        </div>

        <div className="mt-4">
          {filter === 'Product' && <ProductFilter handleSelectionChange={handleSelectionChange} />}
          {filter === 'Collection' && <CollectionFilter handleSelectionChange={handleSelectionChange} />}
        </div>

        {filter === 'Collection' && selectedItems.length > 0 && (
          <>
            <table className="bg-gray-50 rounded-lg min-w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left border-b border-gray-300 px-4 py-2 font-semibold text-gray-600">
                    Product Name
                  </th>
                  <th className="text-right border-b border-gray-300 px-4 py-2 font-semibold text-gray-600">
                    Products
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => (
                  <tr key={item.title}>
                    <td className="flex items-start font-sfPro font-normal text-gray-600 px-4 py-4">
                      {item.title}
                    </td>
                    <td className="font-sfPro text-gray-600 px-4 text-right py-4">
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
          </>
        )}

        {filter === 'Product' && selectedItems.length > 0 && (
          <>
            <table className="bg-gray-50 rounded-lg min-w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left border-b border-gray-300 px-4 py-2 font-semibold text-gray-600">
                    Product Name
                  </th>
                  <th className="text-right border-b border-gray-300 px-4 py-2 font-semibold text-gray-600">
                    Products
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => (
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
          </>
        )}

        <div className="mt-6 flex justify-end space-x-4">
          <button className="text-gray-500 py-2 px-4 rounded hover:text-gray-700" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => {
              onSelect(selectedItems); // Pass the selected items to the parent
              onClose();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectProductPopup;
