import { useUser } from "./useUser";
import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";

import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/formRow/FormRow";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const { updateUser, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          // Resetting form using .reset() that's available on all HTML form elements, otherwise the old filename will stay displayed in the UI
          e.target.reset();
        },
      }
    );
  }

  function handleCancel(e) {
    // We don't even need preventDefault because this button was designed to reset the form
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form submit={handleSubmit}>
      <FormRow label="Email address">
        <input className="form-input" value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <input
          className="form-input"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <input
          className="file-input"
          type="file"
          disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          // We should also validate that it's actually an image, but never mind
        />
      </FormRow>
      <FormRow>
        <Button onClick={handleCancel} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
