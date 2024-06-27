import Image from "next/image"
import Link from "next/link"

function Navbar(){
    return(
        <div>
            <Image src="/imagenes/logo.png" alt="logo" width={200} height={100}/>
            <Link href="/home">Home</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/user-dashboard">User Dashboard</Link>
            {/* <Link href="/ofertas">Ofertas</Link>
            <Link href="/masvendidos">Mas Vendidos</Link>
             */}

            
        </div>
        )
}
export default Navbar