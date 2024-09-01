import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

// Custom hook to access the authentication context
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
