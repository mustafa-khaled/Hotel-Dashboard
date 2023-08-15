import styles from "./Header.module.css";
import SpinnerMini from "../spinnerMini/SpinnerMini";

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
        <p>User</p>
      </div>
    </header>
  );
}

export default Header;
