import styles from "./Tag.module.css";

const Tag = ({ type, children }) => {
  return (
    <span className={`${styles.tag} ${styles[`tag-${type}`]}`}>{children}</span>
  );
};

export default Tag;
