import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";

import Button from "../../ui/button/Button";
import styles from "./CabinRow.module.css";
import ButtonGroup from "../../ui/buttonGroup/ButtonGroup";
import CreateCabinForm from "./CreateCabinForm";
import { useCreateCabin } from "./useCreateCabin";

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
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
    <>
      <div className={styles["table-row"]} role="row">
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
            disabled={isDeleting}
            size="small"
            onClick={() => setShowForm((show) => !show)}>
            <i className="fa-solid fa-pen"></i>
          </Button>

          <Button
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            variation="danger"
            size="small">
            {isDeleting ? "Deleting" : <i className="fa-solid fa-trash"></i>}
          </Button>

          <Button
            size="small"
            variation="secondary"
            disabled={isCreating}
            onClick={() => handleDuplicate()}>
            <i className="fa-regular fa-copy"></i>
          </Button>
        </ButtonGroup>
      </div>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
