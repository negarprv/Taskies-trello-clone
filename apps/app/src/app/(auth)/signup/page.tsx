"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@taskies/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@taskies/ui/form"
import { Input } from "@taskies/ui/input"
import { signupScheme } from "@/utils/validation/signupValidator"
import { useSignup } from "@/hooks/mutations/auth/useSignup"
import Link from "next/link"

interface InputsInterface {
  name: "fullName" |"email"|"password" ;
  label:string;
  placeholder:string;
  required:boolean
}

const inputs:InputsInterface[] = [
  { name:"fullName",
    label:"Full Name",
    placeholder:"Enter your name",
    required: true
  },
  { name:"email",
    label:"Email",
    placeholder:"Enter your email",
    required: true
  },
  { name:"password",
    label:"Password",
    placeholder:"Enter  password",
    required: true
  }
]
 


const SignUp = () => {
  const form = useForm<z.infer<typeof signupScheme>>({
    resolver: zodResolver(signupScheme),
    defaultValues: {
      fullName: "",
      email:"",
      password:"",
    },
  })

  const errors = form.formState.errors

  const{mutate: signupfunc, isPending} =useSignup()
 
  function onSubmit(values: z.infer<typeof signupScheme>) {
    signupfunc(values)
    console.log(values)
  }

  return (
    <div className=" flex flex-col gap-5">
      <div className=" flex flex-col gap-4">
      <h2 className=" h2-bold">Create your Account</h2>
      <p className="paragraph-regular text-dark_gray">Excited to Have You!</p>
      </div>

      
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className=" flex flex-col gap-2 ">
        {inputs.map((input:InputsInterface) => (
          <FormField
        
          control={form.control}
          name={input.name}
          render={({ field }) => (
            <FormItem className=" h-[101px] ">
            
              <FormLabel className="  text-black">{input.label} {input.required && (<span className=" text-red-500">*</span>)}</FormLabel>
              <FormControl>
                <Input className={` rounded-md shadow-none border-border border-gray_2 h-12 w-[352px] ${errors[field.name] && "border-red-500"} focus:shadow-sm`} placeholder={input.placeholder} {...field} type={input.name ==="password" ? "password": "text"} />
              </FormControl>
              <FormMessage className="subtle-medium text-red-500" />
            </FormItem>
          )}
        />
        ))}
        </div>
    
        <div>
          <p className="text-sm text-black/80">Already have an account? <Button variant="link"><Link href="/login">Login</Link></Button></p>
        </div>


        <Button disabled={isPending} className=" h-12 w-[352px]" type="submit">{isPending? "Loading...":"Sign Up"} </Button>
      </form>
    </Form>
    </div>
   
  )
}

export default SignUp
