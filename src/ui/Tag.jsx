const Tag = ({ type, children }) => {
  let typeClasses = "";

  switch (type) {
    case "blue":
      typeClasses = "text-blue-700 bg-blue-200";
      break;
    case "green":
      typeClasses = "text-green-700 bg-green-200";
      break;
    case "silver":
      typeClasses = "text-gray-700 bg-gray-200";
      break;
    default:
      typeClasses = "";
  }

  return (
    <span
      className={`w-fit rounded-full px-2 py-1 text-xs font-semibold uppercase ${typeClasses}`}
    >
      {children}
    </span>
  );
};

export default Tag;
