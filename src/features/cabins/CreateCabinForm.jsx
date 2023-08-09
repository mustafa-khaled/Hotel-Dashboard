import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

import FormRow from "../../ui/formRow/FormRow";
import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import FileInput from "../../ui/fileInput/FileInput";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createNewCabin,
    onSuccess: () => {
      toast.success("New Cabin Has Successfully Crated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  const { errors } = formState;

  return (
    <Form submit={handleSubmit(onSubmit)}>
      <FormRow label="name" error={errors?.name?.message}>
        <input
          id="name"
          type="text"
          disabled={isCreating}
          {...register("name", { required: "This Field is required" })}
          className="form-input"
        />
      </FormRow>

      <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
        <input
          id="maxCapacity"
          type="number"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This Field is required",
            min: { value: 1, message: "Capacity should be at least one" },
          })}
          className="form-input"
        />
      </FormRow>

      <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
        <input
          id="regularPrice"
          type="number"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This Field is required",
            min: { value: 1, message: "The price should be at least one" },
          })}
          className="form-input"
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount", {
            required: "This Field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          className="form-input"
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          id="description"
          disabled={isCreating}
          {...register("description", { required: "This Field is required" })}
          className="form-textarea"
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isCreating ? "Creating..." : "Add Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
