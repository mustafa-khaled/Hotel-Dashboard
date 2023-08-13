import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";
import BookingTable from "../features/bookings/BookingTable";

function Bookings() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>
      <BookingTable />
    </div>
  );
}

export default Bookings;
