import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

function FilterButton({ active, children, onClick, disabled }) {
  return (
    <button
      className={`p-[5px] lg:p-[6px] ${active ? "bg-colorBrand" : "bg-colorGrey"} rounded-sm text-sm lg:text-base ${disabled && "cursor-not-allowed"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function Filter({ filterField, options }) {
  const [t] = useTranslation();

  // Updating The URL Using "SearchParams" Provided By React Router
  const [searchParams, setSearchParams] = useSearchParams();
  // Get The  Value To use To Set A unique styles to the button
  const filter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-[10px] self-end rounded-sm bg-colorGrey2">
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={option.value === filter}
          disabled={option.value === filter}
        >
          {t(option.label)}
        </FilterButton>
      ))}
    </div>
  );
}

export default Filter;
