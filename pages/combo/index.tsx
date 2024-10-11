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


const ViewCombo = () => {



  return (
    <div>
  {/* -------------------------------Header--------------------------- */}
  <div className="w-full p-2 bg-[#f1e6e2]">
    <div className="flex flex-row items-center">
      <div>
        <Image
          src="/combo1.png"
          alt="combo"
          className="object-contain border-4"
          width={50}
          height={50}
        />
      </div>
      <div>
        <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">
          Combo & Gifting
        </h1>
      </div>
    </div>
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
    <div className="mt-4 mb-2 flex justify-start">
      <Button
        variant="contained"
        className="bg-[#D97740] font-sfPro text-[1rem] text-transform-none w-full sm:w-[250px]"
      >
        New Combo & Gifting
      </Button>
    </div>

    {/* ------------------------Export as CSV Button----------------------- */}
    <div className="flex justify-start">
      <Button
        variant="outlined"
        className="border-[#D97740] text-[#D97740] font-sfPro text-[1rem] text-transform-none w-full sm:w-[250px]"
      >
        Export as CSV
      </Button>
    </div>

    {/* ------------------------Tabs----------------------- */}
    <div className="grid grid-cols-3 gap-2 pt-6 pb-2 text-start">
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
