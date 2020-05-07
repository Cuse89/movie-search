import React, { Fragment, useEffect } from "react";
import { useQueryState } from "use-location-state";
import useMoviesResults from "hooks/useMoviesResults";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import MovieItem from "components/movie-item";
import { DEFAULT_RESULTS_AMOUNT } from "utils/constants";

const SearchPage = ({ history }) => {
  const { getMovies, movies, pagination } = useMoviesResults();
  const { totalResults } = pagination;
  const [query, setQuery] = useQueryState("query", "");

  useEffect(() => {
    if (query) {
      getMovies({ query });
    }
  }, [query]);

  const onSearchSubmit = query => {
    setQuery(query);
  };

  const onMovieClick = id => {};

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
        resultsPerPage={DEFAULT_RESULTS_AMOUNT}
        onPaginationChange={onPaginationChange}
        totalResults={totalResults}
      />
    </Fragment>
  );
};

export default SearchPage;
