import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl font-medium text-center">
        <span>Hi, Welcome</span>{" "}
        <span className="text-orange-600">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
    </div>
  );
};

export default UserHome;
