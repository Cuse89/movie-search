import React, { Fragment } from "react";
import useMoviesResults from "hooks/useMoviesResults";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import MovieItem from "components/movie-item";

const SearchPage = () => {
  const { getMovies, movies } = useMoviesResults();
  const onSearchSubmit = query => {
    console.log(query);
    getMovies({ query });
  };
  const onMovieClick = id => {
    console.log("on movie click", id);
  };
  return (
    <Fragment>
      <InputForm
        placeholder={"Search for a movie..."}
        onSubmit={onSearchSubmit}
      />
      <ResultsList
        results={movies}
        resultItem={({ id, title }) => (
          <MovieItem
            key={`movieItem${id}`}
            id={id}
            title={title}
            onClick={onMovieClick}
          />
        )}
      />
    </Fragment>
  );
};

export default SearchPage;
