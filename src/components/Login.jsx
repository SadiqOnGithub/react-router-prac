import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../utils/AuthProvider";

export default function Login() {
  const [user, setUser] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const redirectPath = state?.pathname || '/';

  const handleLogin = () => {
    login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <label>
        Username:{' '}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}