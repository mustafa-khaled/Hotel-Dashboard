import { useTranslation } from "react-i18next";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal";
import ConfirmMessage from "../ConfirmMessage";

function LogoutOutBtn() {
  const [t] = useTranslation();

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("USER_TOKEN");
    navigate("/login", { replace: true });
  }

  return (
    <Modal>
      <Modal.Open opens="productConfirm">
        <li className="cursor-pointer">
          <div className="flex items-center gap-[15px] rounded-md bg-colorGrey p-[13px] text-lg">
            <IoLogOut />
            <span>{t("sidebar.logout")}</span>
          </div>
        </li>
      </Modal.Open>

      <Modal.Window name="productConfirm">
        <ConfirmMessage
          message={t("general.logoutMessage")}
          onConfirm={logout}
        />
      </Modal.Window>
    </Modal>
  );
}

export default LogoutOutBtn;
