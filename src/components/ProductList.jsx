import Product from "./Product";
import "../styles/search.css";

function ProductList({ products }) {

    return (
        <div className="search-products-container">
            <table>
                <thead>
                    <tr>
                        <th className="th-image">Image</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Link to source</th>
                    </tr>
                </thead>
                <tbody className="tbody-product-list">
                    {products.map((p => (
                        <Product product={p} />
                    )))}
                </tbody>
            </table>
        </div>
    )
}


export default ProductList;