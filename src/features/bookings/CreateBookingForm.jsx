import { useForm } from "react-hook-form";
import { useCabins } from "../cabins/useCabins";

import FormRow from "../../ui/formRow/FormRow";
import Button from "../../ui/Button";
import Form from "../../ui/form/Form";
import styles from "./CreateBookingForm.module.css";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

const trueOrFalse = [
  {
    id: 1,
    value: true,
  },
  {
    id: 2,
    value: false,
  },
];

function CreateBookingForm({ onCloseModal }) {
  const { register, handleSubmit, setValue, watch, formState } = useForm();
  const { isLoading, cabins = [] } = useCabins();

  function onSubmit(data) {
    console.log(data);
  }

  const { errors } = formState;

  return (
    <Form submit={handleSubmit(onSubmit)}>
      <div className={styles["inputs-container"]}>
        <div>
          <FormRow error={errors?.startDate?.message}>
            <input
              id="startDate"
              type="datetime-local"
              className="form-input"
              {...register("startDate", {
                required: "Start Date  is required",
              })}
            />
          </FormRow>

          <FormRow error={errors?.endDate?.message}>
            <input
              id="endDate"
              type="datetime-local"
              className="form-input"
              {...register("endDate", { required: "End Date is required" })}
            />
          </FormRow>

          <FormRow error={errors?.numNights?.message}>
            <input
              placeholder="Nights Number"
              id="numNights"
              type="number"
              className="form-input"
              {...register("numNights", {
                required: "Nights Number is required",
              })}
            />
          </FormRow>

          <FormRow error={errors?.numGuests?.message}>
            <input
              placeholder="Guests Number"
              type="number"
              id="numGuests"
              className="form-input"
              {...register("numGuests", {
                required: "Guests Number is required",
              })}
            />
          </FormRow>

          <FormRow error={errors?.cabinPrice?.message}>
            <input
              placeholder="Cabin Price"
              id="cabinPrice"
              type="number"
              className="form-input"
              disabled
            />
          </FormRow>
          <FormRow error={errors?.extraPrice?.message}>
            <input
              placeholder="Extra Price"
              id="extraPrice"
              type="number"
              className="form-input"
              {...register("extraPrice")}
            />
          </FormRow>
        </div>

        <div>
          <FormRow error={errors?.totalPrice?.message}>
            <input
              placeholder="Total Price"
              id="totalPrice"
              type="number"
              className="form-input"
              disabled
            />
          </FormRow>

          <FormRow error={errors?.hasBreakfast?.message}>
            <Select
              options={trueOrFalse?.map((value) => ({
                value: value.id,
                label: value.value ? "Has Breakfast" : "No Breakfast",
              }))}
              onChange={(e) => {
                setValue("hasBreakfast", e.target.value);
              }}
            />
          </FormRow>
          <FormRow error={errors?.isPaid?.message}>
            <Select
              options={trueOrFalse?.map((value) => ({
                value: value.id,
                label: value.value ? "Paid" : "Did Not Paid",
              }))}
              onChange={(e) => {
                setValue("isPaid", e.target.value);
              }}
            />
          </FormRow>

          <FormRow error={errors?.observation?.message}>
            <input
              placeholder="Observation"
              id="observation"
              className="form-input"
              type="text"
              {...register("observation")}
            />
          </FormRow>

          <FormRow error={errors?.cabinId?.message}>
            {isLoading ? (
              <SpinnerMini />
            ) : (
              <Select
                options={cabins?.map((cabin) => ({
                  value: cabin.id,
                  label: cabin.name,
                }))}
                value={watch("cabinId")}
                onChange={(e) => {
                  setValue("cabinId", e.target.value);
                }}
              />
            )}
          </FormRow>

          <FormRow error={errors?.guestId?.message}>
            <input
              placeholder="Guest Id"
              id="guestId"
              type="number"
              className="form-input"
              {...register("guestId")}
            />
          </FormRow>
        </div>
      </div>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal()}
        >
          Cancel
        </Button>
        <Button>Create New Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
