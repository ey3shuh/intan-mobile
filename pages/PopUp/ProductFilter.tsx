import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import dummyData from '../dummyData.json';

const Productts = [
  { name: 'Telekung Modish Asanoha Youth', discountedPrice:'RM190.00',price: 'RM10.99', stocks: 99 },
  { name: 'Telekung Flair Daria (Top Only)', discountedPrice:'RM190.00', price: 'RM250.00', stocks: 2 },
  { name: 'Telekung Ultra Fine Lace Prayer Robe', price: 'RM390.00', discountedPrice:'RM280.00',stocks: 10 },
  { name: 'Bairam Lite Foam Sejadah', discountedPrice:'RM90.00',price: 'RM109.00', stocks: 4 },
];

interface Product {
  title: string;
  price: string;
  discountedPrice?: string;
  stocks: number;
}

// Explicitly cast dummyData to an array of Product
const products: Product[] = dummyData as Product[];

interface ProductFilterProps {
  handleSelectionChange: (selectedProducts: Product[]) => void;
}

export default function ProductFilter({ handleSelectionChange }: ProductFilterProps) {
  const [Product, setProduct] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof Product>) => {
    const { target: { value } } = event;
    const selectedProducts = typeof value === 'string' ? value.split(',') : value;
    setProduct(selectedProducts);

    // Get product details from the products array and pass them to the parent
    const selectedProductDetails = selectedProducts.map(productName =>
      products.find(product => product.title === productName)
    );
    handleSelectionChange(selectedProductDetails as Product[]); // Pass selected products to parent
  };

  return (
    <FormControl sx={{ my: 3 }} className="w-full font-sfPro">
      <InputLabel id="demo-multiple-checkbox-label" className="font-sfPro">
        Products
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={Product}
        onChange={handleChange}
        input={<OutlinedInput label="Products" className="font-sfPro" />}
        renderValue={(selected) => selected.join(', ')}
        
      >
       {products.map((product: Product) => (
          <MenuItem key={product.title} value={product.title}>
            {product.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
