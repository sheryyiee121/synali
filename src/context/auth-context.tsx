"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type UserRole = "candidate" | "company" | null;

interface AuthContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>(null);

  useEffect(() => {
    // Get user role from localStorage or cookie on mount
    const storedRole = localStorage.getItem("userRole") as UserRole;
    if (storedRole) {
      setUserRole(storedRole);
      // Also set cookie for middleware
      document.cookie = `userRole=${storedRole}; path=/`;
    }
  }, []);

  const handleSetUserRole = (role: UserRole) => {
    setUserRole(role);
    if (role) {
      localStorage.setItem("userRole", role);
      document.cookie = `userRole=${role}; path=/`;
    } else {
      localStorage.removeItem("userRole");
      document.cookie =
        "userRole=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userRole,
        setUserRole: handleSetUserRole,
        isAuthenticated: !!userRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
