import { ModeToggle } from '@/components/ui/dark-mode'
import React from 'react'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
    <div className="w-full p-4 font-bold text-xl flex justify-between">
<div>
    Codeshare
</div>

<div className="gap-4 flex">
    <Button variant="ghost" >Log in</Button>
    <ModeToggle/>
</div>

    </div>
  )
}

export default Navbar