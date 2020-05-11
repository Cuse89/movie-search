import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "components/movie-description";
import withBackArrow from "hocs/withBackArrow";

import styles from "./MoviePage.module.scss";
import useMovie from "hooks/useMovie";
import { FETCH_STATUSES } from "utils/constants";
import Loader from "components/loader";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, getMovie, fetchStatus, hasError } = useMovie();
  const { overview, posterPath, title } = movie;

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <Loader show={fetchStatus === FETCH_STATUSES.FETCHING}>
      {fetchStatus === FETCH_STATUSES.COMPLETE && (
        <MovieDescription
          overview={overview}
          posterPath={posterPath}
          title={title}
        />
      )}
      {hasError && <h3>There was an error, please try again.</h3>}
    </Loader>
  );
};

export default withBackArrow({ withText: true, className: styles.root })(
  MoviePage
);
