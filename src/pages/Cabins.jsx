import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("rooms.allRooms")}</Heading>
        <AddCabin />
      </div>
      <CabinTableOperations />
      {/* <CabinTable /> */}
    </div>
  );
}

export default Cabins;
