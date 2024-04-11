import { lazy, useState } from "react";
import { formatDate } from "./utils/formatDate";
import { Pagination } from "./utils/pagination";

export default function Tables({ data, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className=" mx-10">
        <div className="flex justify-center">
          <h2 className="font-extrabold">{title}</h2>
        </div>
        <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                procentaje{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              currentItems.map((values, i) => {
                return (
                  <>
                    <tr
                      className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={i}>
                      <td className="px-6 py-4">
                        {formatDate(values.datetime)}
                      </td>
                      <td className="px-6 py-4">
                        {values.value.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        {values.percentage.toFixed(2) + "%"}{" "}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
        <div className="my-3 flex justify-end items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="mx-4 border-2  border-asafe rounded p-1">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>
    </>
  );
}
