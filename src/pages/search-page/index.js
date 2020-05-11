import React, { useEffect, Fragment } from "react";
import { useQueryState } from "use-location-state";
import useMoviesResults from "hooks/useMoviesResults";
import InputForm from "components/input-form";
import ResultsList from "components/results-list";
import MovieItem from "components/movie-item";
import { DEFAULT_RESULTS_AMOUNT, FETCH_STATUSES } from "utils/constants";
import Loader from "components/loader";

import styles from "./SearchPage.module.scss";

const SearchPage = ({ history }) => {
  const {
    getMovies,
    movies,
    pagination,
    fetchStatus,
    hasError
  } = useMoviesResults();
  const { totalResults, totalPages } = pagination;
  const [query, setQuery] = useQueryState("query", "");
  const [page, setPage] = useQueryState("page", 1);

  console.log("movies", movies);

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

  const showTitle = query && movies.length > 0;

  return (
    <div className={styles.root}>
      <InputForm
        placeholder={"Search for a movie..."}
        onChange={onQueryChange}
      />

      {query && (
        <Loader show={fetchStatus === FETCH_STATUSES.FETCHING}>
          {fetchStatus === FETCH_STATUSES.COMPLETE && (
            <Fragment>
              {showTitle && <h3>Showing Movies: {query}</h3>}
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
                noResultsText={"No movies found."}
                hasError={hasError}
                errorMessage={"Oops something went wrong, please try again."}
              />
            </Fragment>
          )}
        </Loader>
      )}
    </div>
  );
};

export default SearchPage;
