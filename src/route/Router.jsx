import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../layout/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorPage from '../ErrorPage'
import Properties from '../pages/Properties'
import Agents from '../pages/Agents'
import Blogs from '../pages/Blogs'
import Services from '../pages/Services'
import Contacts from '../pages/Contacts'
import PropertiesDetail from '../pages/PropertiesDetail'
import ServiceDetails from '../pages/ServiceDetails'
import Privacy from '../pages/Privacy'
import BlogDetail from '../pages/BlogDetail'
import AgentsDetail from '../pages/AgentsDetail'
import Terms from '../pages/Terms'
import Errorsection from '../pages/Errorsection'

function Router() {
  return (
   <BrowserRouter>
     <Routes>
      <Route element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/properties' element={<Properties/>}/>
      <Route path='/agents' element={<Agents/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/contacts' element={<Contacts/>}/>
       <Route path='/propertiesdetail' element={<PropertiesDetail/>}/>
       <Route path='/servicedetails' element={<ServiceDetails/>}/>
       <Route path='/privacy' element={<Privacy/>}/>
       <Route path='/blogdetail' element={<BlogDetail/>}/>
       <Route path='/Agentsdetail' element={<AgentsDetail/>}/>
       <Route path='/errorsection' element={<Errorsection/>}/>
       <Route path='/terms' element={<Terms/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      </Route>
     </Routes>
     
   </BrowserRouter>
  )
}

export default  Router