import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddBooking from "../features/bookings/AddBooking";

function Bookings() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("bookings.allBookings")}</Heading>
        <AddBooking />
      </div>

      <BookingTableOperations />
      <BookingTable />
    </div>
  );
}

export default Bookings;
