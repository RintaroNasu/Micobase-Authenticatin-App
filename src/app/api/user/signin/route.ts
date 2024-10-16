import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return NextResponse.json({ error: "ユーザーが見つかりません" }, { status: 404 });
    }
    if (user.password !== password) {
      return NextResponse.json({ error: "パスワードが間違っています" }, { status: 401 });
    }
    if (JWT_SECRET) {
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
      return NextResponse.json({ message: "ログイン成功", user, token }, { status: 200 });
    }
  } catch (e) {
    console.error("ログインエラー:", e);
    return NextResponse.json({ error: "ログイン処理中にエラーが発生しました" }, { status: 500 });
  }
}
