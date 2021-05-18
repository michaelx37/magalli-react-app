import React from "react";

import "./SearchResultCard.css";

const SearchResultCard = (props) => {
  return (
    <div className="search-result-card">
      <h3 className="search-result-card__title">{props.title}</h3>
      <p className="search-result-card__date">{props.date}</p>
      <p className="search-result-card__description">{props.desc}</p>
    </div>
  );
};

export default SearchResultCard;
