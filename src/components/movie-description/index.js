import React, { Fragment } from "react";
import MovieImage from "components/movie-image";

const MovieDescription = ({ overview, posterPath, title }) => (
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

export default MovieDescription;
