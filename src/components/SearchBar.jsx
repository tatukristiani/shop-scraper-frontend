import React from "react";
import "../styles/search.css";

function SearchBar({ HandleSearch, searchValue, maxPrice, onSearchChange, onMaxPriceChange }) {

    return (
        <div className="search-container">
            <div className="search-div">
                <label>Tuote</label>
                <br />
                <input type="text" placeholder="Tuoteen nimi" value={searchValue} onChange={onSearchChange} />
            </div>
            <div className="search-div">
                <label>Hinta (MAX)</label>
                <br />
                <input type="number" value={maxPrice} onChange={onMaxPriceChange} />
            </div>
            <button onClick={HandleSearch}>Hae tuotteita</button>
        </div>
    )
}


export default SearchBar;