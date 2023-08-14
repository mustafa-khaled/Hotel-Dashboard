import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking ${data.id} Successfully Checked Out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There Was An Error While Checking Out");
    },
  });

  return { checkout, isCheckingOut };
}
