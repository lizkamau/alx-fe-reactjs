import { Navigate } from "react-router-dom";

// Simulate authentication (change to true to "login")
const isAuthenticated = false;

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
