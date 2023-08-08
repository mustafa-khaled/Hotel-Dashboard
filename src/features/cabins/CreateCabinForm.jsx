import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

import FormRow from "../../ui/formRow/FormRow";
import Form from "../../ui/form/Form";
import Button from "../../ui/button/Button";
import FileInput from "../../ui/fileInput/FileInput";
import Lapel from "../../ui/lapel/Lapel";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues } = useForm();

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

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form submit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Lapel htmlFor="name">Cabin Name</Lapel>
        <input
          id="name"
          type="text"
          {...register("name", { required: "This Field is required" })}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="maxCapacity">Maximum Capacity</Lapel>
        <input
          id="maxCapacity"
          type="number"
          {...register("maxCapacity", {
            required: "This Field is required",
            min: { value: 1, message: "Capacity should be at least one" },
          })}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="regularPrice">Regular Price</Lapel>
        <input
          id="regularPrice"
          type="number"
          {...register("regularPrice", {
            required: "This Field is required",
            min: { value: 1, message: "The price should be at least one" },
          })}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="discount">Discount</Lapel>
        <input
          type="number"
          id="discount"
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

      <FormRow>
        <Lapel htmlFor="description">Description For Website </Lapel>
        <textarea
          id="description"
          {...register("description", { required: "This Field is required" })}
          className="form-textarea"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="image">Cabin Photo </Lapel>
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
