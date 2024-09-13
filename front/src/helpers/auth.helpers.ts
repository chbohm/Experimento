import { ILoginError, ILoginProps, ISignUpProps } from "@/interfaces";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

// Registro de usuario
export async function register(userData: ISignUpProps) {
  try {
    const res = await fetch(`${APIURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return await res.json();
    } else {
      const errorText = await res.text();
      console.error("Failed to register:", errorText);
      throw new Error(errorText);
    }
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}

// Login de usuario
export async function login({ email, password }: ILoginProps) {
  try {
    const res = await fetch(`${APIURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Login failed:", errorText);
      throw new Error(errorText);
    }

    const data = await res.json();

    // Almacenar el token en localStorage si es exitoso
    if (data.token) {
      localStorage.setItem('token', data.token);
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

// Rutas protegidas
export async function fetchProtectedRoute() {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error("No token found, please login.");
    }

    const res = await fetch(`${APIURL}/protected-route`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch protected route:", errorText);
      throw new Error(errorText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during fetching protected route:", error);
    throw error;
  }
}
