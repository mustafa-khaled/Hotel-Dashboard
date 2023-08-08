import styles from "./Button.module.css";

const Button = ({ size, variation, children, onClick, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${styles.button} ${styles[size]} ${styles[variation]}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
