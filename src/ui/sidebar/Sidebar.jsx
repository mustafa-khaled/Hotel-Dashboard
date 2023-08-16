import Logo from "../logo/Logo";
import MainNav from "../mainNav/MainNav";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside id="side" className={`${styles.sidebar} `}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
