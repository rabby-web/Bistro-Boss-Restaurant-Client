import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

// Custom hook to access the authentication context
const useAuth = () => {
  const auth = useContext(AuthContext);
  // Return the authentication context to the component that calls this hook
  return auth;
};

export default useAuth;
