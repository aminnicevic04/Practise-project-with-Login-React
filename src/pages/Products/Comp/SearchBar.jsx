import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchByInput() {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      const resData = await response.json();
      setResults(resData);
      // console.log(resData);
    }
    fetchByInput();
  }, [input]);

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
