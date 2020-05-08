import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Pagination.module.scss"

const Pagination = ({
  page,
  onPreviousPageClick,
  onNextPageClick,
  totalPages
}) => {
  return (
    <div className={styles.root}>
      {page > 1 && (
        <FontAwesomeIcon className={styles.leftArrow} icon={faArrowLeft} onClick={onPreviousPageClick} />
      )}
      Page {page} out of {totalPages}
      {page < totalPages && (
        <FontAwesomeIcon className={styles.rightArrow} icon={faArrowRight} onClick={onNextPageClick} />
      )}
    </div>
  );
};

export default Pagination;
