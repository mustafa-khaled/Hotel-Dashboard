import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // Stat 1)
  const numBookings = bookings.length;

  // Stat 2)
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // Stat 3)
  const checkins = confirmedStays.length;

  // Stat 4)
  // We will use a trick to calculate occupancy rate. It's not 100% accurate, but we want to keep it simple. We know we can have a total of 'numDays * cabinCount' days to occupy, and we also know how many days were actually booked. From this, we can compute the percentage
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<i className="fa-solid fa-briefcase"></i>}
        title="Bookings"
        value={numBookings}
        color="#0000ff7a"
      />
      <Stat
        icon={<i className="fa-regular fa-money-bill-1"></i>}
        title="Sales"
        value={formatCurrency(sales)}
        color="#00800087"
      />
      <Stat
        icon={<i className="fa-regular fa-calendar-days"></i>}
        title="Check ins"
        value={checkins}
        color="#4b008282"
      />
      <Stat
        icon={<i className="fa-solid fa-signal"></i>}
        title="Occupancy rate"
        value={`${Math.round(occupation * 100)}%`}
        color="#ffff0080"
      />
    </>
  );
}

export default Stats;
