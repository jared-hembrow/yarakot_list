import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { NEXT_URL, BACKEND_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Login user
  const login = async (password) => {
    const res = await fetch(`${BACKEND_URL}/api/login`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ password: password }),
    });

    const data = await res.json();
    if (res.ok) {
      setUser(true);
    } else {
      setError(data.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
