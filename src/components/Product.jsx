import React from "react";


function Product({ product }) {

    return (
        <>
            <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><a href={product.link}>Linki sivustolle</a></td>
            </tr>
        </>
    )
}


export default Product;