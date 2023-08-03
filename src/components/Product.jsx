import React from "react";


function Product({ product }) {

    return (
        <>
            <tr>
                <td><div className="image-container"><img className="image" src={product.image} alt={product.title} /></div></td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><a href={product.link}>Linki sivustolle</a></td>
            </tr>
        </>
    )
}


export default Product;