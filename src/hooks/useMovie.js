import { useState } from "react";
import { API_KEY, BASE_URL, FETCH_STATUSES } from "utils/constants";

const useMovie = () => {
  const [movie, setMovie] = useState({});
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUSES.READY);
  const [hasError, setHasError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const modelResponse = response => {
    const { title, overview, poster_path } = response;
    return { title, overview, posterPath: poster_path };
  };

  const handleSetResponse = response => {
    setMovie(modelResponse(response));
  };

  const getMovie = id => {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    setFetchStatus(FETCH_STATUSES.FETCHING);
    fetch(url)
      .then(res => res.json())
      .then(response => {
        setFetchStatus(FETCH_STATUSES.COMPLETE);
        if (response.status_code === 34) {
          setNotFound(true);
        }
        handleSetResponse(response);
      })
      .catch(err => {
        setFetchStatus(FETCH_STATUSES.COMPLETE);
        // handle other error actions here
        setHasError(true);
      });
  };

  return { movie, getMovie, fetchStatus, hasError, notFound };
};

export default useMovie;
