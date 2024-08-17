"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import axios from "axios"
import { useRouter } from 'next/navigation'
import { TabsDemo } from '../_components/tabsdemo'
import { toast } from 'sonner'
const Page = () => {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")
  const [error,seterror]=useState("")
  const route=useRouter()
  const handlesubmit=async(e:any)=>{
e.preventDefault()
if(username===""||password===""||confirmpassword===""){
seterror("please fill the form") 
toast.warning("fill all the feilds")
return
}
if(password!=confirmpassword){
  seterror("password not match")
  toast.error("password mismatch")
  return
}try {
  
  const response=await axios.post('http://localhost:3000/api/signup',{
    username:username,
    password:password
  })
  console.log(response)
  if(response.status==200){
   toast.success("User created successfully")
    setusername("");
    setpassword("");
    setconfirmpassword("");
    seterror("");
route.push("/")
  }
} catch (error) {
  seterror("failed to sign up please try again")
  toast.error("error has occured")
}
}
  return (
    <div className='flex flex-row'>
      
      <div className='w-[30%] flex flex-col p-2 mx-auto'> 
      <h1 className='text-[30px]'>Welcome to codeshare !!</h1>
        <p>please fill the form to sign in </p>
       
         <div className='max-w-[300px] gap-4 flex flex-col'>   <p>username :</p>
            <input type="text" className="border-2 rounded-xl border-gray-400 p-2" onChange={(e)=>setusername(e.target.value)} />
            <p>password :</p>
            <input type="password" className="border-2 rounded-xl border-gray-400 p-2" onChange={(e)=>setpassword(e.target.value)}/>
            <p>comfirm password :</p>
            <input type="password" className="border-2 rounded-xl border-gray-400 p-2" onChange={(e)=>setconfirmpassword(e.target.value)}/>
            {error && <p className='mx-auto text-lg text-red-800'>{error}</p> }
            <Button onClick={handlesubmit} >Sign in</Button>
            </div></div>
            <div className='width-[70%] p-2 mx-auto'>
              <TabsDemo/>
            </div>
    </div>
  )
}

export default Page