import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { setCustomer, setToken } = useContext(AuthContext);

  function login() {
    setCustomer({
      name: "Zeel",
    });

    setToken("abc123");
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={login}>Login</button>
    </div>
  );
}