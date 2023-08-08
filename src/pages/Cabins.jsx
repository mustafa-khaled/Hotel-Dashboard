import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </div>
  );
}

export default Cabins;
