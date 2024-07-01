import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <div className="flex text-textColor">
      <div className="md:w-[300px]">
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
      </div>
      <div className="w-full md:w-[calc(100%-300px)]">
        <Header toggleSidebar={toggleSidebar} />
        <main className="h-[calc(100vh-70px)] overflow-y-auto bg-colorGrey p-[10px] md:p-[15px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
