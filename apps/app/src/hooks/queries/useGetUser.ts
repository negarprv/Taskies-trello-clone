import { getUserById } from "@/server/actions/user/getUserById";
import {  useQuery } from "@tanstack/react-query";


  export function useGetUser(id:string) {
  
    return useQuery({
        queryKey: ["user", id], 
        queryFn:()=> getUserById(id),
    })
  }