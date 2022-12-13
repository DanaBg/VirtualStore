import React from 'react';


const CartItem = (props) => {
    const {id, name, price,imgUrl,amount} = props.product;

    return (
        <div className="rowContainer">
            <button onClick={() => props.addItemAmount(id)}>+</button>
            {` ${amount} X ${price} `}
            {name}
            <img src={imgUrl} />
        </div>
        
    )
}

export default CartItem;