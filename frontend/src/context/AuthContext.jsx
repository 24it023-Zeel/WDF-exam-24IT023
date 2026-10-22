import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        customer,
        setCustomer,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}