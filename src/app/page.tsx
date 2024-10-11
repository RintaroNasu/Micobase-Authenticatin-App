import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-2 mt-10">
      <div>
        <Link href="/user/sign_in" className="rounded-[4px] bg-[rgba(0,164,150,1)] py-2 font-semibold text-white hover:bg-[rgba(0,106,118,1)] disabled:bg-[rgba(0,164,150,1) ml-2 h-11 w-[100px] px-4">
          ログイン
        </Link>
      </div>
      <div>
        <Link href="/user/sign_up" className="rounded-[4px] border border-fg-primary bg-white py-2 font-semibold text-fg-primary hover:bg-gray-300 disabled:opacity-[0.38] ml-2 h-11 w-[100px] px-4">
          新規登録
        </Link>
      </div>
    </div>
  );
}
