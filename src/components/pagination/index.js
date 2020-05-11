import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Pagination.module.scss";

const Pagination = ({
  page,
  onPreviousPageClick,
  onNextPageClick,
  totalPages
}) => (
  <div className={styles.root}>
    {page > 1 && (
      <FontAwesomeIcon
        className={styles.leftArrow}
        icon={faArrowLeft}
        onClick={onPreviousPageClick}
      />
    )}
    Page {page} out of {totalPages}
    {page < totalPages && (
      <FontAwesomeIcon
        className={styles.rightArrow}
        icon={faArrowRight}
        onClick={onNextPageClick}
      />
    )}
  </div>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onPreviousPageClick: PropTypes.func.isRequired,
  onNextPageClick: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Pagination;
