import { Link } from "react-router-dom";

import CheckoutButton from "../check-in-out/CheckoutButton";
import Button from "../../ui/button/Button";
import Flag from "../../ui/flag/Flag";
import Tag from "../../ui/tag/Tag";

function TodayItem({ stay }) {
  const { id, status, guests, numNights } = stay;

  const statusToAction = {
    unconfirmed: {
      action: "arriving",
      tag: "green",
      button: (
        <Button
          variation="primary"
          size="small"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      ),
    },
    "checked-in": {
      action: "departing",
      tag: "blue",
      button: <CheckoutButton bookingId={id} />,
    },
  };

  return (
    <li>
      <Tag type={statusToAction[status].tag}>
        {statusToAction[status].action}
      </Tag>
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <div>{guests.fullName}</div>
      <div>{numNights} nights</div>

      {statusToAction[status].button}
    </li>
  );
}

export default TodayItem;
