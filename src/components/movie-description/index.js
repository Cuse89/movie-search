import React, { useEffect, Fragment } from "react";
import useMovie from "hooks/useMovie";
import Loader from "components/loader";

const MovieDescription = ({ id }) => {
  const { movie, getMovie, isFetching, hasError } = useMovie();
  const { overview, posterPath, title } = movie;

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <Loader show={isFetching} isContained={true}>
      {title && (
        <Fragment>
          <h3>Title:</h3>
          {title}
        </Fragment>
      )}
        {overview && <Fragment>
            <h3>About:</h3>
            {overview}
        </Fragment>}
        {posterPath && <Fragment>
            <h3>image</h3>
            {posterPath}
        </Fragment>}


    </Loader>
  );
};

export default MovieDescription;
