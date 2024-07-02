import Button from "../../ui/Button";
import Modal from "../../ui/modal/Modal";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="bookingForm">
          <Button size="medium">Add New Booking</Button>
        </Modal.Open>

        <Modal.Window name="bookingForm">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;
