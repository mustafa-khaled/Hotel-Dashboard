import GuestsOperations from "../features/guests/GuestsOperations";
import GuestsTable from "../features/guests/GuestsTable";
import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";

function Guests() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
        <GuestsOperations />
      </Row>
      <Row>
        <GuestsTable />
      </Row>
    </div>
  );
}

export default Guests;
