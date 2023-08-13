import { useSearchParams } from "react-router-dom";
import { useCabins } from "./useCabins";
import Spinner from "../../ui/spinner/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/table/Table";
import Menus from "../../ui/menus/Menus";

function CabinTable() {
  // get the value from the URL
  const [searchParams] = useSearchParams();

  // Fetch Cabins Hook
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;

  // Filtering  The Value From The URL
  const filteredValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filteredValue === "all") filteredCabins = cabins;

  if (filteredValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filteredValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sort  The Value From The URL
  const sortedBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortedBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        {/* Render Props Pattern */}
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
export default CabinTable;
