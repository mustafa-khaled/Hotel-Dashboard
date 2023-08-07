import styles from "./Select.module.css";

const Select = ({ type, children }) => {
  return (
    <select
      className={`${styles.select} ${type === "white" ? styles.white : ""}`}>
      {children}
    </select>
  );
};

export default Select;
