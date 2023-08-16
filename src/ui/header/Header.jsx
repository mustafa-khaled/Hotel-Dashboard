import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logout from "../../features/authentication/Logout";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import UserAvatar from "../../features/authentication/UserAvatar";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import ActiveSidebar from "../activeSidebar/activeSidebar";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={`container `}>
        <ActiveSidebar />

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
