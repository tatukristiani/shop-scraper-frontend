import Product from "./Product";


function ProductList({ products }) {

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Link to source</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p => (
                        <Product product={p} />
                    )))}
                </tbody>
            </table>
        </div>
    )
}


export default ProductList;