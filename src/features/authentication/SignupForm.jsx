import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function SignupForm() {
  const { signup, isLoading } = useSignup();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form submit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <input
          className="form-input"
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "Full Name  is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          className="form-input"
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please Provide A valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="New Password (min 8 characters)"
        error={errors?.password?.message}>
        <input
          className="form-input"
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "password is to short",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <input
          className="form-input"
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Repeated Password is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match ",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}>
          Cancel
        </Button>
        <Button variation={isLoading ? "secondary" : "primary"}>
          {isLoading ? <SpinnerMini /> : "Create new user"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
