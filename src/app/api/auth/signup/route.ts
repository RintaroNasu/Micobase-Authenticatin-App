import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    if (JWT_SECRET) {
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
      return NextResponse.json({ message: "サインアップ成功", user, token }, { status: 200 });
    }
    return NextResponse.json(user);
  } catch (e) {
    return NextResponse.json(e);
  }
}
