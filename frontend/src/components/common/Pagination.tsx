import type { PaginationProp } from "./Types";

export default function Pagination({
  currentPage,
  lastPage,
  onPrev,
  onNext,
}: PaginationProp) {
  return (
    <>
      <button onClick={onPrev} disabled={currentPage === 1}>
        Previous
      </button>

      <p>
        Page {currentPage} of {lastPage}{" "}
      </p>

      <button onClick={onNext} disabled={currentPage === lastPage}>
        Next
      </button>
    </>
  );
}
