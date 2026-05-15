import CreateBlogformClient from "@/components/modules/user/createBlog/createBlogFormClient";
import CreateBlogForm from "@/components/modules/user/createBlog/createBlogFormServer";
import { blogService } from "@/services/blog.services";
import { Blogpost } from "@/types";


export default async function CreateBlogPage (){
   
     const {data} = await blogService.getBlogposts({}, {cache: "no-store"});
     
     
if(!data || !data.data){
    return <div>failed to load  blogs</div>
}
 
    return(
      
    <div >
        {/* <h1>create blog page for user</h1> */}
          
        {/* <CreateBlogForm/> */}

        <CreateBlogformClient/>



           <h1>{data.data.map((item:Blogpost)=>
         <p key={item.id}> {item.title} </p> )}</h1>

    </div>

    );
 
};