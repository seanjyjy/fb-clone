import React from "react";
import "./search.css";
import SearchField from "./SearchField/SearchField";

const Search = () => {
  return (
    <div className="search">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png"
        alt=""
      />
      <SearchField />
    </div>
  );
};

export default Search;
