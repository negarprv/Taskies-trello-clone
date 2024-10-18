import { signUp } from "@/server/actions/auth/signup";
import { User } from "@/types/users.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


  export function useSignup() {
    const router = useRouter()
    return useMutation({
        mutationFn:({fullName, email, password}:User)=> signUp({fullName, email, password}),
        onSuccess:()=> {
            toast.success('Successfully Signed Up!')
            router.push("/dashboard")
        },
        onError:(error)=> {
          console.log(error)
          toast.error(error.message)

        }
    })
  }