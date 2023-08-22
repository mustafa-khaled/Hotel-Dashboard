import { useForm } from "react-hook-form";
import { useCreateGuest } from "./useCreateGuest";
import { useUpdateGuest } from "./useUpdateGuest";

import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";
import Button from "../../ui/button/Button";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function CreateGuestForm({ guestToEdit = {}, onCloseModal }) {
  // Create New Guest Hook
  const { createGuest, isCreating } = useCreateGuest();
  // Edit Guest Hook
  const { updateGuest, isUpdating } = useUpdateGuest();

  const isWorking = isCreating || isUpdating;
  const { id: editId, ...editValues } = guestToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  function onSubmit(data) {
    if (isEditSession) {
      updateGuest(
        { newGuestData: data, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createGuest(data, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  const { errors } = formState;

  return (
    <Form
      submit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <input
          id="FullName"
          type="text"
          className="form-input"
          disabled={isWorking}
          {...register("fullName", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <input
          id="email"
          type="text"
          className="form-input"
          disabled={isWorking}
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please Provide A valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="National Id" error={errors?.nationalID?.message}>
        <input
          id="nationalId"
          type="text"
          className="form-input"
          disabled={isWorking}
          {...register("nationalID", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <input
          id="nationality"
          type="text"
          className="form-input"
          disabled={isWorking}
          {...register("nationality", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Country Flag">
        <input
          id="countryFlag"
          type="text"
          className="form-input"
          disabled={isWorking}
          {...register("countryFlag")}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          disabled={isWorking}
          type="reset"
          onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button
          disabled={isWorking}
          variation={isWorking ? "secondary" : "primary"}>
          {isWorking ? (
            <SpinnerMini />
          ) : (
            `${isEditSession ? "Edit Guest" : "Create New Guest"}`
          )}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
