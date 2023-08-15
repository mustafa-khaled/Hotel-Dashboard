import { useForm } from "react-hook-form";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form submit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <input
          className="form-input"
          type="text"
          id="fullName"
          {...register("fullName", { required: "Full Name  is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          className="form-input"
          type="email"
          id="email"
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
        label="Password (min 8 characters)"
        error={errors?.password?.message}>
        <input
          className="form-input"
          type="password"
          id="password"
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
          {...register("passwordConfirm", {
            required: "Repeated Password is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match ",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
