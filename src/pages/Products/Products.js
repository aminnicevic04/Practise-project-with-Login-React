import React, { useState } from "react";
import "./Products.css";
import SearchBar from "./Comp/SearchBar";
import SearchResultsList from "./Comp/SearchResultList";
function Products() {
  const [results, setResults] = useState([]);
  

  return (
    <div className="App">
      <div className="search-bar">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default Products;
