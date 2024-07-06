import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/modal/Modal";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking() {
  const [t] = useTranslation();

  return (
    <div>
      <Modal>
        <Modal.Open opens="bookingForm">
          <Button size="medium">{t("bookings.addBooking")}</Button>
        </Modal.Open>

        <Modal.Window name="bookingForm">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;
