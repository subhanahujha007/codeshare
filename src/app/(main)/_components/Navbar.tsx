import { ModeToggle } from '@/components/ui/dark-mode'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="w-full p-4 font-bold text-xl flex justify-between">
<div>
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