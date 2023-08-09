import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

import FormRow from "../../ui/formRow/FormRow";
import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const queryClient = useQueryClient();
  // Create New Cabin
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New Cabin Has Successfully Crated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // Edit Cabin
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success(" Cabin Successfully Edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      editCabin({ newCabinData: { ...data, image }, id: editId });
    } else {
      createCabin({ ...data, image: image });
    }
  }

  const { errors } = formState;

  return (
    <Form submit={handleSubmit(onSubmit)}>
      <FormRow label="name" error={errors?.name?.message}>
        <input
          id="name"
          type="text"
          disabled={isWorking}
          {...register("name", { required: "This Field is required" })}
          className="form-input"
        />
      </FormRow>

      <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
        <input
          id="maxCapacity"
          type="number"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          {...register("description", { required: "This Field is required" })}
          className="form-textarea"
        />
      </FormRow>

      <FormRow label="image" error={errors?.image?.message}>
        <input
          className="file-input"
          id="image"
          type="file"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This Field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
