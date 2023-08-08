import React from "react";

function SearchBar({ HandleSearch, searchValue, maxPrice, onSearchChange, onMaxPriceChange }) {

    return (
        <div className="search-container">
            <div className="search-div">
                <label>Product</label>
                <br />
                <input type="text" placeholder="Product name" value={searchValue} onChange={onSearchChange} />
            </div>
            <div className="search-div">
                <label>Price (MAX)</label>
                <br />
                <input type="number" value={maxPrice} onChange={onMaxPriceChange} />
            </div>
            <button onClick={HandleSearch}>Search</button>
        </div>
    )
}


export default SearchBar;