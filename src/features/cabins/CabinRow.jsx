import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

import Table from "../../ui/table/Table";
import styles from "./CabinRow.module.css";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/modal/Modal";
import ConfirmDelete from "../../ui/confirmDelete/ConfirmDelete";
import Menus from "../../ui/menus/Menus";

function CabinRow({ cabin }) {
  // Delete Cabin Hook
  const { isDeleting, deleteCabin } = useDeleteCabin();
  // Create (in this case duplicate) a Cabin
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    image,
    maxCapacity,
    regularPrice,
    description,
    discount,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy Of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      description,
      discount,
    });
  }

  return (
    <Table.Row columns=" 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <img className={styles["row-image"]} src={image} alt={name} />
      <div className={styles.cabin}>{name}</div>
      <div>Fits Up To {maxCapacity} Guest</div>
      <div className={styles.price}>{formatCurrency(regularPrice)}</div>
      {discount ? (
        <div className={styles.discount}>{formatCurrency(discount)}</div>
      ) : (
        <spa>&mdash;</spa>
      )}

      <Modal>
        <Menus>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button
              icon={<i className="fa-regular fa-copy"></i>}
              onClick={() => handleDuplicate()}>
              Duplicate
            </Menus.Button>

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
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resource={`Cabin ${name}`}
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Menus>
      </Modal>
    </Table.Row>
  );
}

export default CabinRow;
