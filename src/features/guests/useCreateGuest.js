import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEditGuest as CreateGuestApi } from "../../services/apiGuests.js";
import { toast } from "react-hot-toast";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreating } = useMutation({
    mutationFn: CreateGuestApi,
    onSuccess: () => {
      toast.success("New Guest Created Successfully");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createGuest, isCreating };
}
