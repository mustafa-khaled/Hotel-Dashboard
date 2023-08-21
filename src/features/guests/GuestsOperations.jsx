import { useState, useCallback } from "react";
import TableOperations from "../../ui/tableOperations/TableOperations";
import { useSearchParams } from "react-router-dom";
import { debounce } from "../../utils/helpers";

function GuestsOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(search);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value.length >= 3 || value === "") {
        searchParams.set("search", value);
        setSearchParams(searchParams);
      }
    }, 300),
    []
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  }

  return (
    <TableOperations>
      <input
        className="form-input"
        placeholder="Search By Name"
        value={searchValue}
        onChange={handleChange}
      />
    </TableOperations>
  );
}

export default GuestsOperations;
