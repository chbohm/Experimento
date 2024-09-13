"use client";

import { IProduct } from "@/interfaces";
import { useRouter } from "next/navigation";


export default function LandingPage() {
const router=useRouter()

const handleClick=()=>{
  

  router.push('/auth-page')
}
  return (
    <div>
      <h1>Welcome to ????</h1>
     

<p></p>
      
      <button onClick={handleClick}>Login</button>



      
    </div>
  );
}

