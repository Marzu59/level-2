"use server";

import { BlogData, blogService } from "@/services/blog.services";
import { updateTag } from "next/cache";

export  const getBlogsAction = async()=>{
 
   return await blogService.getBlogposts();
     

};

export const createBlogpost=  async(data:BlogData)=>{

     const res = await blogService.createBlogpost(data)
     updateTag("blogPosts")

      return res;

}