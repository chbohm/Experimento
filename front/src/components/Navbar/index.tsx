
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import styles from './navbar.module.css';

import { IProduct } from "@/interfaces";

const Navbar = () => {
    

    const { userData } = useAuth();
    
    useEffect(()=>{
        const search=JSON.parse(localStorage.getItem("id") || "[]");
        
    })

   


    
    return (
        <div className="bg-[#040404] p-0 fixed top-0 left-0 w-full h-12 z-[1000] flex items-center">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center">
                    <Image src="/imagenes/logox.png" alt="logo" width={160} height={90} />
                </div>

                <div className="flex-grow hidden md:flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-[200px] rounded-lg bg-white shadow-secondary p-2"
                        

                    />
                </div>

                
                

                
            </div>

           
        </div>
    );
};

export default Navbar;
