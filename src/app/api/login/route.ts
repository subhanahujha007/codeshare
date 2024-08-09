import { NextRequest ,NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcryptjs"
const prisma=new PrismaClient()
export async function POST(request:NextRequest) {
    const {username,password}=await request.json()
try {
    const result=prisma.user.findUnique(username)
    if(!result){
        return  new NextRequest(JSON.stringify({message:"user does not exist",status:401}))
    }
    const hashedPassword=await bcrypt.hash(password,10)
    if(!hashedPassword){
       return  new NextRequest(JSON.stringify({message:"incorrect username or password",status:401}))
    }
    return new NextResponse(JSON.stringify({message:"user logged in",status:200}))
} catch (error) {
    return new NextResponse(JSON.stringify({message:"something went wrong",status:500}))
}
}