import React, { useState,useEffect } from "react";
import './ProductRow.css';

const ProductRow = (props) => {
    const {id, name, price, description, imgUrl,amount} = props.product;

    return (
        <div className="rowContainer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="description">{description}</div><img src={imgUrl} />
            <div className="price">כמות:{amount}</div>
            <button className="addButton" onClick={() => props.addItemAmount(id)}>הוסף לסל</button>
        </div>
    )
}

export default ProductRow;