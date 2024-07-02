import AddGuest from "../features/guests/AddGuest";
import GuestsOperations from "../features/guests/GuestsOperations";
import GuestsTable from "../features/guests/GuestsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Guests() {
  return (
    <div className="flex flex-col gap-[15px]">
      <Row>
        <Heading>All Guests</Heading>
        <AddGuest />
      </Row>
      <GuestsOperations />
      {/* <GuestsTable /> */}
    </div>
  );
}

export default Guests;
