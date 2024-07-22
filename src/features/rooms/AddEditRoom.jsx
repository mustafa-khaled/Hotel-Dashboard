import Modal from "../../ui/Modal";
import CreateRoomForm from "./CreateRoomForm";

function AddEditRoom({ children, roomToEdit }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="roomForm">{children}</Modal.Open>

        <Modal.Window name="roomForm">
          <CreateRoomForm roomToEdit={roomToEdit} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddEditRoom;
