import Image from "next/image"
import Link from "next/link"
import styles from './navbar.module.css'
function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
            
            <Image src="/imagenes/logo.png" alt="logo" width={200} height={100}/>
            <div className={styles.navbarItems}>
                 <Link href="/home" className={styles.navbar_item}>Home</Link>
            <Link href="/checkout" className={styles.navbar_item} >Checkout</Link>
            <Link href="/user-dashboard" className={styles.navbar_item}>User Dashboard</Link>
            {/* <Link href="/ofertas">Ofertas</Link>
            <Link href="/masvendidos">Mas Vendidos</Link>
             */}
            </div>
           
    
            </div>
            
        </div>
        )
}
export default Navbar