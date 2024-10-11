'use client';
import React from 'react'
import Image from 'next/image'
import NavBar from '@/pages/Navbar';
import { Paper, IconButton, InputBase, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccViewInstory from './index-instory/AccViewInstory';

const ViewInstory = () => {
  return (
<div className="w-full overflow-x-hidden">
<NavBar/>
{/* -------------------------------Header--------------------------- */}
<div className="w-full p-2 bg-custom-bg">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-2">
            <Image
              src="/instagram-stories.png"
              alt="instory"
              className="object-contain border-4"
              width={50}
              height={50}
            />
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">Instory</h1>
          </li>
        </ul>
      </div>
{/* -------------------------------Header--------------------------- */}
        
<div className='m-4'>
 {/* -----------------------------Search Bar--------------------------- */}
    <div>
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
              borderRadius: '8px',
            }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'Search' }} />
          </Paper>
        </div></div>
{/* ----------------------Search Bar--------------------------- */}  
{/* ----------------------New Instory Button--------------------- */}
    <div className="mt-4 mb-2">
          <Button
            variant="contained"
            className="bg-[#D97740] font-sfPro text-[1rem] rounded-xl text-transform-none"
            style={{ width: '200px' }}
          >
            New Instory
          </Button>
        
      </div>
{/* ----------------------Preview Button---------------------- */}
      <div>
        <Button
          variant="outlined"
          className="border-[#D97740] rounded-xl text-[#D97740] font-sfPro text-[1rem] text-transform-none"
          style={{ width: '200px' }}
        >
          Preview Instory
        </Button>
      </div>

{/* -------------------------------Tabs------------------------------- */}
<div className="grid grid-cols-6 pt-6 pb-2 ">
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
{/* -------------------------------Tabs------------------------------- */}
<AccViewInstory/>

        
    </div> </div>
  )
}

export default ViewInstory