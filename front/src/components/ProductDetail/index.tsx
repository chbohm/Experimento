"use client";

import React, { useEffect, useState } from 'react';
import { IProduct, userSession } from "@/interfaces";
import { useRouter } from 'next/navigation';

const ProductDetail: React.FC<IProduct> = ({id, name, image, description, price, stock, categoryId }) => {
 const router=useRouter();
    const [userSession, setUserSession] = useState<userSession>();

  useEffect(() => {
     const userSessionLocal= localStorage.getItem("userSession")
     setUserSession(JSON.parse(userSessionLocal!)) //el parse lo convierte en un objeto nuevamente
  }, []);
  
  
    const handleClick=()=>{
       if(!userSession?.token){
        alert ("debes estar logueado");
        router.push('/login')

       }else{
        const cart: IProduct[]=JSON.parse(localStorage.getItem("cart") || "[]");
       const productExist=cart.some((product: IProduct)=>{
        if(product.id=== id)return true;
        return false;
       });
       if(productExist){
        alert ("ya esta en el carrito");
        router.push('/cart')//redirigir a carrito

       }else{
        cart.push({
            name,
            image,
            description,
            price,
            stock,
            id,
            categoryId
        })
        localStorage.setItem("cart", JSON.stringify(cart));//agrega el producto al carrito
        alert ("agregado al carrito");
       
       

       }
   }
    }

   
   
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
            <button onClick={ handleClick}>Add to cart</button>
        </div>
    );
};

export default ProductDetail;
