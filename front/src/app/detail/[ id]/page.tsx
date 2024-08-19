import React from 'react';
import ProductDetail from "@/components/ProductDetail";
import { getProductsById } from "@/helpers/productshelper";

interface DetailProductProps {
    params: {
        id:string;
    }; 
}

const DetailProduct: React.FC<DetailProductProps> = async ({ params }) => {
    const {id} = params;
    const product = await getProductsById(id); // Convertir a string

    return (
    <ProductDetail {...product} />
    )
};

export default DetailProduct;
