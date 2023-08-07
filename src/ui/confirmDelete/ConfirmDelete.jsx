import styles from "./ConfirmDelete.module.css";
import Button from "../button/Button";
import Heading from "./Heading";

function ConfirmDelete({ resource, onConfirm, disabled, closeModal }) {
  function handleConfirmClick() {}

  return (
    <div className={styles.confirmDelete}>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variation="danger"
          onClick={handleConfirmClick}
          disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
