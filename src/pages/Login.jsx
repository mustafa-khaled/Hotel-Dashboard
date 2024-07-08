import { useTranslation } from "react-i18next";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import TranslationButton from "../ui/header/TranslationButton";

function Login() {
  const [t] = useTranslation();

  return (
    <main className="relative flex h-screen items-center justify-center bg-colorGrey">
      <div className="absolute top-[20px] ltr:left-[20px] rtl:right-[20px]">
        <TranslationButton />
      </div>
      <div className="flex w-[95%] flex-col gap-[10px] rounded-md bg-colorGrey2 text-center text-textColor md:w-[500px]">
        <Logo />
        <Heading>{t("login.title")}</Heading>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
