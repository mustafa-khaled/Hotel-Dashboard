import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("user@user.com");
  const [password, setPassword] = useState("123456789");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form submit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <input
          className="form-input"
          type="email"
          id="email"
          disabled={isLoading}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <input
          className="form-input"
          type="password"
          id="password"
          disabled={isLoading}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>

      <FormRow orientation="vertical" disabled={isLoading}>
        <Button size="large" variation={isLoading ? "secondary" : "primary"}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
