import { useLocation, Navigate } from "react-router-dom";

import { useAuth } from '../utils/AuthProvider';

export default function RequireAuth({ children }) {
  const { user } = useAuth();
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{ pathname }} />;
  }

  return children;
}
