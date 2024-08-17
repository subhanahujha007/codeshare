import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();

    try {
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User does not exist", status: 401 }), { status: 401 });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return new NextResponse(JSON.stringify({ message: "Incorrect username or password", status: 401 }), { status: 401 });
        }

        return new NextResponse(JSON.stringify({ message: "User logged in", status: 200 }), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong", status: 500 }), { status: 500 });
    }
}
