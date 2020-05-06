import React from "react";

const ResultsList = ({ className, results, resultsPerPage, resultItem }) => {
  return (
    <div className={className}>
        {results.map(result => resultItem(result))}

    </div>
  );
};

export default ResultsList;
