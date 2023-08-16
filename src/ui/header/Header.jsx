import styles from "./Header.module.css";
import Logout from "../../features/authentication/Logout";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../../features/authentication/UserAvatar";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

function Header({ active, setActive }) {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={`container `}>
        <div onClick={() => setActive(!active)} className={styles.icon}>
          <ButtonIcon>
            {active ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </ButtonIcon>
        </div>
        <div>
          <UserAvatar />
          <DarkModeToggle />

          <ButtonIcon onClick={() => navigate("/account")}>
            <i className="fa-regular fa-user"></i>
          </ButtonIcon>
          <Logout />
        </div>
      </div>
    </header>
  );
}

export default Header;
