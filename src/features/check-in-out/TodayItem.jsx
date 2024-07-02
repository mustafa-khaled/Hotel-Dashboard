import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";
import Flag from "../../ui/flag/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <div className="my-[15px] flex items-start justify-between gap-[10px] border-b border-[#1f2937] p-[5px]">
      {status === "unconfirmed" && <Tag type="green">arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag Of ${guests.countryFlag}`} />
      <p className="text-sm">{guests.fullName}</p>
      <p className="text-sm">{numNights}</p>
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
