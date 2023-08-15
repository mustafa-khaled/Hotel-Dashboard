import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      toast.success("Login Successfully");
      navigate("/dashboard");
    },

    onError: (error) => {
      toast.error("The Provided Email Or Password are Incorrect");
    },
  });
  return { login, isLoading };
}
