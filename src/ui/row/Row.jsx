import styles from "./Row.module.css";

const Row = ({ type, children }) => {
  return <div className={`${styles.row} ${styles[type]}`}>{children}</div>;
};

Row.defaultProps = {
  type: "vertical",
};

export default Row;
