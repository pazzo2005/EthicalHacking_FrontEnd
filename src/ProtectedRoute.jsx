import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <main aria-live="polite">Checking your session…</main>;
  return user ? children : <Navigate to="/login" replace />;
}
