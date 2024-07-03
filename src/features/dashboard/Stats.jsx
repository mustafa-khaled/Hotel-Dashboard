import { formatCurrency } from "../../utils/helpers";
import { IoBriefcase } from "react-icons/io5";
import { FaMoneyBillWave, FaCalendarAlt, FaSignal } from "react-icons/fa";

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
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-[10px]">
      <Stat
        icon={<IoBriefcase className="text-xl" />}
        title="sidebar.bookings"
        value={numBookings}
        color="#0000ff7a"
      />
      <Stat
        icon={<FaMoneyBillWave className="text-xl" />}
        title="dashboard.stats.sales"
        value={formatCurrency(sales)}
        color="#00800087"
      />
      <Stat
        icon={<FaCalendarAlt className="text-xl" />}
        title="dashboard.stats.checkIns"
        value={checkins}
        color="#4b008282"
      />
      <Stat
        icon={<FaSignal className="text-xl" />}
        title="dashboard.stats.occupancyRate"
        value={`${Math.round(occupation * 100)}%`}
        color="#ffff0080"
      />
    </div>
  );
}

export default Stats;
