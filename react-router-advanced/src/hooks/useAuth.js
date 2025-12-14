import { useState } from "react";

function useAuth() {
  // Simulated authentication state
  const [user] = useState(null); // null = not logged in

  return {
    user,
    isAuthenticated: !!user,
  };
}

export default useAuth;
