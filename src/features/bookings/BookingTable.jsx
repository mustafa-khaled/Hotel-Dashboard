import { useBookings } from "./useBookings";
import BookingRow from "./BookingRow";
import Spinner from "../../ui/spinner/Spinner";
import Table from "../../ui/table/Table";
import Menus from "../../ui/menus/Menus";
import Pagination from "../../ui/pagination/Pagination";
import Empty from "../../ui/empty/Empty";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="Bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          {/* The Count Provided By Supabase */}
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
