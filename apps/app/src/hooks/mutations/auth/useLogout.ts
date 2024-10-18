import { logout } from "@/server/actions/auth/logout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      // queryClient.invalidateQueries(['user']);
      toast.success("Successfully Logged out!");
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
}
