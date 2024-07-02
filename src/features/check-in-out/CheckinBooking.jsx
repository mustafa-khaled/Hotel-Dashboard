import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useBooking } from "../bookings/useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import styles from "./CheckinBooking.module.css";

import Spinner from "../../ui/spinner/Spinner";
import Row from "../../ui/row/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/buttonGroup/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/buttonText/ButtonText";
import Checkbox from "../../ui/checkbox/Checkbox";
import BookingDataBox from "../bookings/BookingDataBox";

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakFast, setaddBreakFast] = useState(false);

  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  const { isLoading: isLoadingSettings, settings } = useSettings();
  const moveBack = useMoveBack();

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    numNights * settings.breakfastPrice * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakFast) {
      checkin({
        bookingId,
        breakFast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakFast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading type="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <div className={styles["checkin-booking"]}>
          <Checkbox
            id="breakfast"
            checked={addBreakFast}
            onChange={() => {
              setaddBreakFast((breakFast) => !breakFast);
              setConfirmPaid(false);
            }}
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}

      <div className={styles["checkin-booking"]}>
        <Checkbox
          id="confirm"
          checked={confirmPaid}
          disabled={confirmPaid || isCheckingIn}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakFast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice,
              )} (${formatCurrency(totalPrice)}) + (${formatCurrency(
                optionalBreakfastPrice,
              )})`}
        </Checkbox>
      </div>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
