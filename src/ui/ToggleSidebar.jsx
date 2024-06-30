import { AiOutlineBars } from "react-icons/ai";

function ToggleSidebar({ toggleSidebar }) {
  return (
    <div
      onClick={toggleSidebar}
      className="flex cursor-pointer items-center justify-center gap-[20px] md:hidden"
    >
      <AiOutlineBars className="text-xl" />
    </div>
  );
}

export default ToggleSidebar;
