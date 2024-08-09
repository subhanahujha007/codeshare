"use client"
import React, { useState } from 'react';
import { CardStackDemo } from '../_components/cards';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
const Page = () => {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState("")
  const route=useRouter()
  const handlesubmit=async(e:any)=>{
    e.preventDefault()
    if(username==="" || password === "" ){
      seterror("please fill the feilds")
      toast.warning("fill all the feilds")
      return
    }
   try {
     const response=await axios.post('http://localhost:3000/api/login',{
       username:username,
       password:password
     })
     if(response.status==200){
       toast.success("logged in succesfully")
       setusername("")
       setpassword("")
       seterror("")
       route.push("/")
     }
   } catch (error) {
    console.log(error)
    seterror("failed to login")
    toast.error("something went wrong")
   }
  }
  return (
   <div className='flex flex-row flex-1'>
     <div className='w-[30%]  flex flex-col p-4 gap-20 '>
      <h1 className='text-[27px]'>Log into your codeshare account</h1>
<div className='h-[40%] gap-4 flex flex-col max-w-[250px]'>
  <p>username :</p>
  <input type="text"className='p-2' placeholder='enter your username' onChange={(e)=>setusername(e.target.value)} />
  <p>password :</p>
  <input type="password" placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} className='p-2' />
{error && <p className='mx-auto text-red-800 text-lg'>{error}</p> }
<Button onClick={handlesubmit}>Log in</Button>
</div>
    </div>
    <div className='w-[70%] flex flex-col pt-4 px-3 border-y-white '>
<h1 className='text-[25px]'>Welcome back to codeshare join in to learn and grow </h1>
<p className='mt-2'>codeshare is the only online dedicated platform where you can communicate to people around the world in realtime to chat about technological advancement</p>
   <CardStackDemo/>
    </div>
   
   </div>
  );
}

export default Page;
