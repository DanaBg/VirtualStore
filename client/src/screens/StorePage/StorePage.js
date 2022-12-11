import React, { useEffect, useState } from "react";
import ProductRow from './ProductRow.js';
import './StorePage.css';

const StorePage = () =>{
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    })

    return (
        <div>
            {
                products &&
                <>
                    <div className="headerContainer">
                        <div className="StoreTitle">Danikole Store</div>
                        <div className="cartButton">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                    </div>
                    { 
                        products.map(product => 
                        <ProductRow product={product} key={product.id}/>
                    )}
                </>

            }
        </div>
    )
}

export default StorePage;