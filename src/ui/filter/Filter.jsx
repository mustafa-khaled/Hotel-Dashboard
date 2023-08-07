import styles from "./Filter.module.css";

const StyledFilter = ({ children }) => {
  return <div className={styles.filter}>{children}</div>;
};

const FilterButton = ({ active, children, onClick }) => {
  return (
    <button
      className={`${styles["filter-button"]} ${active ? styles.active : ""}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export { StyledFilter, FilterButton };
