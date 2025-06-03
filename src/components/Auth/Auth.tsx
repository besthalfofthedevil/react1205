import { useUserContext } from "../../hooks/useUserContext";

export const Auth = () => {
  const [user, toggleAuth] = useUserContext();

  return (
    <span>
      {user.name}
      <button onClick={toggleAuth}>
        {user.isAutenticated ? "Logout" : "Login"}
      </button>
    </span>
  );
};
