import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const withBackArrow = ({ withText }) => WrappedComponent => ({ history }) => (
  <Fragment>
    <div onClick={() => history.goBack()}>
      <FontAwesomeIcon icon={faArrowLeft} />
      {withText && "Go back"}
    </div>
    <WrappedComponent />
  </Fragment>
);

withBackArrow.defaultProps = {
  withText: false
};

withBackArrow.propTypes = {
  withText: PropTypes.bool
};

export default withBackArrow;
