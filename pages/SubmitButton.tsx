import { Button } from '@mui/material';
import React from 'react';

const SubmitButton = () => {
  return (
    <div className="flex justify-center items-center ">
      <Button variant="contained" className="rounded-full bg-header-bg font-sfPro text-[1.1rem] px-6 py-1 w-40 inline-block">
        Save
      </Button>
    </div>
  );
};

export default SubmitButton;
