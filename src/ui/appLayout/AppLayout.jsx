import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const [active, setActive] = useState(false);
  const closeSideBar = () => setActive(false);

  return (
    <div className={styles.app}>
      <Header active={active} setActive={setActive} />
      <Sidebar active={active} />
      <main>
        <Outlet />
      </main>
      <div
        className={`${styles.overLay} ${active ? styles.active : ""}`}
        onClick={closeSideBar}></div>
    </div>
  );
}

export default AppLayout;
