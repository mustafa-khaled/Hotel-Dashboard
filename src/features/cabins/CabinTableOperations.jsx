import { useTranslation } from "react-i18next";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col items-end justify-end gap-[10px] lg:flex-row lg:items-center">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: t("rooms.filter.all") },
          { value: "no-discount", label: t("rooms.filter.noDiscount") },
          { value: "with-discount", label: t("rooms.filter.withDiscount") },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: t("rooms.filter.sortByNameA-Z") },
          { value: "name-desc", label: t("rooms.filter.sortByNameZ-A") },
          {
            value: "regularPrice-asc",
            label: t("rooms.filter.sortByLowPrice"),
          },
          {
            value: "regularPrice-desc",
            label: t("rooms.filter.sortByHightPrice"),
          },
          {
            value: "maxCapacity-asc",
            label: t("rooms.filter.sortByLowCapacity"),
          },
          {
            value: "maxCapacity-desc",
            label: t("rooms.filter.sortByHightCapacity"),
          },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
