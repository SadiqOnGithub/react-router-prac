import { useNavigate } from "react-router-dom";

import { useAuth } from "../utils/AuthProvider";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
