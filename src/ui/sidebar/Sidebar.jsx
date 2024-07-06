import { useOutsideClick } from "../../hooks/useOutesideClick";
import Logo from "../Logo";
import MainNav from "./MainNav";

function Sidebar({ showSidebar, closeSidebar }) {
  const ref = useOutsideClick(closeSidebar);

  return (
    <>
      <aside
        ref={ref}
        className={`fixed ${showSidebar ? "left-0" : "left-[-400px]"} top-0 z-50 flex h-[100vh] w-[300px] flex-col justify-center border-textColor bg-colorGrey2 px-[20px] transition-all md:static`}
      >
        <Logo />
        <MainNav closeSidebar={closeSidebar} />
      </aside>

      <div
        className={`md:hodden fixed left-0 top-0 w-full ${showSidebar ? "h-screen" : "h-0"} bg-[#00000080]`}
      />
    </>
  );
}

export default Sidebar;
