import React from "react";
import MovieDescription from "components/movie-description";
import { useParams } from "react-router-dom";

const MoviePage = ({ history }) => {
  const { id } = useParams();
  console.log("querry", id);

  return (
    <div onClick={() => history.goBack()}>
      <MovieDescription id={id} />
    </div>
  );
};

export default MoviePage;
