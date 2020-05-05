import { useState } from "react";
import { API_KEY, BASE_URL } from "../utils/constants";

const useMovie = () => {
  const [movie, setMovie] = useState({});

  const modelResponse = response => {
    const { title, overview, poster_path } = response;
    return { title, overview, poster_path };
  };

  const handleSetResponse = response => {
    setMovie(modelResponse(response));
  };

  const getMovie = id => {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(response => handleSetResponse(response))
      // todo: handle errors
      .catch(err => console.log(err));
  };

  return { movie, getMovie };
};

export default useMovie;
