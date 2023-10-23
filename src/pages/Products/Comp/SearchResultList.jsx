import React from "react";

function SearchResultsList({ results }) {
  console.log(results);
  return (
    <div className="page">
      {results?.products?.map((product) => {
        return (
          <div className="artikli" key={product.id}>
            <img src={product.images[0]}></img>
            <h1>
              <label>Brand: </label>
              {product.brand}
            </h1>
            <h1>
              <label>Category: </label>
              {product.category}
            </h1>
            <h1>
              <label>Description: </label>
              {product.description}
            </h1>
            <h1>
              <label>Price: </label>
              {product.price}$
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultsList;
