import React from "react";
import InputForm from "components/input-form";
import useMoviesResults from "hooks/useMoviesResults";

const SearchPage = () => {
  const { getMovies } = useMoviesResults();
  const onSearchSubmit = query => {
    getMovies({ query });
  };
  return (
    <div>
      <InputForm
        placeholder={"Search for a movie..."}
        onSubmit={onSearchSubmit}
      />

    </div>
  );
};

export default SearchPage;
