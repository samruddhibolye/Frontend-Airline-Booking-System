import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import About from './About'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        
        
        
    </div>
  )
}

export default Layout