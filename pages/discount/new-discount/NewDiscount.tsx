'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import Toggle from '../../../src/api/components/ToggleSwitch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip'; // Added Chip
import OutlinedInput from '@mui/material/OutlinedInput'; // Added OutlinedInput
import CustSetting from './CustSetting';
import CartSetting from './CartSetting';
import DiscSetting from './DiscSetting';
import ProdSetting from './ProdSetting';
import CancelButton from '@/src/api/components/CancelButton';
import SubmitButton from '@/src/api/components/SubmitButton';



const NewDiscount = () => {
  const [title, setTitle] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [discountRule, setdiscountRule] = useState('');
  const [rule, setRule] = useState<string[]>([]);
  const [isCodeUsed, setIsCodeUsed] = useState(false);
  const [isSelfBogoAllowed, setIsSelfBogoAllowed] = useState(false);
  const [isAutoAdd, setIsAutoAdd] = useState(false);
  const [isRepeatable, setIsRepeatable] = useState(false);
  const [isCustOn, setIsCustOn] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
 



   // Handle Chip dropdown change
   const handleChipChange = (event: SelectChangeEvent<typeof rule>) => {
    const { target: { value } } = event;
    setRule(typeof value === 'string' ? value.split(',') : value);
  };
  
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setdiscountRule(event.target.value as string);
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your submission logic here
  };

    // Handle toggle changes
    const handleCodeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsCodeUsed(event.target.checked);
    };
    const handleSelfBogoToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsSelfBogoAllowed(event.target.checked);
    };
    const handleAutoAddToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsAutoAdd(event.target.checked);
    };
    const handleRepeatableToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsRepeatable(event.target.checked);
    };
    const handleCustomerSettingsToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsCustOn(event.target.checked);
    };

   const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustOn(event.target.checked); // Toggle the state
  };
  const handleCartToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggleOn(event.target.checked); // Toggle the state
  };


  
  return (
    <div className="w-full overflow-x-hidden">
  {/* -------------------------------Header--------------------------- */}
  <div className="w-full p-2 bg-custom-bg">
    <ul className='flex items-center h-full'>
      <li className="flex items-center px-2">
        <Image
          src='/discounts.png'
          alt='discounts'
          className='object-contain border-4' // Increased border thickness
          width={50} // Increased width
          height={50} // Increased height
        />
      </li>
      <li className="flex items-center">
        <h1 className='text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium'>Discounts</h1> {/* Increased font size */}
      </li>
    </ul>
  </div>
{/* -------------------------------Header--------------------------- */}

{/* ----------------------------Breadcrumbs--------------------------- */}
<div className='w-full p-3 border-b flex items-start'>
        <ul className='text-[1rem] font-sfPro font-medium text-gray-500'>
          <li className='text-[1rem] font-sfPro font-medium text-gray-500 flex items-center px-2'>
            <span className="mr-2">Discounts</span>
            <span className="mx-2">/</span>
            <span className="ml-2 text-header-bg">New</span>
          </li>
        </ul>
      </div>
{/* ----------------------------Breadcrumbs--------------------------- */}
<div className='p-4'>
{/* ---------------------------Title Input---------------------------- */}
 <div>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className='mb-4'>
            <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>
              Title
            </label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-2 border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
              placeholder='Insert title'
            />
          </div></form></div>
{/* ---------------------------Title Input---------------------------- */}

{/* ----------------Discount Type with Radio Buttons------------------ */}
<div >
            <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold py-2'>
              Discount Type
            </label>
            <ul className='text-[1rem] text-gray-700 font-sfPro font-semibold'>
              <li className='flex items-center py-1'>
                <input
                  type='radio'
                  value='BOGO'
                  checked={discountType === 'BOGO'}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className='mr-2  w-5 h-5 accent-gray-500'
                />
                BOGO
              </li>
              <li className='flex items-center py-1'>
                <input
                  type='radio'
                  value='Voucher'
                  checked={discountType === 'Voucher'}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className='mr-2  w-5 h-5 accent-gray-500'
                />
                Voucher
              </li>
              <li className='flex items-center py-1'>
                <input
                  type='radio'
                  value='Quantity Based'
                  checked={discountType === 'Quantity Based'}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className='mr-2 w-5 h-5 accent-gray-500'
                />
                Quantity Based
              </li>
            </ul>
          </div>
{/* ----------------Discount Type with Radio Buttons------------------ */}

{/* ------------------------------Toggles----------------------------- */}
<div className=' py-4'>
            
<div className='grid grid-cols-2 gap-1'>
          <div className='flex items-center justify-between'>
            <span className="text-[1rem] font-sfPro font-semibold text-gray-500">Use code?</span>
            <Toggle checked={isCodeUsed} onChange={handleCodeToggle} />
          </div>
          <div className='flex items-center justify-between'>
            <span className="text-[1rem] font-sfPro font-semibold text-gray-500">Allow self bogo?</span>
            <Toggle checked={isSelfBogoAllowed} onChange={handleSelfBogoToggle} />
          </div>
          <div className='flex items-center justify-between'>
            <span className="text-[1rem] font-sfPro font-semibold text-gray-500">Auto add?</span>
            <Toggle checked={isAutoAdd} onChange={handleAutoAddToggle} />
          </div>
          <div className='flex items-center justify-between'>
            <span className="text-[1rem] font-sfPro font-semibold text-gray-500">Repeatable?</span>
            <Toggle checked={isRepeatable} onChange={handleRepeatableToggle} />
          </div>
        </div>
          </div>
{/* ------------------------------Toggles----------------------------- */}

{/*------------------ Combine with other discount discountRule---------------- */}
 <div className='py-4'>
            <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold pb-2 '>
              Combine with other discount rules
            </label>
            <Box sx={{ minWidth: 1, textAlign: 'center', display: 'flex', justifyContent: 'start'}}
            >
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={discountRule}
                  label="discountRule"
                  onChange={handleDropdownChange}
                  className="block text-[1rem]
                  text-gray-500
                  font-sfPro
                  font-semibold
                  rounded-lg"
                  sx={{
                    fontSize: '1rem',
                    borderColor: '#AB2A51',
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                    { borderColor: '#AB2A51' },
                    '.MuiSelect-select': { display: 'flex',
                      textAlign: 'center' },}}>


                  <MenuItem value="">
                  <em className='text-[1rem]
                  text-gray-500
                  font-sfPro
                  font-normal'>None</em></MenuItem>


                  <MenuItem value={1}
                  sx={{ textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'start' }}
                  className='text-[1rem]
                  text-gray-500
                  font-sfPro
                  font-normal'>
                    Allow combine with all discount discountRule
                  </MenuItem>


                  <MenuItem value={2}
                  sx={{ textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'start' }}
                  className='text-[1rem]
                   text-gray-500
                   font-sfPro font-normal'>
                    Disable combine with other discount discountRule
                  </MenuItem>


                  <MenuItem value={3}
                  sx={{ textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'start' }}
                  className='text-[1rem]
                   text-gray-500
                  font-sfPro
                  font-normal'>
                    Specific discountRules
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
{/*------------------ Combine with other discount--------------------- */}

{/* ----------------------Chip Select Dropdown ------------------------*/}
<div className='py-4'>
  <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold rounded-lg pb-2  '>
    Select rules
  </label>
  <Box sx={{ minWidth: 1,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'start',
    borderRadius: '0.75rem',
    }}>
    <FormControl fullWidth>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={rule}
        onChange={handleChipChange}
        sx={{
         
          fontSize: '1rem',
          borderColor: '#AB2A51',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#AB2A51' },
          '.MuiSelect-select': { display: 'flex', textAlign: 'center' },
        }}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="Chip"
            className="block text-[1rem]
             text-gray-500
             font-sfPro
             font-semibold rounded-lg"
             
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                sx={{
                  fontSize: '1rem',        
                  backgroundColor: '#dd8553',
                  color: 'white',            
                }}/>
            ))}
          </Box>
        )}
      >
        {['Discount 1', 'Discount 2', 'Discount 3', 'Discount 4', 'Discount 5'].map((name) => (
          <MenuItem key={name}
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'start',
          }}
          className='text-[1rem]
          text-gray-500
          font-sfPro
          font-normal'
          value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
</div>
{/* ----------------------Chip Select Dropdown ------------------------*/}

{/* ------------------------ Customer Setting -------------------------*/}
<div className='text-[1.2rem] text-gray-700
          font-sfPro font-semibold '>
          Customer Settings
         
          <Toggle onChange={handleToggleChange} checked={isCustOn} />
      {isCustOn && <CustSetting />}
  </div>
{/* ------------------------ Customer Setting -------------------------*/}

{/* ------------------------- Cart Setting ----------------------------*/}
<div className='text-[1.2rem] text-gray-700
      font-sfPro font-semibold pt-4 pb-2'>
        Cart Settings
        <Toggle onChange={handleCartToggle} checked={isToggleOn} />
        {isToggleOn && <CartSetting />}
</div>
{/* ------------------------- Cart Setting ----------------------------*/}

{/* ----------------------- Discount Setting --------------------------*/}
<div className='text-[1.2rem] text-gray-700
          font-sfPro font-semibold py-4 '>
      Discount Setting
      <div className='border rounded-lg mt-2'>
      <DiscSetting/></div>
</div>
{/* ----------------------- Discount Setting --------------------------*/}

<ProdSetting/>
<div className="flex justify-center space-x-2 py-6">
 <CancelButton/> <SubmitButton />  
 </div>















          </div>
    </div>
  )
}

export default NewDiscount