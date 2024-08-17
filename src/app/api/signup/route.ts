import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const creation = await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword,
                refreshtoken: "hithere"
            },
            select: {
                username: true
            }
        });

        return new NextResponse(JSON.stringify({ creation, status: 201 }), { status: 201 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong", status: 501 }), { status: 501 });
    }
}
