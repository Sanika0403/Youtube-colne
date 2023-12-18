import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex flex-col sm:flex-row">
    <Sidebar className="w-full sm:w-48" />
    <Outlet className="flex-grow" />
  </div>
  
  )
}

export default Body