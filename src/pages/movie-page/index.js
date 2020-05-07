import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "components/movie-description";
import withBackArrow from "hocs/withBackArrow";

const MoviePage = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <MovieDescription id={id} />
    </Fragment>
  );
};

export default withBackArrow({ withText: true })(MoviePage);
