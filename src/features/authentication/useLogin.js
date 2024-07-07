import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (email, password) => loginApi(email, password),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login Successfully");
      navigate("/dashboard", { replace: true });
    },

    onError: (error) => {
      toast.error("The Provided Email Or Password is Incorrect");
    },
  });
  return { login, isLoading };
}
