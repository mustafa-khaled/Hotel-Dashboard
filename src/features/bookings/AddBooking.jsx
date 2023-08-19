import Button from "../../ui/button/Button";
import Modal from "../../ui/modal/Modal";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="bookingForm">
          <Button>Add New Booking</Button>
        </Modal.Open>

        <Modal.Window name="bookingForm">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;
