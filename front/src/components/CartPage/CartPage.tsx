"use client";

import { IProduct, userSession } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartPage=()=>{
    const router=useRouter();
const [userSession, setUserSession] = useState<userSession>();
const [cart, setCart] = useState<IProduct[]>([]);
const [totalCart, setTotalCart] = useState<number>(0);


useEffect(() => {
    const userSessionLocal= localStorage.getItem("userSession")
    setUserSession(JSON.parse(userSessionLocal!)) //el parse lo convierte en un objeto nuevamente
    // !userSession?.token && router.push('/login')
}, [])

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
    if(userSession?.userData){
        userSession?.userData.name ===undefined && router.push('/login')
    }
    !userSession?.token && router.push('/login')
}, [userSession?.userData])

return(
    <div>
    {cart && cart.length > 0 ? (
        cart?.map((item: IProduct) => {
            return(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
            </div>
            )
        })
    ) : (
        <div>
            <h1>Carrito vacío</h1>
        </div>
    )}
</div>
)

}

export default CartPage
