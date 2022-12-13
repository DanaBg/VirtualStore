import React, { useEffect, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart.js";
import ProductRow from './ProductRow.js';
import './StorePage.css';

const StorePage = () => {
    const [products, setProducts] = useState();
    const [isOpenCart, setOpenCart] = useState();
    const [cartProducts, setCartProducts] = useState([]);

    const onCartClick = () => {
        setOpenCart(true);
    }

    const clearCart = () => {
        setProducts(prev => prev?.map(item => {
             item.amount = 0
             return item
            }));
    }

    const addItemAmount = (id) => {
        const updatedItems = products?.map(item => {
            if(item.id === id){
                item.amount = item.amount + 1;
            }
            return item;
        })

        setProducts(updatedItems);
    }

    useEffect(() => {
      fetch('http://localhost:4200/products')
        .then((response) => response.json())
        .then(data => {
            const itemsObj = data.map(item => ({...item, amount: 0}));
            setProducts(itemsObj); 
        }); 
    },[]);

    useEffect(() => {
        const wantedItems = products?.filter(product => product.amount > 0);
        console.log(wantedItems);
        setCartProducts(wantedItems);
    },[products])

    return (
        <>
            {
                products &&
                <>
                    <div className="headerContainer">
                        <div className="StoreTitle">Danikole Store</div>
                        <div className="cartButton" onClick={onCartClick}>
                            <i className="fa fa-shopping-cart" ></i>
                        </div>
                    </div>
                    { 
                        products.map(product => 
                        <ProductRow product={product} key={product.id} addItemAmount={addItemAmount}/>
                    )}
                </>

            }
                { isOpenCart && <ShoppingCart isOpen={isOpenCart}
                                              onClose={() => setOpenCart(false)} 
                                              items={cartProducts} 
                                              clearCart={clearCart} 
                                              addItemAmount={addItemAmount}/>}    
            </>
    )
}

export default StorePage;