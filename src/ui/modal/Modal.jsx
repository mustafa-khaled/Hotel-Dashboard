// Reusable Modal  Component Using Compound Component Pattern

import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutesideClick";
import styles from "./Modal.module.css";

const ModalContext = createContext();

function Modal({ children, onClose }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: opensWindowName, children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  // Custom Hook To Close Modal
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className={styles["modal-overlay"]}>
      <div className={styles.modal} ref={ref}>
        <button className={styles["modal-button"]} onClick={close}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
