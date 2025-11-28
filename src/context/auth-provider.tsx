import React, { createContext, useContext, useEffect, useState } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
};

type SignInResult =
  | { success: true; user: User }
  | { success: false; error: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<SignInResult>;
  signOut(): Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const rawUser = localStorage.getItem("auth_user");

    if (rawUser && rawUser !== "undefined" && rawUser !== "null") {
      try {
        const parsed = JSON.parse(rawUser);
        setUser(parsed);
      } catch (err) {
        console.error("Failed to parse stored auth_user:", rawUser, err);
        localStorage.removeItem("auth_user");
      }
    }

    setLoading(false);
  }, []);

  async function signIn(
    email: string,
    password: string
  ): Promise<SignInResult> {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return { success: false, error: "Invalid email or password." };
      }

      const data = await res.json();

      // Expected backend response
      // { access_token, refresh_token, user: { id, name, email } }

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("auth_user", JSON.stringify(data.user));

      setUser(data.user);

      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: "Login failed. Try again later." };
    }
  }

  async function signOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("auth_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside an AuthProvider");
  return ctx;
}
