import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import Button from "../../ui/button/Button";
import styles from "./CabinRow.module.css";
import ButtonGroup from "../../ui/buttonGroup/ButtonGroup";
import CreateCabinForm from "./CreateCabinForm";

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const {
    id: cabinId,
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
  } = cabin;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin Successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <>
      <div className={styles["table-row"]} role="row">
        <img className={styles["row-image"]} src={image} alt={name} />
        <div className={styles.cabin}>{name}</div>
        <div>Fits Up To {maxCapacity} Guest</div>
        <div className={styles.price}>{formatCurrency(regularPrice)}</div>
        <div className={styles.discount}>{formatCurrency(discount)}</div>
        <ButtonGroup>
          <Button
            disabled={isDeleting}
            size="small"
            onClick={() => setShowForm((show) => !show)}>
            Edit
          </Button>

          <Button
            onClick={() => mutate(cabinId)}
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
