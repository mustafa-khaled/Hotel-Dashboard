import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";

export function useGuests() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // API Side  Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", page],
    queryFn: () => getGuests({ page }),
  });

  // Pre Fetching To make the user Experience Better
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["guests", page - 1],
      queryFn: () => getGuests({ page: page - 1 }),
    });
  }

  return {
    guests,
    isLoading,
    error,
    count,
  };
}
