import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Loader.module.scss";

const Loader = ({ show, size, color, isContained, delay, children }) => {
  const [isDelaying, setIsDelaying] = useState(delay > 0);
  const imgClassName = cx([styles.image], [styles[size]], [styles[color]]);

  useEffect(() => {
    let isSubscribed = true;
    if (show && delay > 0) {
      setTimeout(() => {
        if (isSubscribed) {
          setIsDelaying(false);
        }
      }, delay);
    }
    return () => (isSubscribed = false);
  }, [delay, show]);

  // Do not show the loader if a delay period is set
  if (show && !isDelaying) {
    return (
      <div className={cx({ [styles.contained]: isContained })}>
        <img className={imgClassName} src="./tail-spin.svg" alt="loader" />
      </div>
    );
  }
  return children;
};

Loader.defaultProps = {
  size: "medium",
  color: "darkBlue",
  isContained: false,
  delay: 300
};

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["blue", "darkBlue"]),
  isContained: PropTypes.bool,
  delay: PropTypes.number
};

export default Loader;
