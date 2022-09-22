import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="p-50 h-1/2">
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default Layout