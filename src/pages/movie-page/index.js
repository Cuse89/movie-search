import React from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "components/movie-description";
import withBackArrow from "hocs/withBackArrow";

import styles from "./MoviePage.module.scss"

const MoviePage = () => {
  const { id } = useParams();

  return (
    <div>
      <MovieDescription id={id} />
    </div>
  );
};

export default withBackArrow({ withText: true, className: styles.root })(MoviePage);
