import { useDarkMode } from "../../context/DarkModeContext";
import ButtonIcon from "../buttonIcon/ButtonIcon";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-regular fa-moon"></i>
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
