import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/heading/Heading";

function NewUsers() {
  return (
    <div className="pages-margin">
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </div>
  );
}

export default NewUsers;
