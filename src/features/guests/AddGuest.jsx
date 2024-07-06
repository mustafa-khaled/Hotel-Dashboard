import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/modal/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddGuest() {
  const [t] = useTranslation();

  return (
    <div>
      <Modal>
        <Modal.Open opens="guestForm">
          <Button>{t("guests.addNewGuests")}</Button>
        </Modal.Open>

        <Modal.Window name="guestForm">
          <CreateGuestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddGuest;
