"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (!token) {
      router.push("/");
    }
  });
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/" className="rounded-[4px] bg-[rgba(0,164,150,1)] py-2 font-semibold text-white hover:bg-[rgba(0,106,118,1)] disabled:bg-[rgba(0,164,150,1) ml-2 h-11 w-[110px] px-4">
        ホームへ
      </Link>
      <div>
        <p>ログイン情報表示させる</p>
      </div>
    </div>
  );
}
