import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MovieImage from "components/movie-image";

const MovieDescription = ({ title, overview, posterPath }) => (
  <Fragment>
    {title && (
      <Fragment>
        <h3>Title:</h3>
        {title}
      </Fragment>
    )}
    {overview && (
      <Fragment>
        <h3>About:</h3>
        {overview}
      </Fragment>
    )}
    {posterPath && (
      <Fragment>
        <h3>Image:</h3>
        <MovieImage path={posterPath} />
      </Fragment>
    )}
  </Fragment>
);

MovieDescription.defaultProps = {
  title: "",
  overview: "",
  posterPath: ""
};

MovieDescription.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  posterPath: PropTypes.string
};

export default MovieDescription;
