"use client"
import React from 'react'

const Mainlayout = ({children}:{children:React.ReactNode})=> {
  return (
    <div
    className="min-h-full"
    >
          
        {children}
       

    </div>
  )
}

export default Mainlayout