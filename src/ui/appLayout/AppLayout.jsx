import { Outlet } from "react-router-dom";
import { useSideBar } from "../../context/SideBarContext";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const { isSideBarActive, closeSideBar } = useSideBar();

  return (
    // <div className={styles.app}>
    //   <Header />
    //   <Sidebar />
    //   <main>
    //     <Outlet />
    //   </main>
    //   <div
    //     className={`${styles.overLay} ${isSideBarActive ? styles.active : ""}`}
    //     onClick={closeSideBar}></div>
    // </div>

    <div>
      <div>
        <Sidebar />
        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
