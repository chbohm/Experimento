// "use client";

// import React, { useEffect, useState } from 'react';
// import { IProduct, userSession } from "@/interfaces";
// import { useRouter } from 'next/navigation';

// const ProductDetail: React.FC<IProduct> = ({id, name, image, description, price, stock, categoryId }) => {
    
//  const router=useRouter();
//     const [userSession, setUserSession] = useState<userSession>();

//   useEffect(() => {
//      const userSessionLocal= localStorage.getItem("userSession")
//      setUserSession(JSON.parse(userSessionLocal!)) //el parse lo convierte en un objeto nuevamente
//   }, []);
  
  
//     const handleClick=()=>{
//        if(!userSession?.token){
//         alert ("you need to be logged in");
//         router.push('/login')

//        }else{
//         const cart: IProduct[]=JSON.parse(localStorage.getItem("cart") || "[]");
//        const productExist=cart.some((product: IProduct)=>{
//         if(product.id=== id)return true;
//         return false;
//        });
//        if(productExist){
//         alert ("product already in cart");
//         router.push('/cart')//redirigir a carrito

//        }else{
//         cart.push({
//             name,
//             image,
//             description,
//             price,
//             stock,
//             id,
//             categoryId
//         })
//         localStorage.setItem("cart", JSON.stringify(cart));//agrega el producto al carrito
//         alert ("product added to cart");
       
       

//        }
//    }
//     }

   
   
//     return (
//         <div>
//             <h1>{name}</h1>
//             <img src={image} alt={"Product image"} />
//             <p>{description}</p>
//             <p>Price: ${price}</p>
//             <p>Stock: {stock}</p>
//             <button onClick={ handleClick}>Add to cart</button>
//         </div>
//     );
// };

// export default ProductDetail;
// //card
"use client";

import React, { useEffect, useState } from 'react';
import { IProduct, userSession } from "@/interfaces";
import { useRouter } from 'next/navigation';

const ProductDetail: React.FC<IProduct> = ({ id, name, image, description, price, stock, categoryId }) => {
    const router = useRouter();
    const [userSession, setUserSession] = useState<userSession | undefined>(undefined);

    useEffect(() => {
        const userSessionLocal = localStorage.getItem("userSession");
        if (userSessionLocal) {
            setUserSession(JSON.parse(userSessionLocal));
        }
    }, []);

    const handleClick = () => {
        if (!userSession?.token) {
            alert("You need to be logged in to add items to the cart.");
            router.push('/login');
        } else {
            const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
            const productExists = cart.some((product) => product.id === id);

            if (productExists) {
                alert("Product is already in the cart.");
                router.push('/cart');
            } else {
                cart.push({
                    id,
                    name,
                    image,
                    description,
                    price,
                    stock,
                    categoryId
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product added to cart.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center p-4 md:p-6 bg-gray-100 rounded-lg shadow-md max-w-full md:max-w-lg mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">{name}</h1>
            <img
                className="w-min h-auto md:h-64 object-cover rounded-lg mb-4"
                src={image}
                alt={`Product image of ${name}`}
            />
            <p className="text-base md:text-lg text-gray-700 mb-2">{description}</p>
            <p className="text-lg md:text-xl font-bold mb-2">Price: ${price.toFixed(2)}</p>
            <p className="text-sm md:text-md text-gray-600 mb-4">Stock: {stock}</p>
            <button
                onClick={handleClick}
                className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
