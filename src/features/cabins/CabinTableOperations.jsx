import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <div className="flex flex-col items-end justify-end gap-[10px] lg:flex-row lg:items-center">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A-Z)" },
          { value: "name-desc", label: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (low first)" },
          { value: "regularPrice-desc", label: "Sort By Price (hight first)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity (low first)" },
          {
            value: "maxCapacity-desc",
            label: "Sort By Capacity (hight first)",
          },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
