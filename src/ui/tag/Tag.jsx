import styles from "./Tag.module.css";

const TagComponent = ({ type, children }) => {
  return (
    <span className={`${styles.tag} ${styles[`tag-${type}`]}`}>{children}</span>
  );
};

export default TagComponent;
