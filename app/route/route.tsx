
import IndexAddOns from '@/pages/addons';
import ViewCombo from '@/pages/combo';
import ViewDiscount from '@/pages/discount';
import ViewInstory from '@/pages/instory';
import IndexLive from '@/pages/live';
import Dashboard from '@/pages/Dashboard';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route
            path= '/'
            element={<Dashboard />}>
        </Route>
        <Route
            path= '/addons'
            element={<IndexAddOns />} />
       
        <Route
            path= '/combo'
            element={<ViewCombo />}/>

        <Route
            path= '/discounts/'
            element={<ViewDiscount />}/>

        <Route
            path= '/instory'
            element={<ViewInstory />}/>
        <Route
            path= '/live'
            element={<IndexLive />}/>
        
    </Routes>
  )
}

export default AppRoutes;