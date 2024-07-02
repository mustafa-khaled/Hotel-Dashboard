import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <div className="flex flex-col gap-[15px]">
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </div>
  );
}

export default NewUsers;
