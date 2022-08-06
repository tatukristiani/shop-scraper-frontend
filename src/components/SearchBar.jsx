import React from "react";


function SearchBar({ HandleSearch, searchValue, maxPrice, onSearchChange, onMaxPriceChange }) {

    return (
        <div className="container">
            <div>
                <label>Tuote</label>
                <input type="text" placeholder="Tuoteen nimi" value={searchValue} onChange={onSearchChange} />
            </div>
            <div>
                <label>Hinta (MAX)</label>
                <input type="number" value={maxPrice} onChange={onMaxPriceChange} />
            </div>
            <button onClick={HandleSearch}>Hae tuotteita</button>
        </div>
    )
}


export default SearchBar;