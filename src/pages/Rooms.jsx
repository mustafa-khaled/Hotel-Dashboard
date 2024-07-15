import { useTranslation } from "react-i18next";

import Heading from "../ui/Heading";
import AddRoom from "../features/rooms/AddRoom";
import RoomTableOperations from "../features/rooms/RoomTableOperations";
import RoomsTable from "../features/rooms/RoomsTable";

function Rooms() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("rooms.allRooms")}</Heading>
        <AddRoom />
      </div>
      <RoomTableOperations />
      <RoomsTable />
    </div>
  );
}

export default Rooms;
