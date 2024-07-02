import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddBooking from "../features/bookings/AddBooking";

function Bookings() {
  return (
    <div className="flex flex-col gap-[15px]">
      <Row>
        <Heading>All bookings</Heading>
        <AddBooking />
      </Row>
      <BookingTableOperations />
      {/* <BookingTable /> */}
    </div>
  );
}

export default Bookings;
