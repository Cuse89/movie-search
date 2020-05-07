import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  page,
  onPreviousPageClick,
  onNextPageClick,
  totalPages
}) => {
  return (
    <div>
      {page > 1 && (
        <FontAwesomeIcon icon={faArrowLeft} onClick={onPreviousPageClick} />
      )}
      {page}
      {page < totalPages && (
        <FontAwesomeIcon icon={faArrowRight} onClick={onNextPageClick} />
      )}
    </div>
  );
};

export default Pagination;
