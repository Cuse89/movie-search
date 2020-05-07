import React, { useEffect } from "react";
import useMovie from "hooks/useMovie";

const MovieDescription = ({ id }) => {
  const { movie, getMovie } = useMovie();
  const { overview, poster_path, title } = movie;

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div>
      <h3>Title:</h3>
      {title}
      <h3>About:</h3>
      {overview}
      <h3>image</h3>
      {poster_path}
    </div>
  );
};

export default MovieDescription;
