import TodayItem from "./TodayItem";

function TodayList({ activities }) {
  return (
    <>
      {activities?.length > 0 ? (
        <ul className="overflow-auto overflow-x-hidden">
          {activities?.map((activity) => {
            return <TodayItem key={activity.id} activity={activity} />;
          })}
        </ul>
      ) : (
        <p className="text-center text-2xl font-[500] md:text-xl">
          No activity today...
        </p>
      )}
    </>
  );
}

export default TodayList;
