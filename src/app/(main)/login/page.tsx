import React from 'react';
import { CardStackDemo } from '../_components/cards';

const Page = () => {
  return (
   <div className='flex flex-row flex-1'>
    <div className='w-[50%] flex flex-col pt-4 px-3 border-y-white'>
<h1 className='text-[25px]'>Welcome back to codeshare join in to learn and grow </h1>
<p className='mt-7'>codeshare is the only online dedicated platform where you can communicate to people around the world in realtime to chat about technological advancement</p>
   <CardStackDemo/>
    </div>
    <div className='w-[50%] h-[100vh]  flex flex-col p-4 items-center justify-center'>
      <h1>Log into your codeshare account</h1>
<div className='h-[40%] gap-4 flex flex-col'>
  <p>username :</p>
  <input type="text"className='p-2' placeholder='enter your username' />
  <p>password :</p>
  <input type="password" placeholder='enter your password'  className='p-2' />
</div>
    </div>
   </div>
  );
}

export default Page;
