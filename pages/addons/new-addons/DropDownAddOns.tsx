import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DropDownAddOns = () => {
    const [addOns, setAddOns] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAddOns(event.target.value as string);
    };
  return (
    <Box sx={{ minWidth: 150 }}>
    <FormControl fullWidth className='font-sfPro'>
      <Select
          value={addOns}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        sx={{
         
            fontSize: '1rem',
            fontColor: '#AB2A51',
            borderColor: '#AB2A51',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#AB2A51' },
            '.MuiSelect-select': { display: 'flex', textAlign: 'center' },
          }}
      >
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
        <MenuItem value={1}>Add-On Dark Sulam</MenuItem>
        <MenuItem value={2}>Add-On Wish Card</MenuItem>
        <MenuItem value={3}>Add-On Wrapping Service </MenuItem>
        <MenuItem value={4}>Add-On Light Sulam </MenuItem>
        <MenuItem value={5}>Add-On Embroidery</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default DropDownAddOns