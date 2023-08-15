import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/heading/Heading";
import Logo from "../ui/logo/Logo";

function Login() {
  return (
    <main className="login-page">
      <Logo />
      <Heading as="h4">Log In To Your Account</Heading>
      <LoginForm />
    </main>
  );
}

export default Login;
