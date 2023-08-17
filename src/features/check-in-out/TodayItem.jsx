import { Link } from "react-router-dom";
import styles from "./CheckinBooking.module.css";
import Tag from "../../ui/tag/Tag";
import Flag from "../../ui/flag/Flag";
import Button from "../../ui/button/Button";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <div className={styles["today-item"]}>
      {status === "unconfirmed" && <Tag type="green">arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag Of ${guests.countryFlag}`} />
      <div className={styles.guest}>{guests.fullName}</div>
      <div>{numNights}</div>
      {status === "unconfirmed" && (
        <Link to={`/checkIn/${id}`}>
          <Button size="small">Check In</Button>
        </Link>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </div>
  );
}

export default TodayItem;
