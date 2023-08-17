import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Logo.module.css";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={styles.logo}>
      <img
        src={isDarkMode ? "./public/logo-light.png" : "./public/logo-dark.png"}
        alt="Logo"
        className={styles["logo-image"]}
      />
    </div>
  );
}

export default Logo;
