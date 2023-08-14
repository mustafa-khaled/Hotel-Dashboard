import { useSearchParams } from "react-router-dom";
import styles from "./Pagination.module.css";

const PAGE_SIZE = 10;

function Pagination({ active, count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <div className={styles.pagination}>
      <p className={styles.p}>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to
        <span>
          {currentPage === pageCount ? count : currentPage + PAGE_SIZE}
        </span>
        of <span>{count}</span>
        Results
      </p>

      <div className={styles.buttons}>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`${styles["pagination-button"]} ${
            active ? styles.active : ""
          }`}>
          <i className="fa-solid fa-chevron-left"></i>
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`${styles["pagination-button"]} ${
            active ? styles.active : ""
          }`}>
          <span>Next</span>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
