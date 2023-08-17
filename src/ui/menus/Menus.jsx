// Reusable Menus Component Using Compound Component Pattern
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../hooks/useOutesideClick";
import styles from "./Menus.module.css";

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);

  return (
    <MenuContext.Provider
      value={{ openId, close, open, position, setPosition }}>
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  const handleClick = (e) => {
    e.stopPropagation();
    openId === "" || openId !== id ? open(id) : close();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
  };

  return (
    <button className={styles.toggle} onClick={handleClick}>
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </button>
  );
}

function List({ children, id }) {
  const { openId, position, close } = useContext(MenuContext);

  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className={styles.list}
      style={{ right: position?.x, top: position?.y }}>
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick, disabled }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className={styles["menus-button"]}
        onClick={handleClick}
        disabled={disabled}>
        {icon}

        {children}
      </button>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
