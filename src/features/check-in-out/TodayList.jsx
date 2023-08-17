import styles from "./CheckinBooking.module.css";
import TodayItem from "./TodayItem";

function TodayList({ activities }) {
  return (
    <>
      {activities.length > 0 ? (
        <ul className={styles["today-list"]}>
          {activities.map((activity) => {
            return <TodayItem key={activity.id} activity={activity} />;
          })}
        </ul>
      ) : (
        <p className={styles["no-activity"]}>No activity today...</p>
      )}
    </>
  );
}

export default TodayList;
