import { useTranslation } from "react-i18next";
import AddGuest from "../features/guests/AddGuest";
import GuestsOperations from "../features/guests/GuestsOperations";
import GuestsTable from "../features/guests/GuestsTable";
import Heading from "../ui/Heading";

function Guests() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("guests.allGuests")}</Heading>
        <AddGuest />
      </div>
      <GuestsOperations />
      {/* <GuestsTable /> */}
    </div>
  );
}

export default Guests;
