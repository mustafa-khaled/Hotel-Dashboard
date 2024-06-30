import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <img
        src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"}
        alt="Logo"
        className="mx-auto w-[200px]"
      />
    </div>
  );
}

export default Logo;
