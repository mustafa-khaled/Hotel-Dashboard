import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddBooking from "../features/bookings/AddBooking";

function Bookings() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Row>
        <BookingTable />
        <AddBooking />
      </Row>
    </div>
  );
}

export default Bookings;
