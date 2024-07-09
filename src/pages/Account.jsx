import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";

function Account() {
  return (
    <div className="flex flex-col gap-[15px]">
      <Heading>Update your account</Heading>

      <div className="flex flex-col gap-[15px]">
        <Heading>Update user data</Heading>
        <UpdateUserDataForm />
      </div>

      <div className="flex flex-col gap-[15px]">
        <Heading>Update password</Heading>
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default Account;
