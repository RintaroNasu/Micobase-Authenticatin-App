"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/");
    }
  });
  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-3xl font-semibold text-[rgba(0,164,150,1)]">Dashboard</h1>
      <div>
        <p>メールアドレス:{}</p>
      </div>
      <Link href="/" className="rounded-[4px] bg-[rgba(0,164,150,1)]  font-semibold text-white hover:bg-[rgba(0,106,118,1)] disabled:bg-[rgba(0,164,150,1) px-4 py-2 text-center">
        ホームへ
      </Link>
    </div>
  );
}
