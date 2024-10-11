'use client';
import React from 'react'
import Image from 'next/image'
import NavBar from '@/pages/Navbar';
import { Paper, IconButton, InputBase, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccViewLive from './index-live/AccViewLive';
import '../../app/globals.css'

const IndexLive = () => {
  return (
<div>
<NavBar/>

{/* -------------------------------Header--------------------------- */}
<div className="w-full p-2 bg-custom-bg">
 <ul className="flex items-center h-full">
    <li className="flex items-center px-2">
            <Image
              src="/live.png"
              alt="instory"
              className="object-contain border-4"
              width={50}
              height={50}
            />
    </li>
    <li className="flex items-center">
        <h1 className="text-header-bg text-xl md:text-2xl px-2 font-sfPro font-medium">Live</h1>
    </li>
  </ul>
</div>
{/* -------------------------------Header--------------------------- */}

<div className='m-4'>

{/* -----------------------------Search Bar--------------------------- */}
<div className="flex justify-center">
  <Paper component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}>
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
    </IconButton>
    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'Search' }} />
 </Paper>
</div>
{/* -----------------------------Search Bar--------------------------- */}

{/* ------------------------------New Live---------------------------- */}
<div className="mt-4 mb-2">
    <Button variant="contained"
            className="bg-[#D97740] font-sfPro 
            text-[1rem] text-transform-none rounded-xl"
            style={{ width: '200px' }}>
            New Live
    </Button>
        
</div>
{/* ------------------------------New Live---------------------------- */}

{/* -------------------------------Tabs------------------------------- */}
<div className="grid grid-cols-5 pt-6 pb-2 ">
        <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
          All
        </Button>
        <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
          Streaming
        </Button>
        <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
          Ended
        </Button>
      </div>
{/* -------------------------------Tabs------------------------------- */}
<AccViewLive/>



</div></div>
  )
}

export default IndexLive