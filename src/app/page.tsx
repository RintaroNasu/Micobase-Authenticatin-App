"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SkeltonButton } from "@/components/buttons/SkeltonButton";
import { successToast } from "@/utils/toast";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("access_token");
    successToast("ログアウトしました。");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10 mt-12">
        <p className="primary-title">MicroBase認証アプリ</p>
        <div className="flex justify-center items-center gap-5">
          {!isLoggedIn && status === "unauthenticated" && (
            <>
              <SkeltonButton href="/user/sign_in">ログイン</SkeltonButton>
              <SkeltonButton href="/user/sign_up">新規登録</SkeltonButton>
            </>
          )}
          {status === "authenticated" && (
            <>
              <PrimaryButton onClick={() => signOut()}>ログアウト</PrimaryButton>
              <SkeltonButton href="/user/dashboard">DashBoard</SkeltonButton>
            </>
          )}
          {isLoggedIn && status === "unauthenticated" && (
            <>
              <PrimaryButton onClick={onClickLogout}>ログアウト</PrimaryButton>
              <SkeltonButton href="/user/dashboard">DashBoard</SkeltonButton>
            </>
          )}
        </div>
      </div>
    </>
  );
}
