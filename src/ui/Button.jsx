export default function Button({
  children,
  type = "button",
  onClick,
  variation = "colorBrand",
  Font = "text-base font-bold h-[45px]",
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`w-full rounded-md border ${Font} text-bgColor transition-all ${
        variation === "secondary" && !disabled
          ? `border-darkB text-darkB bg-colorGrey2 hover:border-colorBrand ${!disabled && "hover:text-bgColor hover:bg-colorBrand"}`
          : `bg-colorBrand ${!disabled && "hover:bg-opacity-[0.8]"}`
      } ${disabled && "cursor-not-allowed border-slate-400 bg-slate-400"}`}
    >
      {children}
    </button>
  );
}
