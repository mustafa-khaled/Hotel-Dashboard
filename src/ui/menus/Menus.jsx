import styles from "./Menus.module.css";

//  StyledMenu

function Menu() {
  return <div className={styles.menu}></div>;
}

//  StyledToggle

function Toggle() {
  return <button className={styles.toggle}></button>;
}

const List = ({ position, children }) => {
  return (
    <ul className={styles.list} style={{ right: position.x, top: position.y }}>
      {children}
    </ul>
  );
};

export default List;

//  StyledButton

function Button() {
  return <button className={styles["menus-button"]}></button>;
}
