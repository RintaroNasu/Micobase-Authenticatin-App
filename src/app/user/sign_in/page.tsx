"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SkeltonButton } from "@/components/buttons/SkeltonButton";
import { signIn } from "@/utils/api/auth";
import { errorToast, successToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sign_in() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  const submit = async () => {
    const res = await signIn({ email, password });
    const token = res?.token;

    if (token) {
      localStorage.setItem("access_token", token);
      successToast("ログインに成功しました。");
      router.push("/user/dashboard");
    } else {
      errorToast("メールアドレスまたはパスワードが間違っています。");
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="mx-auto w-[300px] text-center">
        <div className="text-3xl font-semibold text-[rgba(0,164,150,1)]">ログイン画面</div>
        <form onSubmit={onSubmit} className="mt-8 w-full flex flex-col items-center mb-5 gap-4">
          <input onChange={onChangeEmail} type="email" placeholder="メールアドレス" className="mb-3 rounded-[4px]" />
          <input onChange={onChangePassword} type="password" placeholder="パスワード" className="mb-3 rounded-[4px]" />
          <PrimaryButton disabled={!email || !password}>ログイン</PrimaryButton>
        </form>
      </div>
      <SkeltonButton href="/">ホームへ</SkeltonButton>
    </div>
  );
}
