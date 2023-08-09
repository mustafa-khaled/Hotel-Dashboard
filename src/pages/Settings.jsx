import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";

function Settings() {
  return (
    <div className="pages-margin">
      <Row>
        <Heading as="h1">Update hotel settings</Heading>
        <UpdateSettingsForm />
      </Row>
    </div>
  );
}

export default Settings;
