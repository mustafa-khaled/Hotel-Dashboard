import styles from "./Modal.module.css";

function Modal() {
  return <div className={styles.modal}></div>;
}

function Overlay() {
  return <div className={styles["modal-overlay"]}></div>;
}

function ModalButton() {
  return <button className={styles["modal-button"]}></button>;
}
