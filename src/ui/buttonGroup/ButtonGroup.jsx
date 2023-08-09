import styles from "./ButtonGroup.module.css";

function ButtonGroup({ children }) {
  return <div className={styles["button-group"]}>{children}</div>;
}

export default ButtonGroup;
