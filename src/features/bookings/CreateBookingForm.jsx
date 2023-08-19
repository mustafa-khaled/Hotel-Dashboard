import { useForm } from "react-hook-form";
import FormRow from "../../ui/formRow/FormRow";
import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import styles from "./CreateBookingForm.module.css";

function CreateBookingForm({ onCloseModal }) {
  const { register, handleSubmit } = useForm();

  function onSubmit() {
    console.log("Submit Form");
  }

  return (
    <Form submit={handleSubmit(onSubmit)}>
      <div className={styles["inputs-container"]}>
        <div>
          <FormRow label="startDate">
            <input
              id="startDate"
              type="number"
              className="form-input"
              {...register("startDate")}
            />
          </FormRow>

          <FormRow label="endDate">
            <input
              id="endDate"
              type="number"
              className="form-input"
              {...register("endDate")}
            />
          </FormRow>

          <FormRow label="numNights">
            <input
              id="numNights"
              type="number"
              className="form-input"
              {...register("endDate")}
            />
          </FormRow>

          <FormRow label="numGuests">
            <input
              type="number"
              id="numGuests"
              className="form-input"
              {...register("numGuests")}
            />
          </FormRow>

          <FormRow label="cabinPrice">
            <input
              id="cabinPrice"
              type="number"
              className="form-input"
              {...register("cabinPrice")}
            />
          </FormRow>
          <FormRow label="extraPrice">
            <input
              id="extraPrice"
              type="number"
              className="form-input"
              {...register("extraPrice")}
            />
          </FormRow>
        </div>

        <div>
          <FormRow label="totalPrice">
            <input
              id="totalPrice"
              type="number"
              className="form-input"
              {...register("totalPrice")}
            />
          </FormRow>
          <FormRow label="status">
            <input
              id="status"
              type="text"
              className="form-input"
              {...register("status")}
            />
          </FormRow>
          <FormRow label="hasBreakfast">
            <input
              id="hasBreakfast"
              className="form-input"
              {...register("hasBreakfast")}
            />
          </FormRow>
          <FormRow label="isPaid">
            <input id="isPaid" className="form-input" {...register("isPaid")} />
          </FormRow>
          <FormRow label="observation">
            <input
              id="observation"
              className="form-input"
              type="text"
              {...register("observation")}
            />
          </FormRow>

          <FormRow label="cabinId">
            <input
              id="cabinId"
              type="number"
              className="form-input"
              {...register("cabinId")}
            />
          </FormRow>

          <FormRow label="guestId">
            <input
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
          onClick={() => onCloseModal()}>
          Cancel
        </Button>
        <Button>Create New Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
