import { useSideBar } from "../../context/SideBarContext";
import ButtonIcon from "../buttonIcon/ButtonIcon";

function ActiveSidebar() {
  const { isSideBarActive, toggleSideBar } = useSideBar();

  return (
    <ButtonIcon onClick={toggleSideBar}>
      {isSideBarActive ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
    </ButtonIcon>
  );
}

export default ActiveSidebar;
