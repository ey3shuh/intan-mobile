import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';


const OptionInstory = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      className='text-transform-none font-sfPro font-semibold'
    >
      Options
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      
      <MenuItem onClick={handleClose} className='font-sfPro text-gray-500 font-semibold'>Edit</MenuItem>
      
      <MenuItem onClick={handleClose} className='font-sfPro text-white font-semibold bg-red-400 ' >
      <DeleteIcon className='mr-2'/> Delete</MenuItem>
    </Menu>
  </div>
  )
}

export default OptionInstory