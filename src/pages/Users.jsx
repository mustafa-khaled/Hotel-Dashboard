import { useTranslation } from "react-i18next";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <Heading>{t("users.createUser")}</Heading>
      <SignupForm />
    </div>
  );
}

export default NewUsers;
