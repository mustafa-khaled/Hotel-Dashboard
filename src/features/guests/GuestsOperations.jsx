import { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

function GuestsOperations() {
  const [t] = useTranslation();

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
    [],
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  }

  return (
    <div className="flex flex-col items-end justify-end gap-[10px] lg:flex-row lg:items-center">
      <input
        className="form-input"
        placeholder={t("guests.searchByName")}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default GuestsOperations;
