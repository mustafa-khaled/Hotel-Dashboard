import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.navLink} to="/dashboard">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/bookings">
            <i className="fa-regular fa-rectangle-list"></i>
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/cabins">
            <i className="fa-solid fa-house-chimney-user"></i>
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/users">
            <i className="fa-solid fa-users"></i>
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/settings">
            <i className="fa-solid fa-gears"></i>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
