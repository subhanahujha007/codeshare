"use client"
import { ModeToggle } from '@/components/ui/dark-mode'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const route=useRouter()
  return (
    <div className="w-full p-4 font-bold text-xl flex justify-between">
<div className='hover:underline cursor-pointer' onClick={()=>route.push("/")}>
    Codeshare
</div>

<div className="gap-4 flex">
<Link href="/signup">  <Button variant="ghost" >Sign up</Button></Link>
  <Link href="/login">  <Button variant="ghost" >Log in</Button></Link>
    <ModeToggle/>
</div>

    </div>
  )
}

export default Navbar