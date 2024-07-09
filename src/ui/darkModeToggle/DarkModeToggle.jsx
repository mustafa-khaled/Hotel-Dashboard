import { useDarkMode } from "../../context/DarkModeContext";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-colorGrey hover:text-colorBrand"
    >
      {isDarkMode ? <LuSun /> : <FaRegMoon />}
    </div>
  );
}

export default DarkModeToggle;
