import Table from "../../ui/Table";
import AddEditRoom from "./AddEditRoom";

function RoomRow({ room }) {
  return (
    <Table.Row key={room.id}>
      <Table.Cell>
        <img
          src={room?.image}
          alt={room?.discription}
          className="h-[50px] w-[50px] rounded-md"
        />
      </Table.Cell>
      <Table.Cell>{room.name}</Table.Cell>
      <Table.Cell>{room.maxCapacity}</Table.Cell>
      <Table.Cell>{room.RegularPrice}</Table.Cell>
      <Table.Cell>{room.discount}</Table.Cell>
      <Table.Cell>
        <AddEditRoom roomToEdit={room}>
          <button>Edit</button>
        </AddEditRoom>

        <button>Delete</button>
      </Table.Cell>
    </Table.Row>
  );
}

export default RoomRow;
