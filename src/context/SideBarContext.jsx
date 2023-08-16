import { createContext, useContext, useEffect, useState } from "react";

const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  useEffect(() => {
    if (isSideBarActive) {
      document.getElementById("side").classList.add("active-sidebar");
      // document.documentElement.classList.remove("light-mode");
    } else {
      // document.documentElement.classList.add("light-mode");
      document.getElementById("side").classList.remove("active-sidebar");
    }
  }, [isSideBarActive]);

  function toggleSideBar() {
    setIsSideBarActive((active) => !active);
  }

  function closeSideBar() {
    setIsSideBarActive(false);
  }

  return (
    <SideBarContext.Provider
      value={{ isSideBarActive, toggleSideBar, closeSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

function useSideBar() {
  const context = useContext(SideBarContext);
  if (context === "undefined") {
    throw new Error("Sidebar Context Was Used OutSide Sidebar Provider");
  }
  return context;
}

export { useSideBar, SideBarProvider };
