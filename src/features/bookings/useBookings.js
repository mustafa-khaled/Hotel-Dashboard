import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // API Side Filtering
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // API Side Sorting
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = {
    field,
    direction,
  };

  // API Side  Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    // add the  filter and sortBy objects to refetch the data on filtering
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre Fetching To make the user Experience Better
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoading, bookings, error, count };
}
