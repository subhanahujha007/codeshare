"use client"
import React from 'react'
import Navbar from './_components/Navbar'

const Mainlayout = ({children}:{children:React.ReactNode})=> {
  return (
    <div
    className="min-h-full"
    >
          <Navbar/>
        {children}
       

    </div>
  )
}

export default Mainlayout