import { useTranslation } from "react-i18next";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function Settings() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <Heading>{t("settings.pageTitle")}</Heading>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
