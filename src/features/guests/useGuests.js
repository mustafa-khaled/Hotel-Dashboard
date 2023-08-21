import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";

export function useGuests() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Search
  const search = searchParams.get("search");

  // API Side  Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", page, search],
    queryFn: () => getGuests({ page, search }),
  });

  // Pre Fetching To make the user Experience Better
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["guests", page - 1, search],
      queryFn: () => getGuests({ page: page - 1, search }),
    });
  }

  return {
    guests,
    isLoading,
    error,
    count,
  };
}
