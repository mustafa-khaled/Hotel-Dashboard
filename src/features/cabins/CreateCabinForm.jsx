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
  const { register, handleSubmit, reset } = useForm();

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

  function submitHandler(data) {
    mutate(data);
  }

  return (
    <Form submit={handleSubmit(submitHandler)}>
      <FormRow>
        <Lapel htmlFor="name">Cabin Name</Lapel>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="maxCapacity">Maximum Capacity</Lapel>
        <input
          id="maxCapacity"
          type="number"
          {...register("maxCapacity")}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="regularPrice">Regular Price</Lapel>
        <input
          id="regularPrice"
          type="number"
          {...register("regularPrice")}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="discount">Discount</Lapel>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
          className="form-input"
        />
      </FormRow>

      <FormRow>
        <Lapel htmlFor="description">Description For Website </Lapel>
        <textarea
          id="description"
          {...register("description")}
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
