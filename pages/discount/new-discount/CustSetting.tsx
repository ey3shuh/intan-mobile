'use client';
import React, { useState } from 'react';
import Toggle from '../../../src/api/components/ToggleSwitch';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, OutlinedInput, Chip, MenuItem } from '@mui/material';

const CustSetting = () => {
  const [rule, setRule] = useState<string[]>([]);
  const [limit, setLimit] = useState('');
  const [isOncePerCustomer, setIsOncePerCustomer] = useState(false); // State for Toggle

  const handleChipChange = (event: SelectChangeEvent<typeof rule>) => {
    const {
      target: { value },
    } = event;
    setRule(typeof value === 'string' ? value.split(',') : value);
  };

  // Handle Toggle change
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOncePerCustomer(event.target.checked);
  };

  return (
    <div>
      {/* Once per customer? */}
      <div className='border border-gray-300 rounded-lg p-2 w-full'>
        <div className='text-[1rem] text-gray-500 font-sfPro font-semibold p-2'>
          Once per customer?
          <Toggle checked={isOncePerCustomer} onChange={handleToggleChange} />
        </div>
        <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold'>
          Usage Limit
        </label>
        <input
          type='text'
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className='mt-1 border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
          placeholder='Insert usage limit'
        />

        <div className='py-3'>
          <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold pb-2'>
            Select rules
          </label>
          <Box
            sx={{
              minWidth: 1,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'start',
            }}
          >
            <FormControl fullWidth>
              <Select
                labelId='demo-multiple-chip-label'
                id='demo-multiple-chip'
                multiple
                value={rule}
                onChange={handleChipChange}
                sx={{
                  fontSize: '1rem',
                  borderColor: '#AB2A51',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#AB2A51',
                  },
                  '.MuiSelect-select': { display: 'flex', textAlign: 'center' },
                }}
                input={
                  <OutlinedInput
                    id='select-multiple-chip'
                    label='Chip'
                    className='block text-[1rem] text-gray-500 font-sfPro font-semibold rounded-lg'
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
                        }}
                      />
                    ))}
                  </Box>
                )}
              >
                {['Srikandi', 'Subscriber', 'Discount 3', 'Discount 4', 'Discount 5'].map(
                  (name) => (
                    <MenuItem
                      key={name}
                      sx={{
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'start',
                      }}
                      className='text-[1rem] text-gray-500 font-sfPro font-normal'
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CustSetting;
