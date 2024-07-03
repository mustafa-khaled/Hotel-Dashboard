import { useTranslation } from "react-i18next";
import Button from "../Button";

export default function Pagination({
  currentPage,
  prevPage,
  paginate,
  totalPages,
  nextPage,
}) {
  const [t] = useTranslation();

  let displayPageNumbers = [];

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      displayPageNumbers.push(i);
    }
  } else if (currentPage <= 2) {
    displayPageNumbers = [1, 2, 3];
  } else if (currentPage >= totalPages - 1) {
    displayPageNumbers = [totalPages - 2, totalPages - 1, totalPages];
  } else {
    displayPageNumbers = [currentPage - 1, currentPage, currentPage + 1];
  }

  return (
    <div className="my-[15px] flex items-center justify-center">
      <div className="flex items-center gap-[10px]">
        <div className="w-[70px]">
          <Button disabled={currentPage === 1} onClick={prevPage}>
            {t("general.back")}
          </Button>
        </div>

        <div className="flex items-center gap-[10px]">
          {currentPage > 2 && totalPages > 3 && (
            <>
              <div
                className="bg-primary text-bgColor flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-opacity-[0.6] text-sm"
                onClick={() => paginate(1)}
              >
                1
              </div>
              <div className="flex h-[25px] w-[25px] items-center justify-center text-sm">
                ...
              </div>
            </>
          )}
          {displayPageNumbers.map((number) => (
            <div
              key={number}
              className={`bg-primary text-bgColor flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full text-sm ${
                currentPage === number
                  ? "bg-opacity-[1] font-bold"
                  : "bg-opacity-[0.6]"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </div>
          ))}
          {currentPage < totalPages - 1 && totalPages > 3 && (
            <>
              <div className="flex h-[25px] w-[25px] items-center justify-center text-sm">
                ...
              </div>
              <div
                className="bg-primary text-bgColor flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-opacity-[0.6] text-sm"
                onClick={() => paginate(totalPages)}
              >
                {totalPages}
              </div>
            </>
          )}
        </div>

        <div className="w-[70px]">
          <Button disabled={currentPage === totalPages} onClick={nextPage}>
            {t("general.next")}
          </Button>
        </div>
      </div>
    </div>
  );
}
