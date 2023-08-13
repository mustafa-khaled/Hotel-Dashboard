// import SortBy from '../../ui/s';
import Filter from "../../ui/filter/Filter";
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
    </TableOperations>
  );
}

export default CabinTableOperations;
