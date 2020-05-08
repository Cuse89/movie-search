import { useState } from "react";
import { API_KEY, BASE_URL } from "../utils/constants";

const useMovie = () => {
  const [movie, setMovie] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const modelResponse = response => {
    const { title, overview, poster_path } = response;
    return { title, overview, posterPath: poster_path };
  };

  const handleSetResponse = response => {
    setMovie(modelResponse(response));
  };

  const getMovie = id => {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    setIsFetching(true);
    fetch(url)
      .then(res => res.json())
      .then(response => {
        setIsFetching(false);
        handleSetResponse(response);
      })
      .catch(err => {
        setIsFetching(false);
        // handle other error actions here
        setHasError(true);
      });
  };

  return { movie, getMovie, isFetching, hasError };
};

export default useMovie;
