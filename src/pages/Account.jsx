import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";

function Account() {
  return (
    <div className="pages-margin">
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </div>
  );
}

export default Account;
