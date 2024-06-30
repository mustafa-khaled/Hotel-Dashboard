import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./darkModeToggle/DarkModeToggle";
import ToggleSidebar from "./ToggleSidebar";

function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <header className="bg-colorGrey2 flex h-[70px] items-center justify-between px-[10px] shadow-lg md:px-[20px]">
      <div className="flex items-center gap-[10px]">
        <ToggleSidebar toggleSidebar={toggleSidebar} />
        <UserAvatar />
      </div>
      <div className="flex items-center justify-center gap-[20px]">
        <DarkModeToggle />
        <div
          className="bg-colorGrey hover:text-colorBrand flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full"
          onClick={() => navigate("/account")}
        >
          <i className="fa-regular fa-user"></i>
        </div>
        <Logout />
      </div>
    </header>
  );
}

export default Header;
