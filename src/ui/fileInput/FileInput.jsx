import styles from "./FileInput.module.css";

function FileInput({ id }) {
  return <input className={styles["file-input"]} id={id} />;
}

export default FileInput;
