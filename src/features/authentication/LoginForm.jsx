import { useTranslation } from "react-i18next";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { isOnlySpaces } from "../../utils/helpers";
import {
  EMAIL_REGEX,
  MAX_INPUT_LENGTH,
  MIN_INPUT_LENGTH,
} from "../../utils/constants";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

const initialState = {
  email: "",
  password: "",
};

function LoginForm() {
  const [t] = useTranslation();

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
    const { email, password } = data;

    login(
      { email, password },
      {
        onSuccess: () => {
          toast.success(t("login.successLogin"));
          reset();
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
      <Input
        placeholder={t("general.email")}
        disabled={isLoading}
        error={errors?.email?.message}
        {...register("email", {
          required: t("general.emailIsRequired"),
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || t("general.onlySpaces"),
          },
          pattern: {
            value: EMAIL_REGEX,
            message: t("general.emailPattern"),
          },
          minLength: {
            value: MIN_INPUT_LENGTH,
            message: t("general.minLength"),
          },
          maxLength: {
            value: MAX_INPUT_LENGTH,
            message: t("general.maxLength"),
          },
        })}
      />

      <Input
        placeholder={t("general.passwordPlaceholder")}
        type="password"
        disabled={isLoading}
        error={errors?.password?.message}
        {...register("password", {
          required: t("general.passwordIsRequired"),
          minLength: {
            value: 8,
            message: t("general.passwordLength"),
          },
        })}
      />

      <Button type="submit" disabled={isLoading}>
        {!isLoading ? t("login.login") : <SpinnerMini />}
      </Button>
    </form>
  );
}

export default LoginForm;
