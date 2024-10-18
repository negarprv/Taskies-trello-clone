import { login } from "@/server/actions/auth/login";
import { User } from "@/types/users.types";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationFn: ({ email, password }: User) => login({ email, password }),
    onSuccess: () => {
      toast.success("Successfully Logged in!");
      router.push("/dashboard");
    },
    onError: async (error: any) => {
      console.log(error)
      toast.error(error.message);
    }
  });
}
