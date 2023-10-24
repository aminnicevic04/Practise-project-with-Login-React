import React from "react";
import "./SearchresultList.css";
import { useNavigate } from "react-router-dom";

function SearchResultsList({ results }) {
  const navigate = useNavigate();
  console.log(results);
  return (
    <div className="page">
      {results?.products?.map((product) => {
        return (
          <div
            className="artikli"
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img src={product.images[0]}></img>
            <h3>
              <label>Brand: </label>
              {product.brand}
            </h3>
            <h3>
              <label>Category: </label>
              {product.category}
            </h3>
            <h3>
              <label>Description: </label>
              {product.description}
            </h3>
            <h3>
              <label>Price: </label>
              {product.price}$
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultsList;
