import React, { memo } from "react";

const MovieItem = memo(({ id, title, onClick }) => (
  <div onClick={() => onClick(id)}>{title}</div>
));

export default MovieItem;
