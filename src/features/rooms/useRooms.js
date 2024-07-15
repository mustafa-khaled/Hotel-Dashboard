import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import { useSearchParams } from "react-router-dom";

export function useRooms() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: roomsData,
    error,
  } = useQuery({
    queryKey: ["rooms", page],
    queryFn: () => getRooms(page),
    keepPreviousData: true,
  });

  return {
    isLoading,
    rooms: roomsData?.rooms,
    totalPages: roomsData?.totalPages,
    currentPage: roomsData?.currentPage,
    error,
  };
}
