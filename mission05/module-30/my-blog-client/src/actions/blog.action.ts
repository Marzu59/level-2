"use server";

import { blogService } from "@/services/blog.services";

export  const getBlogsAction = async()=>{
 
   return await blogService.getBlogposts();
     

};