import { useTranslation } from "react-i18next";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function Settings() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <Heading>{t("settings.pageTitle")}</Heading>
      </div>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
