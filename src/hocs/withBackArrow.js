import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./withGoBack.module.scss";

const withBackArrow = ({ withText, className }) => WrappedComponent => ({
  history
}) => (
  <div className={className}>
    <div className={styles.goBack} onClick={() => history.goBack()}>
      <FontAwesomeIcon icon={faArrowLeft} size={"1x"} />
      {withText && <p className={styles.goBackText}>Go back</p>}
    </div>
    <WrappedComponent />
  </div>
);

withBackArrow.defaultProps = {
  withText: false
};

withBackArrow.propTypes = {
  withText: PropTypes.bool,
  className: PropTypes.string
};

export default withBackArrow;
