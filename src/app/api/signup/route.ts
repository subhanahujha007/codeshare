import { NextRequest ,NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcryptjs"
const prisma=new PrismaClient()
export async function POST(request:NextRequest) {
    const {username,password}=await request.json()

    const hashedpassword=await bcrypt.hash(password,10)
    
   try {
     const creation=await prisma.user.create({
         data:{
             username:username,
             password:hashedpassword,
             refreshtoken:"hithere"
         },select:{
            username:true
         }
     })
     
 return new NextResponse(JSON.stringify({creation,statusbar:201}))
   } catch (error) {
    return new NextResponse(JSON.stringify({message:"something went wrong",status:501}))
   }
}