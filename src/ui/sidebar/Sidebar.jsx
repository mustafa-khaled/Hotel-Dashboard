import Logo from "../logo/Logo";
import MainNav from "../mainNav/MainNav";
import styles from "./Sidebar.module.css";

function Sidebar({ active }) {
  return (
    <aside className={`${styles.sidebar} ${active ? styles.active : ""}`}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
