"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './navbar.module.css';
import { useContext, useEffect, useState } from "react";
import { productsToPreLoad } from "../../../public/data"; // Asegúrate de importar productsToPreLoad
import { userSession } from "@/interfaces";

const Navbar = () => {
    const [userSession, setUserSession] = useState<userSession>();
    const [open, setOpen] = useState(true);
    const [windowSize, setWindowSize] = useState([1200, 800]);
                                                                                                                        
    useEffect(() => {
       const userSessionLocal= localStorage.getItem("userSession")
       setUserSession(JSON.parse(userSessionLocal!)) //el parse lo convierte en un objeto nuevamente
    }, []);

    const windowsizeHandler = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
        window.innerHeight >= 800 ? setOpen(true) : setOpen(false);
    };

    useEffect(() => {
        window.addEventListener("resize", windowsizeHandler);
        return () => {
            window.removeEventListener("resize", windowsizeHandler);
        };
    }, [windowSize]);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Image src="/imagenes/logo.png" alt="logo" width={200} height={100} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full max-w-[200px] rounded-lg bg-white shadow-secondary"
                />
                <div className={styles.navbarItems}>
                    <div>
                        {
                            !userSession?.token? (

                                <Link href="/login" >Sign In</Link>

                            ):(

                                <Link href="/user-dashboard" >
                                    <p>Profile:{userSession?.userData?.name}</p>
                                </Link>

                            )
                        }

                    <Link href="/login" className={styles.navbar_item}>Sign In</Link>
                    </div>
                    <div className="block md:hidden" onClick={() => setOpen(!open)}>
                        <div className="w-4 h-0.5 bg-black"></div>
                    </div>

                    {open && (
                        windowSize[0] >= 720 && (
                        <div className="w-full p-2 flex flex-row items-center gap-[10px]">
                            {productsToPreLoad.map((product) => (
                                <Link href={`/product/${product.id}`} key={product.id}>
                                    <label className="text-xs font-medium">{product.name}</label>
                                </Link>
                            ))}
                        </div>
                    )
                    
                    )}

                    <Link href="/home" className={styles.navbar_item}>Home</Link>
                    <Link href="/checkout" className={styles.navbar_item}>Checkout</Link>
                    <Link href="/user-dashboard" className={styles.navbar_item}>User Dashboard</Link>
                    <Link href="/orders" className={styles.navbar_item}>Orders</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
