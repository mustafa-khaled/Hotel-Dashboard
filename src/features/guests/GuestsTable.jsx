import { useGuests } from "./useGuests";

import Menus from "../../ui/menus/Menus";
import Table from "../../ui/table/Table";
import Spinner from "../../ui/spinner/Spinner";
import Empty from "../../ui/empty/Empty";
import GuestsRow from "./GuestsRow";
import Pagination from "../../ui/pagination/Pagination";

function GuestsTable() {
  const { guests = {}, isLoading, count } = useGuests();

  if (isLoading) return <Spinner />;
  if (!guests.length) return <Empty resourceName="Guests" />;

  return (
    <Menus>
      <Table columns="0.4fr 1fr 2.4fr 2fr 1fr 3.2rem">
        <Table.Header>
          <div></div>

          <div>ID</div>
          <div>Full Name </div>
          <div>Email</div>
          <div>Nationality</div>
          <div></div>
        </Table.Header>

        {/* Render Props Pattern */}
        <Table.Body
          data={guests}
          render={(guests) => <GuestsRow guests={guests} key={guests.id} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestsTable;
