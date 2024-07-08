import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./spinner/Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user
  // const { isLoading, isAuthenticated } = useUser();

  const isAuthenticated = true;
  const isLoading = false;

  // 2) if there is no authenticated user , redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 3) While loading show a spinner
  if (isLoading) {
    return <Spinner />;
  }

  // 4) If there is a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
