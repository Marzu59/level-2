




"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import {  useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import   * as z from  "zod";


const formSchema = z.object({
  
  email: z.email(),
  password: z.string().min(8, "minimum length 8")
});

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
 
  const signInwithGoogle = async () => {
  const data = await authClient.signIn.social({

    provider: "google",
    callbackURL: "http://localhost:3000/"
  });
  console.log(data)

  //  toast.success("user logined successfully ")
};

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators:{
      onSubmit: formSchema,
    },
    onSubmit: async({value})=>{
      console.log(value)
      const toastId = toast.loading("loging user")
      const {data , error} = await authClient.signIn.email(value);
      

      try{

         if(error){
          console.log(error)
          toast.error(error.message, {id: toastId});
          return;
         }

         toast.success("user logined successfully ", {id: toastId})


      }
      catch(err){
               if(err instanceof Error){
                toast.error(err.message)
                return;
               }
            toast.error("something went wrong, please try again later")
      }
    }
  })



  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="signin-form" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
         <FieldGroup>

          
          
          <form.Field name="email" children={(field)=>{ 
            const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid;
            return (
                   <div>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <input
                    type="email"
                    id={field.name}
                    name={field.name} 
                    value={field.state.value}
                    onChange={(e)=> field.handleChange(e.target.value)}
                    />
           {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </div>
            )
            }}/>

          <form.Field name="password" children={(field)=>{ 
            const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid;
            return (
                   <div>
                    <FieldLabel htmlFor={field.name}>password</FieldLabel>
                    <input
                    type="password"
                    id={field.name}
                    name={field.name} 
                    value={field.state.value}
                    onChange={(e)=> field.handleChange(e.target.value)}
                    />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </div>
            )
            }}/>

          </FieldGroup>
        </form>
        
      </CardContent>
      <CardFooter className="flex flex-col gap-5 justify-end">
        <Button form="signin-form" type="submit">sigin</Button>
        <Button onClick={()=>signInwithGoogle()} variant="outline" type="button">
                  Login with Google
                </Button>
      </CardFooter>
    </Card>
  )
}
