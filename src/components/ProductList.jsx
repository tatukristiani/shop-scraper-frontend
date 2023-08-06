import Product from "./Product";

function ProductList({ products }) {

    return (
        <div className="search-products-container">
            <table>
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