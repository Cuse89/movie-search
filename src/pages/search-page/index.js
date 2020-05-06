import React, { Fragment, useEffect, useState } from "react";
import useMoviesResults from "hooks/useMoviesResults";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import MovieItem from "components/movie-item";
import { DEFAULT_RESULTS_AMOUNT } from "utils/constants";

const SearchPage = () => {
  const { getMovies, movies, pagination } = useMoviesResults();
  const { page, totalResults } = pagination;
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      getMovies({ query });
    }
  }, [query]);

  const onSearchSubmit = query => {
    console.log(query);
    setQuery(query);
  };
  const onMovieClick = id => {
    console.log("on movie click", id);
  };

  const onPaginationChange = ({ page }) => {
    getMovies({ query, page });
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
        page={page}
        resultsPerPage={DEFAULT_RESULTS_AMOUNT}
        onPaginationChange={onPaginationChange}
        totalResults={totalResults}
      />
    </Fragment>
  );
};

export default SearchPage;
