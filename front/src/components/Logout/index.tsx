"use client";
import { useAuth } from "@/context/AuthContext";


export default function Logout() {
    const {userData}=useAuth();

    const handleLogout=()=>{
        if(userData?.token){
            localStorage.removeItem("userSession");
            window.location.reload();
        }
    }



    return (

        <div>
            <p>Hello {userData?.userData?.name}, do you want to logout?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>

        
    )
}