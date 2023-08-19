import GuestsTable from "../features/guests/GuestsTable";
import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";

function Guests() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
      </Row>
      <Row type="horizontal">
        <GuestsTable />
      </Row>
    </div>
  );
}

export default Guests;
