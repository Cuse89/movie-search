import React, { useEffect } from "react";
import useMovie from "hooks/useMovie";
import Loader from "components/loader";

const MovieDescription = ({ id }) => {
  const { movie, getMovie, isFetching } = useMovie();
  const { overview, poster_path, title } = movie;

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <Loader show={isFetching} isContained={true}>
      <h3>Title:</h3>
      {title}
      <h3>About:</h3>
      {overview}
      <h3>image</h3>
      {poster_path}
    </Loader>
  );
};

export default MovieDescription;
