import styles from "./ConfirmDelete.module.css";
import Button from "../button/Button";
import Heading from "../heading/Heading";

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  return (
    <div className={styles.confirmDelete}>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
