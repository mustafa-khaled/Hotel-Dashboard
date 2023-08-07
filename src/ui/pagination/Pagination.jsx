import styles from "./Pagination.module.css";

function Pagination() {
  return <div className={styles.pagination}></div>;
}

function P() {
  return <p className={styles.p}></p>;
}

function Buttons() {
  return <div className={styles.buttons}></div>;
}

const PaginationButton = ({ active, children }) => {
  return (
    <button
      className={`${styles["pagination-button "]} ${
        active ? styles.active : ""
      }`}>
      {children}
    </button>
  );
};
