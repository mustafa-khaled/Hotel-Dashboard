import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    icon: <i className="fa-solid fa-house"></i>,
    to: "/dashboard",
  },
  {
    title: "Bookings",
    icon: <i className="fa-regular fa-rectangle-list"></i>,
    to: "/bookings",
  },
  {
    title: "Cabins",
    icon: <i className="fa-solid fa-house-chimney-user"></i>,
    to: "/cabins",
  },
  {
    title: "Guests",
    icon: <i className="fa-solid fa-user-group"></i>,
    to: "/guests",
  },

  {
    title: "Users",
    icon: <i className="fa-solid fa-users"></i>,
    to: "/users",
  },
  {
    title: "Settings",
    icon: <i className="fa-solid fa-gears"></i>,
    to: "/settings",
  },
];

function MainNav() {
  return (
    <nav className="links-list ltr:border-l rtl:border-r">
      <ul className="flex flex-col gap-[20px]">
        {links?.map((link) => {
          return (
            <li key={link.to}>
              <NavLink
                className="bg-colorGrey flex items-center gap-[10px] rounded-md p-[8px] text-lg"
                to={link.to}
              >
                {link.icon}
                <span>{link.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
