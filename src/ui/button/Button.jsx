const Button = ({ size, variation, children, onClick, type, disabled }) => {
  let sizeClasses = "";
  let variationClasses = "";

  // Define size classes
  switch (size) {
    case "small":
      sizeClasses = "sm:text-sm text-xs py-1 px-2 uppercase font-semibold";
      break;
    case "medium":
      sizeClasses = "text-[1.4rem] py-3 px-4 font-medium";
      break;
    case "large":
      sizeClasses = "text-[1.6rem] py-3 px-6 font-medium";
      break;
    default:
      sizeClasses = "text-[1.4rem] py-3 px-4 font-medium";
  }

  // Define variation classes
  switch (variation) {
    case "primary":
      variationClasses = "text-brand-50 bg-colorBrand hover:bg-brand-700";
      break;
    case "secondary":
      variationClasses =
        "text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50";
      break;
    case "danger":
      variationClasses = "text-red-100 bg-red-700 hover:bg-red-800";
      break;
    default:
      variationClasses = "text-brand-50 bg-colorBrand hover:bg-brand-700";
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={`cursor-pointer rounded-md border-none text-center shadow-sm ${sizeClasses} ${variationClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
