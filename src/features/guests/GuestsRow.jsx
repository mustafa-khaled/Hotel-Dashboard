import { useDeleteGuest } from "./useDeleteGuest";
import ConfirmDelete from "../../ui/confirmDelete/ConfirmDelete";
import Menus from "../../ui/menus/Menus";
import Modal from "../../ui/modal/Modal";
import Table from "../../ui/table/Table";
import CreateGuestForm from "./CreateGuestForm.jsx";

function GuestsRow({ guests }) {
  const { deleteGuest, isDeleting } = useDeleteGuest();

  const { id, fullName, email, nationality } = guests;

  return (
    <Table.Row columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <div></div>
      <div>{id}</div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{nationality}</div>

      <Modal>
        <Menus>
          <Menus.Toggle />
          <Menus.List>
            <Modal.Open opens="edit">
              <Menus.Button icon={<i className="fa-solid fa-pen"></i>}>
                Edit
              </Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<i className="fa-solid fa-trash"></i>}>
                Delete
              </Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="edit">
            <CreateGuestForm guestToEdit={guests} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resource={`Guest ${fullName}`}
              disabled={isDeleting}
              onConfirm={() => deleteGuest(id)}
            />
          </Modal.Window>
        </Menus>
      </Modal>
    </Table.Row>
  );
}

export default GuestsRow;
