import styles from "./Checkbox.module.css";

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
}

export default Checkbox;
