import styles from "./Button.module.css";

const Button = ({ size, variation, children }) => {
  const handleButtonClick = () => {};

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[variation]}`}
      onClick={handleButtonClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
