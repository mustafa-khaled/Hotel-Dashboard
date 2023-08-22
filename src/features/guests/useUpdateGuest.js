import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEditGuest } from "../../services/apiGuests";
import { toast } from "react-hot-toast";

export function useUpdateGuest() {
  const queryClient = useQueryClient();

  const { mutate: updateGuest, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newGuestData, id }) => CreateEditGuest(newGuestData, id),
    onSuccess: () => {
      toast.success(" Guest Successfully Updated");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateGuest };
}
