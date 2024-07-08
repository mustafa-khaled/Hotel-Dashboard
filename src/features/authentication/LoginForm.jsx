import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Button from "../../ui/Button";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

const initialState = {
  email: "",
  password: "",
};

function LoginForm() {
  const [t] = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
  });

  function onSubmit(data) {
    login(
      { email, password },
      {
        onSuccess: () => {
          toast.success(t("login.successLogin"));
        },
        onError: (error) => {
          if (error?.response?.data?.msg === "password not valid") {
            toast.error(t("login.passwordInValid"));
          } else if (error?.response?.data?.msg === "email not valid") {
            toast.error(t("login.emailInValid"));
          } else {
            toast.error(t("login.loginFailed"));
          }
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[10px] rounded-md bg-colorGrey2 p-[20px]"
    >
      <div>
        <label className="mx-[2px] mb-[5px] block text-start">
          {t("general.email")}:
        </label>
        <input
          placeholder={t("general.emailPlaceholder")}
          className="form-input"
          type="email"
          id="email"
          disabled={isLoading}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="mx-[2px] mb-[5px] block text-start">
          {t("general.password")}:
        </label>
        <input
          placeholder={t("general.passwordPlaceholder")}
          className="form-input"
          type="password"
          id="password"
          disabled={isLoading}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        size="medium"
        variation={isLoading ? "secondary" : "primary"}
        disabled={isLoading}
      >
        {!isLoading ? t("login.login") : <SpinnerMini />}
      </Button>
    </form>
  );
}

export default LoginForm;
