import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/modal/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [t] = useTranslation();

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabinForm">
          <Button>{t("rooms.addRoom")}</Button>
        </Modal.Open>

        <Modal.Window name="cabinForm">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
