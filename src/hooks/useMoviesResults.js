import { useState } from "react";
import { createUrlParams, getUrlSearchParam } from "../utils/helpers";
import { API_KEY, BASE_URL, FETCH_STATUSES } from "../utils/constants";

const useMoviesResults = () => {
  const [movies, setMovies] = useState([]);
  const [pagination, setPagination] = useState({
    page: getUrlSearchParam("page") || 1,
    totalPages: 0,
    totalResults: 0
  });
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUSES.READY);
  const [hasError, setHasError] = useState(false);

  const modelMovies = movies =>
    // only obtain required values
    movies.map(movie => {
      const { id, title } = movie;
      return { id, title };
    });

  const handleSetResponse = response => {
    const { results, page, total_results, total_pages } = response;
    if (results.length > 0) {
      setMovies(modelMovies(results));
    } else {
      setMovies([]);
    }
    setPagination({
      page,
      totalPages: total_pages,
      totalResults: total_results
    });
  };

  const getMovies = queryParams => {
    const urlParams = createUrlParams(queryParams);
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&${urlParams}`;
    setFetchStatus("fetching");
    fetch(url)
      .then(res => res.json())
      .then(response => {
        handleSetResponse(response);
        setFetchStatus(FETCH_STATUSES.COMPLETE);
      })
      .catch(err => {
        setFetchStatus(FETCH_STATUSES.COMPLETE);
        // handle other error actions here
        setHasError(true);
      });
  };

  return { movies, getMovies, pagination, fetchStatus, hasError };
};

export default useMoviesResults;
