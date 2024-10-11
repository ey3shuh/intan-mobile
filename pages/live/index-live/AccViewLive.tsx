'use client'
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import OptionLive from './OptionLive';

const AccViewLive = () => {

  const [expanded, setExpanded] = useState<string | null>(null); // Track which accordion is expanded

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null); // Expand only the clicked panel
    };


  return (
    <div>
       <div className='border rounded-lg'>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel1' ? '#AB2A51' : 'gray-500' }}/>}
       
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <h3 className={`mx-3 font-sfPro text-[1.1rem] font-semibold 
        ${expanded === 'panel1' ? 'text-header-bg' : 'text-gray-500'}`}>[Live] Pelikat Gaya Kita</h3>
      </AccordionSummary>
      <AccordionDetails>
        <div className='grid grid-cols-2 gap-2 h-full'> 
          <div className='grid grid-rows-5 ml-4 gap-5 text-left font-sfPro font-semibold text-gray-400'>
            <div> Status </div> 
            <div> Viewers </div> 
            <div>Total Sale </div> 
            <div> Action</div> 
          </div>
          <div className='flex flex-col items-start gap-4 font-sfPro font-semibold text-left '>
            <div>
              <p className='bg-gray-500 inline-block rounded-full px-2 text-white'> Ended </p>
            </div>
            <div> 30 <VisibilityIcon className='text-[#757575]' /> </div> 
            <div>RM5032.30 </div> 
           <div> <OptionLive/> </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon  sx={{ color: expanded === 'panel2' ? '#AB2A51' : 'gray-500' }}/>}
        
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h3 className={`mx-3 font-sfPro text-[1.1rem] font-semibold 
        ${expanded === 'panel2' ? 'text-header-bg' : 'text-gray-500'}`}>[Live] Free Telekung Ambar on min spend of RM550</h3>
      </AccordionSummary>
      <AccordionDetails>
        <div className='grid grid-cols-2 gap-2 h-full'> 
          <div className='grid grid-rows-5 ml-4 gap-5 text-left font-sfPro font-semibold text-gray-400'>
            <div> Status </div> 
            <div> Viewers </div> 
            <div>Total Sale </div> 
            <div> Action</div> 
          </div>
          <div className='flex flex-col items-start gap-4 font-sfPro font-semibold text-left '>
            <div>
              <p className='bg-red-700 inline-block rounded-full px-2 text-white'> Streaming </p>
            </div>
            <div> 11 <VisibilityIcon className='text-[#757575]' /> </div> 
            <div>RM3455.90 </div> 
           <div> <OptionLive/> </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon  sx={{ color: expanded === 'panel3' ? '#AB2A51' : 'gray-500' }}/>}
        
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <h3 className={`mx-3 font-sfPro text-[1.1rem] font-semibold 
        ${expanded === 'panel3' ? 'text-header-bg' : 'text-gray-500'}`}>[Live] Free Bawal for first 10</h3>
      </AccordionSummary>
      <AccordionDetails>
        <div className='grid grid-cols-2 gap-2 h-full'> 
          <div className='grid grid-rows-5 ml-4 gap-5 text-left font-sfPro font-semibold text-gray-400'>
            <div> Status </div> 
            <div> Viewers </div> 
            <div>Total Sale </div> 
            <div> Action</div> 
          </div>
          <div className='flex flex-col items-start gap-4 font-sfPro font-semibold text-left '>
            <div>
            <p className='bg-gray-500 inline-block rounded-full px-2 text-white'> Ended </p>
            </div>
            <div> 98 <VisibilityIcon className='text-[#757575]' /> </div> 
            <div>RM321.00 </div> 
           <div> <OptionLive/> </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>

 


  </div></div>
  )
}

export default AccViewLive