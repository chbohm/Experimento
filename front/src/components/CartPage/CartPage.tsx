"use client";

import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/helpers/orders.helpers";
import { IProduct, userSession } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartPage=()=>{
    const router=useRouter();
const {userData}=useAuth();
const [cart, setCart] = useState<IProduct[]>([]);
const [totalCart, setTotalCart] = useState<number>(0);



useEffect(() => {
    const cartProducts: IProduct[]=JSON.parse(localStorage.getItem("cart") || "[]");
    if(cartProducts){
        let totalCart=0;
        cartProducts.map((item:IProduct)=>{
            totalCart+=item.price
        })
        setTotalCart(totalCart)
        setCart(cartProducts)
    }

}, [])



useEffect(() => {
    if(userData?.userData){
        userData?.userData.name ===undefined && router.push('/login')
    }
    
}, [userData?.userData])



const handleClick=async ()=>{
    const idProducts=cart?.map((product)=>product.id);
    await createOrder(idProducts, userData?.token!)
    alert("Your order has been created")
    setCart([])
    setTotalCart(0)
    localStorage.removeItem("cart")

}

return(
    <div className="w-full items-center justify-around flex flex-row">
    {cart && cart.length > 0 ? (
        cart?.map((item: IProduct) => {
            return(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <h2> Price: {item.price}</h2>
            </div>
            )
        })
    ) : (
        <div>
            <p className="text-3xl">You have no items in your cart</p>
        </div>
    )
    }
<div>
    <h1>Total: ${totalCart}</h1>
    <button onClick={handleClick}>Checkout</button>
</div>
</div>

)

}

export default CartPage
