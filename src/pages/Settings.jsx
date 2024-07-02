import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function Settings() {
  return (
    <div className="flex flex-col gap-[15px]">
      <Heading>Update hotel settings</Heading>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
