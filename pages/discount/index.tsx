'use client';
import React from 'react'
import Image from 'next/image'
import NavBar from '@/pages/Navbar';
import { Paper, IconButton, InputBase, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccViewDisc from './index-disc/AccViewDisc';
import '../../app/globals.css'
import { useRouter } from 'next/navigation';



const ViewDiscount = () => {
  const router = useRouter();
  return (
    <div className="w-full overflow-x-hidden">
    <NavBar />
{/* -------------------------------Header--------------------------- */}
<div className="w-full p-2 bg-custom-bg">
    <ul className="flex items-center h-full">
        <li className="flex items-center px-4">
            <Image
              src="/discounts.png"
              alt="discounts"
              width={40}
              height={40}
              className="object-contain bg-custom-bg my-2"
            />
        </li>
        <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">Discounts</h1>
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
        </div>
      </div>
 {/* -----------------------------Search Bar--------------------------- */}

    {/* ----------------------New Discount--------------------- */}
<div className="mt-4 mb-2">
<Button
            variant="contained"
            onClick={() => router.push('/discount/new-discount')}
            className="bg-[#D97740] font-sfPro text-[1rem] rounded-md text-transform-none"
            style={{ width: '200px' }}
          >
        New Discounts
      </Button>
</div>

      {/* ------------------------Export as CSV----------------------- */}
      <div>
        <Button
          variant="outlined"
          className="border-[#D97740] text-[#D97740] font-sfPro text-[1rem] text-transform-none rounded-md"
          style={{ width: '200px' }}
        >
          Export as CSV
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

<AccViewDisc/>


   </div> </div>
  )
}

export default ViewDiscount
