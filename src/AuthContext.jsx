import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/api/auth/me`, { credentials: "include" })
      .then(async (response) => {
        if (!response.ok) return null;
        const data = await response.json();
        return data.user;
      })
      .then((currentUser) => {
        if (active) setUser(currentUser);
      })
      .catch(() => {
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  async function login(email, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to sign in.");
    setUser(data.user);
    return data.user;
  }

  const value = useMemo(() => ({ user, loading, login }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider.");
  return context;
}
