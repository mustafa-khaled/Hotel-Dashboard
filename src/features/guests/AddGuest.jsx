import Button from "../../ui/button/Button";
import Modal from "../../ui/modal/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddGuest() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="guestForm">
          <Button>Add New Guest</Button>
        </Modal.Open>

        <Modal.Window name="guestForm">
          <CreateGuestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddGuest;
