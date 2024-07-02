// Reusable Table Component Using Compound Component Pattern

import { createContext, useContext } from "react";
import styles from "./Table.module.css";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className={styles.table} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      columns={columns}
      className={styles["table-header"]}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      columns={columns}
      className={styles["table-row"]}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) {
    return <p className={styles["empty-p"]}>No Data To Show At The Moment</p>;
  }

  return <section className={styles.body}>{data.map(render)}</section>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
