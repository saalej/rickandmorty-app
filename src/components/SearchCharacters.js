import React from "react";

const SearchCharacters = ({ onFilterChange }) => {
  const searcher = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <input
      id="search"
      className="form-control mb-5"
      type="text"
      placeholder="Search"
      onChange={searcher}
    ></input>
  );
};

export default SearchCharacters;
