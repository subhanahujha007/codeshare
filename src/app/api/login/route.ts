import { NextRequest ,NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient()
export async function POST(request:NextRequest) {
    const body=await request.json()

}