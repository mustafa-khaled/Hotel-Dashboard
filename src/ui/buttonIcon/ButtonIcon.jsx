import styles from "./ButtonIcon.module.css";

function ButtonIcon({ children, disabled, onClick }) {
  return (
    <button className={styles.buttonIcon} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonIcon;
