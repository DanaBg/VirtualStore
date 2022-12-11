import React from "react";
import './ProductRow.css';

const ProductRow = (props) => {
    const {id, name, price, description, imgUrl} = props.product;
    return (
        <div className="rowContainer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="description">{description}</div>
            <img src={imgUrl}/>
            <button className="addButton">הוספה לסל</button>
        </div>
    )
}

export default ProductRow;