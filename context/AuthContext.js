import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // Login user
  const login = async (password) => {
    console.log("passing in this", password);
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify(password),
    });

    const data = await res.json();
    console.log("res from auth: ", data);
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
