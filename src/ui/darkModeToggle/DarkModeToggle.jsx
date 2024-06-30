import { useDarkMode } from "../../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="bg-colorGrey hover:text-colorBrand flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full"
    >
      {isDarkMode ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-regular fa-moon"></i>
      )}
    </div>
  );
}

export default DarkModeToggle;
