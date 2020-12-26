/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./searchField.css";

const users = ["Sean", "John", "Peter", "Abby", "Jacob", "Ashley", "Dennis"];

const SearchField = () => {
  const [value, setValue] = useState(null);
  return (
    <div className="searchField">
      <SearchIcon />
      <input type="text" placeholder="Search Facebook"></input>
    </div>
  );
};

export default SearchField;
