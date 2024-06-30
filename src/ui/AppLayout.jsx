import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <div className="text-textColor flex">
      <div className="w-[300px]">
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
      </div>
      <div className="w-full">
        <Header toggleSidebar={toggleSidebar} />
        <main className="bg-colorGrey h-[calc(100vh-70px)] overflow-y-auto p-[10px] md:p-[15px]">
          Main Content
          {/* <Outlet /> */}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
