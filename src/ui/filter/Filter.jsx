import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";

function FilterButton({ active, children, onClick, disabled }) {
  return (
    <button
      className={`${styles["filter-button"]} ${active ? styles.active : ""}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

function Filter({ filterField, options }) {
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
    <div className={styles.filter}>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={option.value === filter}
          disabled={option.value === filter}>
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

export default Filter;
