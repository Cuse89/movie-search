import React, { useEffect, useState } from "react";
import Pagination from "components/pagination";

const ResultsList = ({
  className,
  results,
  resultItem,
  onPaginationChange,
  page,
  resultsPerPage,
  totalResults
}) => {
  const showPagination = resultsPerPage && results.length < totalResults;
  const getResultsList = () => {
    // Used for loop rather than map, as to not iterate unnecessarily if results length is greater than resultsPerPage
    const items = [];
    for (let i = 0; i < resultsPerPage; i++) {
      items.push(resultItem(results[i]));
    }
    return items;
  };

  const onPreviousPageClick = () =>
    onPaginationChange({ page: page - 1, resultsPerPage });

  const onNextPageClick = () =>
    onPaginationChange({ page: page + 1, resultsPerPage });

  return (
    <div className={className}>
      {results.length > 0 && getResultsList()}
      {showPagination && (
        <Pagination
          onPreviousPageClick={onPreviousPageClick}
          onNextPageClick={onNextPageClick}
          page={page}
        />
      )}
    </div>
  );
};

export default ResultsList;
