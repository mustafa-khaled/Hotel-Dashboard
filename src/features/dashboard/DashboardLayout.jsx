import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";

import styles from "./dashboard.module.css";
import Spinner from "../../ui/spinner/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

function DashboardLayout() {
  const { bookings, bookingsLoading, numDays } = useRecentBookings();
  const { loadingStays, stays, confirmedStays } = useRecentStays();
  const { cabins = {}, isLoading: cabinsLoading } = useCabins();
  const cabinCount = cabins.length;

  if (bookingsLoading || loadingStays || cabinsLoading) return <Spinner />;

  return (
    <div className={styles["dashboard-layout"]}>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
