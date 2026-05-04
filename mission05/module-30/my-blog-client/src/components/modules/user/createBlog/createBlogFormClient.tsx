"use client";
import { createBlogpost } from "@/actions/blog.action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";




const  blogSchema = z.object({
    title: z.string().min(3, "title must be at least 3 chareacter").max(200, "title must be less then 200 character"),
    content: z.string()
              .min(10, "content must be at least 10 character")
              .max(500, "content must be less then 500 character "),
    tags: z.string()
                     
});



export default function CreateBlogformClient (){

   
    const form = useForm({
        defaultValues: {
            title: "",
            content: "",
            tags: "",

        },
        validators: {
            onSubmit: blogSchema,
        },
        onSubmit: async ({value})=>{
            const toastId =    toast.loading("creating...");
           const blogData =  {
            ...value,
            tags:  value.tags.split(",").map((itm)=> itm.trim()).filter((item)=> item !== ""),
           };
           console.log(blogData)

           try {
                   const res  = await createBlogpost(blogData)
                     console.log(res)
                     if(res.error){
                        toast.error(res.error, {id:toastId})
                        return ;
                     }
              
              toast.success("post created", {id:toastId})
           }
           catch(err){
                
             toast.error("something went wrong",{id: toastId})
           }

        }

    })



 
    return(
      
    <Card className="max-w-2xl mx-auto">
     <CardHeader>
        <CardTitle>post your blog </CardTitle>

     </CardHeader>
       
       <CardContent>

        <form id="blog-post" onSubmit={(e)=>{
            e.preventDefault();
            form.handleSubmit();  
        }}>
            <FieldGroup>
                <form.Field
                name="title"
                children={(field)=>{
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                    return(
                        <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>title</FieldLabel>
                        <input 
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e)=>field.handleChange(e.target.value)}
                        placeholder="blog-title"
                        />
                            {
                                isInvalid && (
                                    <FieldError errors={field.state.meta.errors} />
                                )
                            }
                        </Field>
                    )
                }}
                  />
                      
                      <form.Field
                name="content"
                children={(field)=>{
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                    return(
                        <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>title</FieldLabel>
                        <input 
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e)=>field.handleChange(e.target.value)}
                        placeholder="write your blog"
                        />
                             
                              {
                                isInvalid && (
                                    <FieldError errors={field.state.meta.errors} />
                                )
                            }
                        </Field>
                    )
                }}
                  />


                  <form.Field
                name="tags"
                children={(field)=>{
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

                    return(
                        <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>title</FieldLabel>
                        <input 
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e)=>field.handleChange(e.target.value)}
                        placeholder="write your tags"
                        />
                            {
                                isInvalid && (
                                    <FieldError errors={field.state.meta.errors} />
                                )
                            }
                        </Field>
                    )
                }}
                  />

            </FieldGroup>

        </form>

       </CardContent>

       <CardFooter className="flex flex-col">
           <Button form="blog-post" type="submit" className="w-full">submit</Button>
       </CardFooter>
       


    </Card>

    );
 
};