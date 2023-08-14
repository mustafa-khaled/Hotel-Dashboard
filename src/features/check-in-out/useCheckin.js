import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} Successfully Checked In`);
      queryClient.invalidateQueries({ active: true });
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("There Was An Error While Checking In");
    },
  });

  return { checkin, isCheckingIn };
}
