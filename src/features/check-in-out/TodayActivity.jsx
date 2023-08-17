import { useTodayActivity } from "./useTodayActivity";

import styles from "./CheckinBooking.module.css";

import Heading from "../../ui/heading/Heading";
import Row from "../../ui/row/Row";
import Spinner from "../../ui/spinner/Spinner";
import TodayList from "./TodayList";

function TodayActivity() {
  const { isLoading, activities } = useTodayActivity();

  return (
    <div className={styles.today}>
      <Row type="horizontal">
        <Heading type="h2">Today</Heading>
      </Row>
      {isLoading ? <Spinner /> : <TodayList activities={activities} />}
    </div>
  );
}

export default TodayActivity;
