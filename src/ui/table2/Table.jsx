import { useState } from "react";

import Pagination from "./Pagination";
import TableHead from "./TableHead";
import TableLoading from "./TableLoading";
import NoData from "./NoData";
import TableBody from "./TableBody";

const itemsPerPage = 5;

const Table = ({ loading, columns, actions, keyObjectData, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems =
    data?.length > 0 && data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="max-h-[calc(100vh-150px)] overflow-x-auto rounded-tl-[12px] rounded-tr-[12px]">
        <table className="min-w-full space-y-6">
          <TableHead columns={columns} />
          <TableLoading loading={loading} columns={columns} />
          <NoData data={data} loading={loading} columns={columns} />
          <TableBody
            data={data}
            loading={loading}
            currentItems={currentItems}
            keyObjectData={keyObjectData}
            actions={actions}
          />
        </table>
      </div>

      {data?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          prevPage={prevPage}
          pageNumbers={pageNumbers}
          paginate={paginate}
          totalPages={totalPages}
          nextPage={nextPage}
        />
      )}
    </>
  );
};

export default Table;
