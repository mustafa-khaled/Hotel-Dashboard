import styles from "./Flag.module.css";

function Flag({ src, alt }) {
  return <img className={styles.flag} src={src} alt={alt} />;
}

export default Flag;
