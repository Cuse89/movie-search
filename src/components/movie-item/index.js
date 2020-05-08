import React, { memo } from "react";
import styles from "./MovieItem.module.scss";

const MovieItem = memo(({ id, title, onClick }) => (
  <div className={styles.root} onClick={() => onClick(id)}>
    {title}
  </div>
));

export default MovieItem;
