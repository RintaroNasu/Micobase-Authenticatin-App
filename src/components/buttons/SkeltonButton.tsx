import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const SkeltonButton = (props: Props) => {
  return (
    <Link href={props.href} className="rounded-[4px] border border-fg-primary bg-white py-2 font-semibold text-fg-primary hover:bg-gray-300 disabled:opacity-[0.38] px-4 text-center ">
      {props.children}
    </Link>
  );
};
