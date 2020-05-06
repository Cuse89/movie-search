import React from "react";

const MovieItem = ({ id, title, onClick }) => (
  <div onClick={() => onClick(id)}>{title}</div>
);

export default MovieItem;
