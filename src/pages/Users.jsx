import { useTranslation } from "react-i18next";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("users.createUser")}</Heading>
      </div>
      <SignupForm />
    </div>
  );
}

export default NewUsers;
