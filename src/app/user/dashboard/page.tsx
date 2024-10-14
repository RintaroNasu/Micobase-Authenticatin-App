"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { SkeltonButton } from "@/components/buttons/SkeltonButton";

type DecodedUser = {
  email: string;
  iat: number;
  exp: number;
};

export default function dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/");
    } else if (token.split(".").length === 3) {
      const decodedUser = jwtDecode<DecodedUser>(token);
      setEmail(decodedUser.email);
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-3xl font-semibold text-[rgba(0,164,150,1)]">Dashboard</h1>
      <div>
        <p>メールアドレス:{email}</p>
      </div>
      <SkeltonButton href="/">ホームへ</SkeltonButton>
    </div>
  );
}
