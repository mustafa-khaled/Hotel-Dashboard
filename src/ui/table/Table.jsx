import styles from "./Table.module.css";

function Table() {
  return <div className={styles.table}></div>;
}

const CommonRow = ({ columns, children }) => {
  return (
    <header className="common-row" style={{ gridTemplateColumns: columns }}>
      {children}
    </header>
  );
};

const StyledHeader = ({ columns, children }) => {
  return (
    <CommonRow columns={columns} className={styles["table-header"]}>
      {children}
    </CommonRow>
  );
};

function Body() {
  return <section className={styles.body}></section>;
}

const StyledRow = ({ columns, children }) => {
  return (
    <CommonRow columns={columns} className={styles["table-row"]}>
      {children}
    </CommonRow>
  );
};

const Footer = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

const EmptyP = () => {
  return <p className={styles["empty-p"]}></p>;
};
