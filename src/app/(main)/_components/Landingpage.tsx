import React from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
const Landingpage = () => {
  return (
    <center >
        <div className="max-w-4xl">
        <h1 className="font-bold text-[50px] mt-[30px]" >Discuss And Build A Community Around The Globe Dedicated To Online Tech Learing . Welcome To <span className="underline">Codeshare</span></h1>
        <div className='flex flex-row gap-4 justify-center'>
  
    <Link href="/chatroom"><Button>Enter Codeshare<ArrowRight/></Button></Link>

 
    <Link href="/chatroom"><Button>Get Codeshare For Free</Button></Link>  
 
  </div>
   </div>
    </center>
  )
}

export default Landingpage