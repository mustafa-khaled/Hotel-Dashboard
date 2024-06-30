import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar({ showSidebar, closeSidebar }) {
  return (
    <aside
      className={`bg-colorGrey2 border-textColor flex h-[100vh] w-[300px] flex-col justify-center px-[20px]`}
    >
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
