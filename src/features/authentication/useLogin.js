import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      const { user: userData, role } = user;

      localStorage.setItem("USER_TOKEN", userData?.token);
      queryClient.setQueryData(["user"], { ...user, role });
      navigate("/dashboard", { replace: true });
    },
  });

  return { login, isLoading };
}
