import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRoom } from "../../services/apiRooms";
import { toast } from "react-hot-toast";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("New Cabin Has Successfully Crated");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabin };
}
