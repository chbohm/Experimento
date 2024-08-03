import React from 'react';
import ProductDetail from "@/components/ProductDetail";
import { getProductsById } from "@/helpers/productshelper";
import { IProductProps } from "@/interfaces";

const Detail: React.FC<IProductProps> = async ({ params }) => {
    const { id } = params;
    const product = await getProductsById(id);

    return (
        <ProductDetail 
            name={product.name} 
            image={product.image} 
            description={product.description} 
            price={product.price} 
            stock={product.stock} 
            id={product.id} 
            categoryId={product.categoryId} 
        />
    );
};

export default Detail;
