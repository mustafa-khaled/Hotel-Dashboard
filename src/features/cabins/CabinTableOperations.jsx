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
          { value: "all", lapel: "All" },
          { value: "no-discount", lapel: "No Discount" },
          { value: "with-discount", lapel: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", lapel: "Sort By Name (A-Z)" },
          { value: "name-desc", lapel: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", lapel: "Sort By Price (low first)" },
          { value: "regularPrice-desc", lapel: "Sort By Price (hight first)" },
          { value: "maxCapacity-asc", lapel: "Sort By Capacity (low first)" },
          {
            value: "maxCapacity-desc",
            lapel: "Sort By Capacity (hight first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
