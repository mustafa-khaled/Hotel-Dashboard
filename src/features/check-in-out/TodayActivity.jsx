import { useTodayActivity } from "./useTodayActivity";
import { useTranslation } from "react-i18next";

import Heading from "../../ui/Heading";
import Spinner from "../../ui/spinner/Spinner";
import TodayList from "./TodayList";

function TodayActivity() {
  const [t] = useTranslation();

  const { isLoading, activities } = useTodayActivity();

  return (
    <div className="w-full bg-colorGrey2 p-[15px] lg:w-[50%]">
      <Heading>{t("dashboard.today")}</Heading>
      {isLoading ? <Spinner /> : <TodayList activities={activities} />}
    </div>
  );
}

export default TodayActivity;
