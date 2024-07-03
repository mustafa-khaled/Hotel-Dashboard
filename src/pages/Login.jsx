import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import TranslationButton from "../ui/header/TranslationButton";

function Login() {
  return (
    <main className="relative flex h-screen items-center justify-center bg-colorGrey">
      <div className="absolute left-[20px] top-[20px]">
        <TranslationButton />
      </div>
      <div className="flex w-[95%] flex-col gap-[10px] rounded-md bg-colorGrey2 text-center text-textColor md:w-[500px]">
        <Logo />
        <Heading>Log In To Your Account</Heading>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
