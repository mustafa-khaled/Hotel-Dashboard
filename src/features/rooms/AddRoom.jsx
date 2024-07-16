import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/modal/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddRoom() {
  const [t] = useTranslation();

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabinForm">
          <div className="w-[150px]">
            <Button>{t("rooms.addRoom")}</Button>
          </div>
        </Modal.Open>

        <Modal.Window name="cabinForm">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddRoom;
