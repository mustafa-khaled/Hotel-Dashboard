import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <Row type="horizontal">
        <Heading>{t("rooms.allRooms")}</Heading>
        <AddCabin />
      </Row>
      <CabinTableOperations />
      {/* <CabinTable /> */}
    </div>
  );
}

export default Cabins;
