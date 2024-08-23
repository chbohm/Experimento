"use client";
import { getOrders } from "@/helpers/orders.helpers";
import { createOrder } from "@/helpers/orders.helpers";
import { IOrder, IProduct, userSession } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductList from "../ProductList";

const OrdersPage=()=>{
    const router=useRouter();
const [userSession, setUserSession] = useState<userSession>();
const [orders, setOrders] = useState<IOrder[]>([]);



useEffect(() => {
    const userSessionLocal= localStorage.getItem("userSession")
    setUserSession(JSON.parse(userSessionLocal!)) //el parse lo convierte en un objeto nuevamente
    // !userSession?.token && router.push('/login')
}, [])

useEffect(() => {
   fetchData()

}, [])
const fetchData=async()=>{
    const ordersResponse=await getOrders( userSession?.token!);
    setOrders(ordersResponse)
}



useEffect(() => {
    if(userSession?.userData){
        userSession?.userData.name ===undefined ? router.push('/login'): fetchData()
    }
    
}, [userSession?.userData])





return(
    <div className="w-full items-center justify-around flex flex-row">
    {orders && orders.length > 0 ? (
        orders?.map((item) => {
            return(
            <div key={item.id}>
                <h1>{new Date(item.date).toDateString()}</h1>
                <h2> Status: {item.status}</h2>
                
                

            </div>
            )
        })
    ) : (
        <div>
            <h1>Carrito vacío</h1>
            
        </div>
    )
    }

</div>

)

}

export default OrdersPage
