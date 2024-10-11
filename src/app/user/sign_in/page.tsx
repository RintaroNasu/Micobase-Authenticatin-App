"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type User = {
  id: number;
  email: string;
  password: string;
};

export default function Sign_in() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<User>();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  const submit = async () => {
    const body = { email, password };
    try {
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const { message, user, error } = await res.json();
      setUsers(user);
      setMessage(message);
      setError(error);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto w-[300px] pt-[30vh] text-center">
        <div className="text-3xl font-semibold text-[rgba(0,164,150,1)]">ログイン画面</div>
        <form onSubmit={onSubmit} className="mt-8 w-full flex flex-col items-center">
          <input onChange={onChangeEmail} type="email" placeholder="メールアドレス" className="mb-3" />
          <input onChange={onChangePassword} type="password" placeholder="パスワード" className="mb-3" />
          <button
            type="submit"
            disabled={!email || !password}
            className={`rounded-[4px] py-1 font-semibold text-white ml-2 h-11 w-[100px] px-2 
              ${email && password ? "bg-[rgba(0,164,150,1)] hover:bg-[rgba(0,106,118,1)] cursor-pointer" : "bg-[rgba(0,164,150,0.6)] cursor-not-allowed"}
            `}
          >
            ログイン
          </button>
        </form>
      </div>
      <Link href="/" className="hover:bg-gray-300 rounded px-4 py-2">
        ホームへ
      </Link>
      <div>
        <p>状況:{message}</p>
        <p>ID: {users?.id}</p>
        <p>Email: {users?.email}</p>
        <p>Password: {users?.password}</p>
        <p>エラー: {error}</p>
      </div>
    </div>
  );
}
