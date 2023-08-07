import styles from "./ErrorFallback.module.css";

function ErrorFallback() {
  return <main className={styles["error-fallback"]}></main>;
}

function Box() {
  return <div className={styles.box}></div>;
}
