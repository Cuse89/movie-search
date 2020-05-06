import React from "react";

const Pagination = ({
  page,
  onPreviousPageClick,
  onNextPageClick,
}) => {
  return (
    <div>
      <div onClick={onPreviousPageClick}>back</div>
      {page}
      <div onClick={onNextPageClick}>next</div>
    </div>
  );
};

export default Pagination;
