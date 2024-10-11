import React from 'react'
import Button from '@mui/material/Button';

const CancelButton = () => {
  return (
    <div className="flex justify-center items-center ">
        <Button variant="outlined"
        className='border-[1.5px] rounded-full border-header-bg text-header-bg text-[1.1rem] px-6 py-1 w-40 inline-block font-sfPro'>CANCEL</Button></div>
  )
}

export default CancelButton