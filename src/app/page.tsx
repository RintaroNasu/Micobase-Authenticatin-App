"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SkeltonButton } from "@/components/buttons/SkeltonButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("access_token");
    console.log("ログアウトしました");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {!isLoggedIn && (
        <>
          <SkeltonButton href="/user/sign_in">ログイン</SkeltonButton>
          <SkeltonButton href="/user/sign_up">新規登録</SkeltonButton>
        </>
      )}
      {isLoggedIn && (
        <>
          <PrimaryButton onClick={onClickLogout}>ログアウト</PrimaryButton>
          <SkeltonButton href="/user/dashboard">DashBoard</SkeltonButton>
        </>
      )}
    </div>
  );
}
