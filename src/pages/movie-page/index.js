import React from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "components/movie-description";
import withBackArrow from "hocs/withBackArrow";

const MoviePage = ({ history }) => {
  const { id } = useParams();

  return (
    <div onClick={() => history.goBack()}>
      <MovieDescription id={id} />
    </div>
  );
};

export default withBackArrow({withText: true})(MoviePage);
