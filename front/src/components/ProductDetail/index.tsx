import React from 'react';
import { IProduct } from "@/interfaces";

const ProductDetail: React.FC<IProduct> = ({ name, image, description, price, stock }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
        </div>
    );
};

export default ProductDetail;
