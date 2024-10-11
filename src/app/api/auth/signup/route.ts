import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return NextResponse.json(user);
  } catch (e) {
    return NextResponse.json(e);
  }
}
