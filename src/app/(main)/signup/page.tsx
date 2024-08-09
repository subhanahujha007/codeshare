import React from 'react'
import { Button } from '@/components/ui/button'
import { TabsDemo } from '../_components/tabsdemo'
const page = () => {
  return (
    <div className='flex flex-row'>
      
      <div className='w-[30%] flex flex-col p-2 mx-auto'> 
      <h1 className='text-[30px]'>Welcome to codeshare !!</h1>
        <p>please fill the form to sign in </p>
         <div className='max-w-[300px] gap-4 flex flex-col'>   <p>username :</p>
            <input type="text" className="border-2 rounded-xl border-gray-400 p-2"/>
            <p>password :</p>
            <input type="password" className="border-2 rounded-xl border-gray-400 p-2"/>
            <p>comfirm password :</p>
            <input type="password" className="border-2 rounded-xl border-gray-400 p-2"/>
            <Button>Sign in</Button>
            </div></div>
            <div className='width-[70%] p-2 mx-auto'>
              <TabsDemo/>
            </div>
    </div>
  )
}

export default page