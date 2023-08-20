import SortBy from "../../ui/sortBy/SortBy";
import TableOperations from "../../ui/tableOperations/TableOperations";

function GuestsOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A-Z)" },
          { value: "name-desc", label: "Sort By Name (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default GuestsOperations;
