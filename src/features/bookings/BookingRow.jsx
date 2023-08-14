import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday } from "date-fns";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

import styles from "./BookingRow.module.css";

import Tag from "../../ui/tag/Tag";
import Menus from "../../ui/menus/Menus";
import Modal from "../../ui/modal/Modal";
import ConfirmDelete from "../../ui/confirmDelete/ConfirmDelete";
import Table from "../../ui/table/Table";

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
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  return (
    <Table.Row>
      <div className={styles.cabin}> {cabinName}</div>

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
      <Modal>
        <Menus>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<i className="fa-regular fa-eye"></i>}
              onClick={() => navigate(`/bookings/${bookingId}`)}>
              See Details
            </Menus.Button>

            {status === "checked-in" && (
              <Menus.Button
                icon={<i className="fa-solid fa-right-from-bracket"></i>}
                disabled={isCheckingOut}
                onClick={() => checkout(bookingId)}>
                Check Out
              </Menus.Button>
            )}

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<i className="fa-solid fa-circle-arrow-down"></i>}
                onClick={() => navigate(`/bookings/${bookingId}`)}>
                Check In
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<i className="fa-solid fa-trash-can"></i>}>
                Delete Booking
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus>
        <Modal.Window name="delete">
          <ConfirmDelete
            resource="booking"
            disabled={isDeleting}
            onConfirm={() => {
              deleteBooking(bookingId);
            }}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
