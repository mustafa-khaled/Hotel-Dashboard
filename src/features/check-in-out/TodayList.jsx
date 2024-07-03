import { useTranslation } from "react-i18next";
import TodayItem from "./TodayItem";

function TodayList({ activities }) {
  const [t] = useTranslation();

  return (
    <>
      {activities?.length > 0 ? (
        <ul className="overflow-auto overflow-x-hidden">
          {activities?.map((activity) => {
            return <TodayItem key={activity.id} activity={activity} />;
          })}
        </ul>
      ) : (
        <p className="flex h-full items-center justify-center text-center text-2xl font-[500] md:text-xl">
          {t("dashboard.noActivity")}
        </p>
      )}
    </>
  );
}

export default TodayList;
