import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

import Table from "../../ui/table/Table";
import Button from "../../ui/button/Button";
import styles from "./CabinRow.module.css";
import ButtonGroup from "../../ui/buttonGroup/ButtonGroup";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/modal/Modal";
import ConfirmDelete from "../../ui/confirmDelete/ConfirmDelete";

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
      <ButtonGroup>
        <Button
          size="small"
          variation="secondary"
          disabled={isCreating}
          onClick={() => handleDuplicate()}>
          <i className="fa-regular fa-copy"></i>
        </Button>
        <Modal>
          {/* Edit */}

          <Modal.Open opens="edit">
            <Button disabled={isDeleting} size="small">
              <i className="fa-solid fa-pen"></i>
            </Button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
          {/* Delete */}

          <Modal.Open opens="delete">
            <Button variation="danger" size="small">
              <i className="fa-solid fa-trash"></i>
            </Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resource={`Cabin ${name}`}
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </Table.Row>
  );
}

export default CabinRow;
