
'use client'
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OptionCombo from './OptionCombo';

const AccView = () => {
  const [expanded, setExpanded] = useState<string | null>(null); // Track which accordion is expanded

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null); // Expand only the clicked panel
  };

  return (
    
    <div className='border rounded-lg'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel1' ? '#AB2A51' : 'gray-500' }}/>}
         
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3 className={`mx-3 font-sfPro text-[1.1rem] font-semibold 
          ${expanded === 'panel1' ? 'text-header-bg' : 'text-gray-500'}`}>Package A</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className='grid grid-cols-2 gap-2'> 
            <div className='grid grid-rows-5 ml-4 gap-3 text-left font-sfPro font-semibold text-gray-400'>
              <div> Status </div> 
              <div> Type </div> 
              <div>Price </div> 
              <div> Action</div> 
            </div>
            <div className='grid grid-rows-5 text-left
             gap-3 font-sfPro font-semibold '>
              <div>
                <p className='bg-red-700 inline-block rounded-full px-2 text-white'> Draft </p>
              </div>
              <div> Combo </div> 
              <div>RM290.00 </div> 
              <OptionCombo/> 
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
          ${expanded === 'panel2' ? 'text-header-bg' : 'text-gray-500'}`}>Package B</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className='grid grid-cols-2 gap-2'> 
            <div className='grid grid-rows-5 ml-4 gap-3 text-left font-sfPro font-semibold text-gray-400'>
              <div> Status </div> 
              <div> Type </div> 
              <div>Price </div> 
              <div> Action</div> 
            </div>
            <div className='grid grid-rows-5 ml-4 gap-3 font-sfPro font-semibold text-left'>
              <div>
                <p className='bg-green-600 inline-block rounded-full px-2 text-white'> Active </p>
              </div>
              <div> Combo </div> 
              <div>RM290.00 </div> 
              <OptionCombo/>
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
          ${expanded === 'panel3' ? 'text-header-bg' : 'text-gray-500'}`}>Gift for Women</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className='grid grid-cols-2 gap-2'>
            <div className='grid grid-rows-5 ml-4 gap-3 text-left font-sfPro font-semibold text-gray-400'>
              <div> Status </div>
              <div> Type </div>
              <div>Price </div>
              <div> Action</div>
            </div>
            <div className='grid grid-rows-5 ml-4 gap-3 font-sfPro font-semibold text-left'>
              <div>
                <p className='bg-green-600 inline-block rounded-full px-2 text-white'> Active </p>
              </div>
              <div> Combo </div>
              <div>RM290.00 </div>
              <OptionCombo/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: expanded === 'panel4' ? '#AB2A51' : 'gray-500' }}/>}
          
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <h3 className={`mx-3 font-sfPro text-[1.1rem] font-semibold 
          ${expanded === 'panel4' ? 'text-header-bg' : 'text-gray-500'}`}>Gift for Men</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className='grid grid-cols-2 gap-2'>
            <div className='grid grid-rows-5 ml-4 gap-3 text-left font-sfPro font-semibold text-gray-400'>
              <div> Status </div>
              <div> Type </div>
              <div>Price </div>
              <div> Action</div>
            </div>
            <div className='grid grid-rows-5 ml-4 gap-3 font-sfPro font-semibold text-left'>
              <div>
                <p className='bg-green-600 inline-block rounded-full px-2 text-white'> Active </p>
              </div>
              <div> Combo </div>
              <div>RM290.00 </div>
              <OptionCombo/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}

export default AccView;
