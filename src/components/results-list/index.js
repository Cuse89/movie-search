import React, { useEffect, useState } from "react";
import Pagination from "components/pagination";

const ResultsList = ({
  className,
  results,
  resultItem,
  resultsIntervals,
  onPaginationChange,
  defaultResultsPerPage
}) => {
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(defaultResultsPerPage);
  const showPagination = resultsPerPage && results.length > resultsPerPage;
  const getResultsList = () => {
    // Used for loop rather than map, as to not iterate unnecessarily if results length is greater than resultsPerPage
    const items = [];
    for (let i = 0; i < resultsPerPage; i++) {
      items.push(resultItem(results[i]));
    }
    return items;
  };

  const onPreviousPageClick = () => setPage(page - 1);

  const onNextPageClick = () => setPage(page + 1);

  useEffect(() => {
    onPaginationChange({ page, resultsPerPage });
  }, [page, resultsPerPage]);

  return (
    <div className={className}>
      {results.length > 0 && getResultsList()}
      {showPagination && (
        <Pagination
          onPreviousPageClick={onPreviousPageClick}
          onNextPageClick={onNextPageClick}
          page={page}
          resultsIntervals={resultsIntervals}
          onAmountChange={setResultsPerPage}
        />
      )}
    </div>
  );
};

export default ResultsList;
