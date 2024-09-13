"use client"
import { useAuth } from '@/context/AuthContext';
import { login } from '@/helpers/auth.helpers';
import { validateLoginForm } from '@/helpers/validate';
import { ILoginError, ILoginProps } from '@/interfaces';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useState, useEffect } from "react";



const Login = () => {
    const {setUserData}=useAuth()
    const router=useRouter();
   
    const initialState={
        email: "",
        password: ""
    }

    const [formDta, setFormDta] = useState<ILoginProps>(initialState);
    const [errors, setErrors] = useState<ILoginError> (initialState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormDta({ ...formDta, [name]: value });
        setErrors({ ...errors, [name]: "" });

    };

    const handleOnSubmit = async ( event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        const response= await login(formDta)
        console.log(response)
        const {token,user}=response;
       const userData={
          id: user.id,
          name: user.name,
          email: user.email,
          address: user.address,
          phone: user.phone,
        //   password: user.password,
        //   token: token
        orders: user.orders
       }
       setUserData({token, userData})

        alert ("submitted form")
        router.push('/home')
       
    };
     
    useEffect(()=>{
        const errors=validateLoginForm(formDta)
        setErrors(errors)

    },[formDta])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-serif text-red-600 mb-6 text-center">Login</h2>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formDta.email}
                            onChange={handleInputChange}
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formDta.password}
                            onChange={handleInputChange}
                            placeholder="********"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.password && <p className="text-red-600 mt-1">{errors.password}</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className={`px-6 py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                                errors.email || errors.password ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"
                            }`}
                            disabled={!!errors.email || !!errors.password}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
};

export default Login;
