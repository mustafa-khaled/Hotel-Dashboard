import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/button/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setIsActive((active) => !active)}>
          Add New Cabin
        </Button>
        {isActive && <CreateCabinForm />}
      </Row>
    </div>
  );
}

export default Cabins;
