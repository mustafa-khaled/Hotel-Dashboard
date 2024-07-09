import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { FaTimes } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutesideClick";

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
  const ref = useOutsideClick(close);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (name === openName) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [name, openName, close]);

  if (name !== openName) return null;

  return createPortal(
    <div>
      <div
        className={`fixed left-0 top-0 z-[102] h-full w-full bg-gray-300/10 backdrop-blur-sm`}
      ></div>

      <div className="fixed left-0 top-0 z-[103] h-full w-full">
        <div
          className="fixed left-[50%] top-[50%] z-50 max-h-[80vh] w-[90%] translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-lg bg-colorGrey2 p-[15px] shadow-md md:w-[750px] md:p-[20px]"
          ref={ref}
        >
          <button
            onClick={close}
            className="absolute left-[10px] top-[10px] text-textColor"
          >
            <FaTimes />
          </button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
