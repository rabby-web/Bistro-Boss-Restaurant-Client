import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn w-full">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
