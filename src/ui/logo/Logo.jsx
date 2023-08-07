import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        src="/public/logo-dark.png"
        alt="Logo"
        className={styles["logo-image"]}
      />
    </div>
  );
}

export default Logo;
