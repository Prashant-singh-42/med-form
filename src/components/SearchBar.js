import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="searchbar">
      <input
        className="input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Search..."
        value={value}
      />
      <Link className="symbol" to={`searchresult/:${value}`}>
        <box-icon name="search" color="#ff2c1f" size="40px"></box-icon>
      </Link>
    </div>
  );
}

export default SearchBar;
