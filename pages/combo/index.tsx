'use client';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import Button from '@mui/material/Button';
import AccViewCombo from './index-combo/AccViewCombo';
import NavBar from '@/pages/Navbar';
import '../../app/globals.css'
import { useRouter } from 'next/navigation';

const ViewCombo = () => {
  const router = useRouter();


  return (
    <div>
      <NavBar/>
  {/* -------------------------------Header--------------------------- */}
  <div className="w-full p-2 bg-custom-bg">
    <ul className="flex items-center h-full">
        <li className="flex items-center px-4">
            <Image
              src="/combo1.png"
              alt="combo"
              width={40}
              height={40}
              className="object-contain bg-custom-bg my-2"
            />
        </li>
        <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
              Combo & Gifting
            </h1>
        </li>
    </ul>
</div>

  <div className="m-4">
    {/* -----------------------------Search Bar--------------------------- */}
    <div className="flex justify-center">
      <Paper
        component="form"
        variant="outlined"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'Search' }} />
      </Paper>
    </div>

    {/* ------------------------New Combo & Gifting Button----------------------- */}
    <div className="mt-4 mb-2">
    <Button
            variant="contained"
            onClick={() => router.push('/combo/new-combo')}
            className="bg-[#D97740] font-sfPro text-[1rem] rounded-md text-transform-none"
            style={{ width: '250px' }}
          >
        New Combo & Gifting
      </Button>
    </div>

    {/* ------------------------Export as CSV Button----------------------- */}
    <div className="flex justify-start">
      <Button
        variant="outlined"
        className="border-[#D97740] text-[#D97740] font-sfPro text-[1rem] rounded-md text-transform-none w-full sm:w-[250px]"
        style={{ width: '250px' }}
      >
        Export as CSV
      </Button>
    </div>

    {/* ------------------------Tabs----------------------- */}
    <div className="grid grid-cols-6 gap-2 pt-6 pb-2 text-start">
      <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
        All
      </Button>
      <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
        Active
      </Button>
      <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
        Draft
      </Button>
    </div>

    {/* ------------------------Accordion View----------------------- */}
    <AccViewCombo />
  </div>
</div>

  );
};

export default ViewCombo;
