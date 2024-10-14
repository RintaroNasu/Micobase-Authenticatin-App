type Props = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const PrimaryButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`rounded-[4px] bg-[rgba(0,164,150,1)] font-semibold text-white px-4 py-2 
    ${props.disabled ? "cursor-not-allowed bg-[rgba(0,164,150,0.34)]" : "hover:bg-[rgba(0,106,118,1)]"} 
    ${props.className}`}
    >
      {props.children}
    </button>
  );
};
