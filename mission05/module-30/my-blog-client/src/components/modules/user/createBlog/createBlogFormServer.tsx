import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { cookies } from "next/headers";


const  API_URL = env.API_URL;
export default function CreateBlogForm (){
      
 
       const createBlog = async(formData:FormData)=>{
        "use server";
            
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const tags = formData.get("tags") as string;
        
        
        const blogData = {
            title,
            content,
            tags: tags.split(",").map(item=>item.trim()).filter((item=> item !== ""))
        }
        
            // console.log(JSON.stringify(blogData))
              const cookieStore = await cookies();
            const res = await fetch(`${API_URL}/posts`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    Cookie: cookieStore.toString(),
                },
                body: JSON.stringify(blogData)
            })
            console.log(res)


       }

    return(
      
   <Card className="max-w-2xl mx-auto">
          
          <CardHeader>
            <CardTitle>Create blog</CardTitle>
            <CardDescription> you can write your blog here</CardDescription>

          </CardHeader>

          <CardContent>
            <form id="blog-form" action={createBlog}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="title">title</FieldLabel>
                    <Input id="title" type="text" name="title" placeholder="blog-title" required />  
                </Field>
                <Field>
                    <FieldLabel htmlFor="content">content</FieldLabel>
                    <Textarea id="content" name="content" placeholder="write your blog" required/>
                    
                </Field>
                <Field>
                    <FieldLabel htmlFor="tags">tags</FieldLabel>
                     <Input id="tags" type="text" name="tags"  placeholder="nextjs, web" required/>  
                    

                </Field>
            </FieldGroup>

            </form>
          </CardContent>

          <CardFooter>
            <Button form="blog-form" type="submit" className="w-full">submit</Button>

          </CardFooter>

   </Card>

    );
 
};