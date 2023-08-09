import styles from "./FormRow.module.css";

const FormRow = ({ label, error, children, orientation }) => {
  return (
    <div
      className={`${styles["form-row"]} ${
        orientation === "vertical" ? styles.vertical : styles.horizontal
      }`}>
      {label && (
        <label htmlFor={children.props.id} className={styles.label}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default FormRow;
