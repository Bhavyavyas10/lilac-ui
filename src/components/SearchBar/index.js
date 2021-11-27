import React from "react";
import "./style.css";

const Search = () => {
  return (
    <div>
      <form class="example">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
