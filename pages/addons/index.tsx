'use client';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import Button from '@mui/material/Button';
import AccViewAddOns from './index-addons/AccViewAddOns';
import NavBar from '@/pages/Navbar';
import '../../app/globals.css'

const IndexAddOns = () => {
  return (
    <div>
      <NavBar />
      {/* -------------------------------Header--------------------------- */}
      <div className="w-full p-2 bg-custom-bg">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-2">
            <Image
              src="/addons1.png"
              alt="addons"
              className="object-contain border-4"
              width={50}
              height={50}
            />
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">Add Ons</h1>
          </li>
        </ul>
      </div>

      <div className='m-4'>
        {/* -----------------------------Search Bar--------------------------- */}
        <div className="flex justify-center mb-4">
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

        {/* ------------------------New Product Add Ons----------------------- */}
        <div className="mt-4 mb-2">
          <Button
            variant="contained"
            className="bg-[#D97740] font-sfPro text-[1rem] text-transform-none"
            style={{ width: '250px' }}
          >
            New Product Add Ons
          </Button>
        </div>

        {/* ------------------------Tabs----------------------- */}
        <div className="grid grid-cols-3 pt-3 pb-2">
          <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">All</Button>
          <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">Active</Button>
          <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">Draft</Button>
        </div>

        <AccViewAddOns />
      </div>
    </div>
  );
}

export default IndexAddOns;
