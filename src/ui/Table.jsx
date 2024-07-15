const Table = ({ children }) => {
  return (
    <table className="w-full rounded-md border-[2px] border-colorGrey2 p-[10px] text-left text-sm rtl:text-right">
      {children}
    </table>
  );
};

const Header = ({ children }) => {
  return (
    <thead className="rounded-md bg-colorGrey text-xs uppercase">
      <tr>{children}</tr>
    </thead>
  );
};

const Body = ({ data, render }) => {
  return <tbody>{data.map(render)}</tbody>;
};

const Row = ({ children }) => {
  return (
    <tr className="border-b border-colorGrey bg-colorGrey2">{children}</tr>
  );
};

const Cell = ({ children, isHeader = false }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag scope={isHeader ? "col" : "row"} className="px-6 py-4">
      {children}
    </Tag>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
