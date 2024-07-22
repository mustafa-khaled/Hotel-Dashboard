import { useTranslation } from "react-i18next";

import Heading from "../ui/Heading";
import RoomTableOperations from "../features/rooms/RoomTableOperations";
import RoomsTable from "../features/rooms/RoomsTable";
import AddEditRoom from "../features/rooms/AddEditRoom";
import Button from "../ui/Button";

function Rooms() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("rooms.allRooms")}</Heading>
        <AddEditRoom>
          <div className="w-[150px]">
            <Button>{t("rooms.addRoom")}</Button>
          </div>
        </AddEditRoom>
      </div>
      <RoomTableOperations />
      <RoomsTable />
    </div>
  );
}

export default Rooms;
