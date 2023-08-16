import { useRecentBookings } from "./useRecentBookings";
import styles from "./dashboard.module.css";

import Spinner from "../../ui/spinner/Spinner";
import { useRecentStays } from "./useRecentStays";

function DashboardLayout() {
  const { bookings, bookingsLoading } = useRecentBookings();
  const { loadingStays, stays, confirmedStays } = useRecentStays();

  if (bookingsLoading || loadingStays) return <Spinner />;

  return (
    <div className={styles["dashboard-layout"]}>
      <h2>hi</h2>
    </div>
  );
}

export default DashboardLayout;
