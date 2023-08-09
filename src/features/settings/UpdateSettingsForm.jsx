import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";
import Spinner from "../../ui/spinner/Spinner";

function UpdateSettingsForm() {
  // Fetch Settings Hook
  const { isLoading, settings = {} } = useSettings();
  // Update Settings Hook
  const { isUpdating, updateSetting } = useUpdateSetting();

  const {
    minBookingLength,
    maxGuestPerBooking,
    maxBookingLength,
    breakfastPrice,
  } = settings;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <input
          type="number"
          id="min-nights"
          className="form-input"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <input
          type="number"
          id="max-nights"
          className="form-input"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <input
          type="number"
          id="max-guests"
          className="form-input"
          disabled={isUpdating}
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <input
          type="number"
          id="breakfast-price"
          className="form-input"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
