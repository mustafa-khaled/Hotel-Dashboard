import { useTranslation } from "react-i18next";
import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";

function BookingTableOperations() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col items-end justify-end gap-[10px] lg:flex-row lg:items-center">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: t("bookings.filter.all") },
          { value: "checked-out", label: t("bookings.filter.checkedOut") },
          { value: "checked-in", label: t("bookings.filter.checkedIn") },
          { value: "unconfirmed", label: t("bookings.filter.unconfirmed") },
        ]}
      />

      <SortBy
        options={[
          {
            value: "startDate-desc",
            label: t("bookings.filter.SortByRecentDate"),
          },
          {
            value: "startDate-asc",
            label: t("bookings.filter.SortByEarlierDate"),
          },
          {
            value: "totalPrice-desc",
            label: t("bookings.filter.SortByHighAmount"),
          },
          {
            value: "totalPrice-asc",
            label: t("bookings.filter.SortByLowAmount"),
          },
        ]}
      />
    </div>
  );
}

export default BookingTableOperations;
