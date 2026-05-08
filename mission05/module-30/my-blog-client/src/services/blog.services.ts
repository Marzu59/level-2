import { env } from "@/env";
import { Cossette_Texte } from "next/font/google";
import { cookies } from "next/headers";


interface GetBlogParams {
     isFeatured?: boolean;
     search?:string;
     page?: string;
}

interface serviceOptions {
     cache?: RequestCache;
     revalidate?: number;
}

export interface BlogData {
     title: string;
     content: string;
     tags: string[]
}
 
const API_URL = env.API_URL;
export const blogService = {
  
     getBlogposts: async function (params?:GetBlogParams, options?:serviceOptions){

        try{

          const url = new URL(`${API_URL}/posts`)
          // console.log(Object.entries(params))
            
          //this line is very confusing ..i need to recap this code
            if(params){
               Object.entries(params).forEach(([key, value])=>{
                    if(value !== undefined && value !== null && value !== ""){
                         url.searchParams.append(key, value)
                    }
               })
            }
          
             console.log(url.toString())

              const config:RequestInit  = {};
              if(options?.cache){
               config.cache = options.cache
              }
              if(options?.revalidate){
               config.next = { revalidate: options.revalidate};
              }

              config.next = {...config.next, tags:["blogPosts"]};
              


            
             const res =  await fetch(url.toString(), config)
              
             const data = await res.json()
             return {data: data, error: null}

        }
        catch(error){
             if(error instanceof  Error){
                 return  { data:null, error: error.message}
             }
           return {data:null, error: "something is wrong"}
        }
     },

     getBlogById: async function(id:string){
          try{
                
               const res = await fetch(`${API_URL}/posts/${id}`);

               const data = await res.json();

               return {data:data, error:null}



          }
          catch(error){
             if(error instanceof Error){
               return { data:null, error:error.message}
             }

             return {data:null, error: "something is wrong"}
          }
     },

     createBlogpost: async function (blogData:BlogData){

           try{
               const cookieStore = await cookies();
             const res = await fetch(`${API_URL}/posts`,{
               method: "POST",
               headers: {
                    "Content-type": "application/json",
                    Cookie: cookieStore.toString(),
               },
               body: JSON.stringify(blogData)
             });
             
             const data = await res.json();

             if(data.error){
               return {data: null, error: "post not created"}
             }

             return {data: data, error: null}

 
           }

           catch(err){
               return {data : null, err: {message: "something went wrong"}}
           }


     },

};