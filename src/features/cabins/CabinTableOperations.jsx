// import SortBy from '../../ui/s';
import Filter from "../../ui/filter/Filter";
import SortBy from "../../ui/sortBy/SortBy";
import TableOperations from "../../ui/tableOperations/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
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
    </TableOperations>
  );
}

export default CabinTableOperations;
