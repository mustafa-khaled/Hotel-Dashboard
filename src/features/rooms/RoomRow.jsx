import Table from "../../ui/Table";
import AddEditRoom from "./AddEditRoom";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

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
        <div className="flex items-center gap-[10px]">
          <AddEditRoom roomToEdit={room}>
            <CiEdit className="action-style" />
          </AddEditRoom>

          <button className="action-style">
            <AiOutlineDelete />
          </button>

          <button className="action-style">
            <BiShow />
          </button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default RoomRow;
