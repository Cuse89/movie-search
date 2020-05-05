import { useState } from "react";
import { createUrlParams } from "../utils/helpers";

const useMoviesResults = () => {
  const [movies, setMovies] = useState([]);
  const [pagination, setPagination] = useState({});

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
    const baseUrl = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "c9699c83834bc31ef87390d9331e4c96";
    const url = `${baseUrl}?api_key=${apiKey}&${urlParams}`;
    fetch(url)
      .then(res => res.json())
      .then(response => handleSetResponse(response))
      .catch(err => console.log(err));
  };

  return { movies, getMovies, pagination };
};

export default useMoviesResults;
