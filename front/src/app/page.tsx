"use client";
import { useRouter } from "next/navigation";


export default function LandingPage() {
const router=useRouter()

const handleClick=()=>{
  

  router.push('/auth-page')
}
  return (
    <div>
      <h1>Bienvenido a TecnoHouse</h1>
      <button onClick={handleClick}>Ingresar</button>



      
    </div>
  );
}
