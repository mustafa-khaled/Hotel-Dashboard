import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday } from "date-fns";

import styles from "./BookingRow.module.css";

import Tag from "../../ui/tag/Tag";
import Menus from "../../ui/menus/Menus";
import Modal from "../../ui/modal/Modal";
import ConfirmDelete from "../../ui/confirmDelete/ConfirmDelete";
import Table from "../../ui/table/Table";

const Cabin = () => {
  return <div className={styles.cabin}></div>;
};

const statusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <div className={styles.stacked}>
        <span>{guestName}</span>
        <span>{email}</span>
      </div>

      <div className={styles.stacked}>
        <span>
          {isToday(new Date(startDate))
            ? "today"
            : formatDistanceFromNow(startDate)}
          &rarr; {numNights} Nights Stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <div className={styles.amount}>{formatCurrency(totalPrice)}</div>
    </Table.Row>
  );
}

export default BookingRow;
