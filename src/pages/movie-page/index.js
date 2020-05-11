import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import MovieDescription from "components/movie-description";
import Loader from "components/loader";
import withBackArrow from "hocs/withBackArrow";
import useMovie from "hooks/useMovie";

import { FETCH_STATUSES } from "utils/constants";
import styles from "./MoviePage.module.scss";

const MoviePage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { movie, getMovie, fetchStatus, hasError, notFound } = useMovie();
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
      {notFound && (
        <h3>
          Movie not found. Click
          <span className={styles.link} onClick={() => history.goBack()}> here</span> to go back
        </h3>
      )}
    </Loader>
  );
};

export default withBackArrow({ withText: true, className: styles.root })(
  MoviePage
);
