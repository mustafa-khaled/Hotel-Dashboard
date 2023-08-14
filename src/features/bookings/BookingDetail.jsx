import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";

import styles from "./BookingDetail.module.css";

import ButtonText from "../../ui/buttonText/ButtonText";
import Empty from "../../ui/empty/Empty";
import Spinner from "../../ui/spinner/Spinner";
import Row from "../../ui/row/Row";
import Heading from "../../ui/heading/Heading";
import Tag from "../../ui/tag/Tag";
import ButtonGroup from "../../ui/buttonGroup/ButtonGroup";
import Button from "../../ui/button/Button";
import Modal from "../../ui/modal/Modal";
import ConfirmDelete from "../../ui/confirmDelete/ConfirmDelete";
import BookingDataBoxComponent from "./BookingDataBox";
import { useCheckout } from "../check-in-out/useCheckout";

const statusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};

function BookingDetail() {
  const { isLoading, booking = {} } = useBooking();
  const { id: bookingId, status } = booking;
  const { checkout, isCheckingOut } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;

  return (
    <>
      <Row type="horizontal">
        <div className={styles["booking-detail"]}>
          <Heading type="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBoxComponent booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            icon={<i className="fa-solid fa-right-from-bracket"></i>}
            disabled={isCheckingOut}
            onClick={() => checkout(bookingId)}>
            Check Out
          </Button>
        )}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
