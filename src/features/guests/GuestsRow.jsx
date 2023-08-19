import Table from "../../ui/table/Table";

function GuestsRow({ guests }) {
  const { id, fullName, email, nationality } = guests;

  return (
    <Table.Row columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <div></div>
      <div>{id}</div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{nationality}</div>
      <div></div>
    </Table.Row>
  );
}

export default GuestsRow;
