import { ILoginError, ILoginProps, ISignUpProps } from "@/interfaces";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function Register (userData: ISignUpProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (res.ok) {
            return res.json();
        } else {
            throw Error('Ocurrió un error al registrar el usuario');
        }
    } catch (error) {
        
    }
}


export async function Login (userData: ILoginProps) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (res.ok) {
            return res.json();
        } else {
            throw Error('Ocurrió un error al loguear el usuario');
        }
    } catch (error) {
        
    }
}
