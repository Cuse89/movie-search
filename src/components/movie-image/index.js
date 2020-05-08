import React, { Fragment } from "react";
import PropTypes from "prop-types";

const pixelSize = {
  small: 100,
  medium: 200,
  large: 300
};

const MovieImage = ({ path, size }) => (
  <Fragment>
    <img src={`https://image.tmdb.org/t/p/w${pixelSize[size]}/${path}`} />
  </Fragment>
);

MovieImage.defaultProps = {
  size: "medium"
};

MovieImage.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default MovieImage;
