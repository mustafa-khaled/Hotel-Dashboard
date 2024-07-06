import { useState } from "react";
import { useLogin } from "./useLogin";

import Button from "../../ui/Button";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("user@user.com");
  const [password, setPassword] = useState("12345678");
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
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[10px] rounded-md bg-colorGrey2 p-[20px]"
    >
      <div>
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
      </div>
      <div>
        <input
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
        {!isLoading ? "Login" : <SpinnerMini />}
      </Button>
    </form>
  );
}

export default LoginForm;
