import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import axios from "../utility/axios";

function SearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [maxPrice, setMaxPrice] = useState(50);
    const [products, setProducts] = useState([]); // Container for products
    const [resultMessage, setResultMessage] = useState('');


    const onSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const onMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    }

    const HandleSearch = (e) => {
        fetchProducts(searchValue, maxPrice);
    }

    // Function to fetch products
    const fetchProducts = async (product, price) => {

        try {
            const response = await axios.get(`products?product=${product}&price=${price}`);
            const data = response.data;
            if (data.length == 0) {
                setResultMessage("No products found...");
            }
            console.log(data.length);
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (resultMessage.length != 0) {
            setResultMessage('');
        }
    }, [searchValue, maxPrice])


    return (
        <div className="container">
            <SearchBar HandleSearch={(e) => HandleSearch(e)}
                searchValue={searchValue}
                maxPrice={maxPrice}
                onSearchChange={onSearchChange}
                onMaxPriceChange={onMaxPriceChange}
            />
            <br />
            <br />
            {products.length > 0 ? (<ProductList products={products} />) : (<p>Try to find some products!</p>)}

            {<p>{resultMessage}</p>}
        </div>
    )
}

export default SearchPage;