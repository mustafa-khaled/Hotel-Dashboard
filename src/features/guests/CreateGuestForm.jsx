import { useForm } from "react-hook-form";
import { useCreateGuest } from "./useCreateGuest";

import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";
import Button from "../../ui/button/Button";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function CreateGuestForm({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm();
  const { createGuest, isCreating } = useCreateGuest();

  function onSubmit(data) {
    createGuest(
      { newGuest: data },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  return (
    <Form
      submit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Full Name">
        <input
          id="FullName"
          type="text"
          className="form-input"
          disabled={isCreating}
          {...register("fullName", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Email">
        <input
          id="email"
          type="text"
          className="form-input"
          disabled={isCreating}
          {...register("email", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="National Id">
        <input
          id="nationalId"
          type="text"
          className="form-input"
          disabled={isCreating}
          {...register("nationalID", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Nationality">
        <input
          id="nationality"
          type="text"
          className="form-input"
          disabled={isCreating}
          {...register("nationality", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Country Flag">
        <input
          id="countryFlag"
          type="text"
          className="form-input"
          disabled={isCreating}
          {...register("countryFlag")}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          disabled={isCreating}
          type="reset"
          onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isCreating ? <SpinnerMini /> : "Create New Guest"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
