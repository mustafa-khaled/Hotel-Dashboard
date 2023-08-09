import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";

import Button from "../../ui/button/Button";
import styles from "./CabinRow.module.css";
import ButtonGroup from "../../ui/buttonGroup/ButtonGroup";
import CreateCabinForm from "./CreateCabinForm";

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
  } = cabin;

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
            Edit
          </Button>

          <Button
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            variation="danger"
            size="small">
            {isDeleting ? "Deleting" : "Delete"}
          </Button>
        </ButtonGroup>
      </div>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
