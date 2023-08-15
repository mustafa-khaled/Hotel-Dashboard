import styles from "./Header.module.css";
import Logout from "../../features/authentication/Logout";

function Header({ active, setActive }) {
  return (
    <header className={styles.header}>
      <div className={`container `}>
        <div onClick={() => setActive(!active)} className={styles.icon}>
          {active ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <Logout />
      </div>
    </header>
  );
}

export default Header;
