export const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div>
      <button
        className="mx-4 border-2  border-asafe rounded p-1"
        onClick={onPrevPage}
        disabled={currentPage === 1}>
        Prev
      </button>
      <button
        className="mx-4 border-2  border-asafe rounded p-1"
        onClick={onNextPage}
        disabled={currentPage === totalPages}>
        Next
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};
