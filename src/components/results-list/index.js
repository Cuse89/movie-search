import React from "react";
import Pagination from "components/pagination";

const ResultsList = ({
  className,
  results,
  resultItem,
  onPaginationChange,
  resultsPerPage,
  totalResults,
  totalPages,
  page,
  noResultsText,
  hasError,
  errorMessage
}) => {
  const showPagination = resultsPerPage && results.length < totalResults;
  const getResultsList = () => {
    // Used for loop rather than map, as to not iterate unnecessarily if results length is greater than resultsPerPage
    const items = [];
    const resultsAmount =
      results.length < resultsPerPage ? results.length : resultsPerPage;
    for (let i = 0; i < resultsAmount; i++) {
      items.push(resultItem(results[i]));
    }
    return items;
  };

  const onPreviousPageClick = () => {
    onPaginationChange(page - 1);
  };

  const onNextPageClick = () => {
    onPaginationChange(page + 1);
  };

  const pagination = (
    <Pagination
      onPreviousPageClick={onPreviousPageClick}
      onNextPageClick={onNextPageClick}
      page={page}
      totalPages={totalPages}
    />
  );

  const showNoResultsMessage =
    noResultsText && results.length === 0 && !hasError;
  const showErrorMessage = hasError && errorMessage;
  console.log("show error messge", hasError, showErrorMessage);

  return (
    <div className={className}>
      {showPagination && pagination}
      {results.length > 0 && getResultsList()}
      {showPagination && pagination}
      {showNoResultsMessage && <h3>{noResultsText}</h3>}
      {showErrorMessage && <h3>{errorMessage}</h3>}
    </div>
  );
};

export default ResultsList;
