import React, { Fragment, useEffect } from "react";
import { useQueryState } from "use-location-state";
import useMoviesResults from "hooks/useMoviesResults";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import MovieItem from "components/movie-item";
import { DEFAULT_RESULTS_AMOUNT } from "utils/constants";

const SearchPage = ({ history }) => {
  const { getMovies, movies, pagination } = useMoviesResults();
  const { totalResults, totalPages } = pagination;
  const [query, setQuery] = useQueryState("query", "");
  const [page, setPage] = useQueryState("page", 1);

  useEffect(() => {
    if (query) {
      getMovies({ query, page });
    }
  }, [query, page]);

  const onQueryChange = query => {
    setPage(1);
    setQuery(query);
  };

  const onMovieClick = id => {
    history.push(`./movie/${id}`);
  };

  return (
    <Fragment>
      <InputForm
        placeholder={"Search for a movie..."}
        onChange={onQueryChange}
      />
      <h3>Showing Movies: {query}</h3>
      {query && (
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
          onPaginationChange={setPage}
          totalResults={totalResults}
          totalPages={totalPages}
        />
      )}
    </Fragment>
  );
};

export default SearchPage;
