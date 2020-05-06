import React from "react";

const Pagination = ({
  page,
  onPreviousPageClick,
  onNextPageClick,
  resultsIntervals,
  onAmountChange
}) => {
  const onAmountSelect = amount => onAmountChange(amount);
  return (
    <div>
      <div onClick={onPreviousPageClick}>back</div>
      {page}
      <div onClick={onNextPageClick}>next</div>
      <div>
        Results per page:
        <select>
          {resultsIntervals.map(interval => (
            <option onClick={onAmountSelect}>{interval}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
