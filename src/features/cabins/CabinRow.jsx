import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import styles from "./CabinRow.module.css";
import { toast } from "react-hot-toast";

function CabinRow({ cabin }) {
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
    <div className={styles["table-row"]} role="row">
      <img className={styles["row-image"]} src={image} alt={name} />
      <div className={styles.cabin}>{name}</div>
      <div>Fits Up To {maxCapacity} Guest</div>
      <div className={styles.price}>{formatCurrency(regularPrice)}</div>
      <div className={styles.discount}>{formatCurrency(discount)}</div>
      <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
        {isDeleting ? "Deleting" : "Delete"}
      </button>
    </div>
  );
}

export default CabinRow;
