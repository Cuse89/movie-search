import { useState } from "react";
import { createUrlParams } from "../utils/helpers";

const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);

  const modelMovies = movies =>
    // only obtain required values
    movies.map(movie => {
      const { id, title } = movie;
      return { id, title };
    });

  const handleSetMovies = movies => {
    if (movies.results.length > 0) {
      setMovies(modelMovies(movies.results));
    }
  };

  const getMovies = queryParams => {
    const urlParams = createUrlParams(queryParams);
    const baseUrl = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "c9699c83834bc31ef87390d9331e4c96";
    const url = `${baseUrl}?api_key=${apiKey}&${urlParams}`;
    fetch(url)
      .then(res => res.json())
      .then(response => handleSetMovies(response))
      .catch(err => console.log(err));
  };

  return { movies, getMovies };
};

export default useMovieSearch;
