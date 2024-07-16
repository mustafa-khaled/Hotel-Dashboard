import { useSearchParams } from "react-router-dom";
import { useRooms } from "./useRooms";
import { useTranslation } from "react-i18next";

import Empty from "../../ui/empty/Empty";
import Spinner from "../../ui/spinner/Spinner";
import Table from "../../ui/Table";
import RoomRow from "./RoomRow";
import Pagination from "../../ui/pagination/Pagination";

function RoomsTable() {
  const [t] = useTranslation();

  // get the value from the URL
  const [searchParams] = useSearchParams();

  // Fetch Cabins Hook
  const { isLoading, rooms, totalPages } = useRooms();

  if (isLoading) return <Spinner />;
  if (!rooms.length) return <Empty resourceName="Rooms" />;

  // Filtering  The Value From The URL (Client Side Filtering)
  const filteredValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filteredValue === "all") filteredCabins = rooms;

  if (filteredValue === "no-discount")
    filteredCabins = rooms.filter((cabin) => cabin.discount === 0);

  if (filteredValue === "with-discount")
    filteredCabins = rooms.filter((cabin) => cabin.discount > 0);

  // Sort  The Value From The URL
  const sortedBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortedBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedRooms = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Cell isHeader>{t("general.image")}</Table.Cell>
          <Table.Cell isHeader>{t("general.name")}</Table.Cell>
          <Table.Cell isHeader>{t("rooms.capacity")}</Table.Cell>
          <Table.Cell isHeader>{t("rooms.price")}</Table.Cell>
          <Table.Cell isHeader>{t("rooms.discount")}</Table.Cell>
          <Table.Cell isHeader>{t("general.actions")}</Table.Cell>
        </Table.Header>
        <Table.Body
          data={sortedRooms}
          render={(room) => <RoomRow room={room} key={room?._id} />}
        />
      </Table>

      <Pagination count={5} pageCount={totalPages} />
    </>
  );
}

export default RoomsTable;
