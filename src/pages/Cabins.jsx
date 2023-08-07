import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
    </div>
  );
}

export default Cabins;
