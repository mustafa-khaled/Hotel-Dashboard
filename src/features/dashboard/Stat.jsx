import styles from "./dashboard.module.css";

function Stat({ icon, title, value, color }) {
  return (
    <div className={styles.stat}>
      <div className={styles.icon} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.value}> {value}</p>
    </div>
  );
}

export default Stat;
