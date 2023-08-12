import Button from "../../ui/button/Button";
import Modal from "../../ui/modal/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabinForm">
          <Button>Add New Cabin</Button>
        </Modal.Open>

        <Modal.Window name="cabinForm">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
