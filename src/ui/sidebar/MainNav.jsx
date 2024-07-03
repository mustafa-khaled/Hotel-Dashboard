import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRectangleList, FaGears, FaUsersGear } from "react-icons/fa6";
import { FaLaptopHouse, FaUsers } from "react-icons/fa";

const links = [
  {
    title: "sidebar.dashboard",
    icon: <MdDashboard />,
    to: "/dashboard",
  },
  {
    title: "sidebar.bookings",
    icon: <FaRectangleList />,
    to: "/bookings",
  },
  {
    title: "sidebar.rooms",
    icon: <FaLaptopHouse />,
    to: "/cabins",
  },
  {
    title: "sidebar.guests",
    icon: <FaUsers />,
    to: "/guests",
  },

  {
    title: "sidebar.users",
    icon: <FaUsersGear />,
    to: "/users",
  },
  {
    title: "sidebar.settings",
    icon: <FaGears />,
    to: "/settings",
  },
];

function MainNav() {
  const [t] = useTranslation();

  return (
    <nav className="links-list">
      <ul className="flex flex-col gap-[10px]">
        {links?.map((link) => {
          return (
            <li key={link.to}>
              <NavLink
                className="flex items-center gap-[10px] rounded-md bg-colorGrey p-[8px] text-lg"
                to={link.to}
              >
                {link.icon}
                <span>{t(link.title)}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
