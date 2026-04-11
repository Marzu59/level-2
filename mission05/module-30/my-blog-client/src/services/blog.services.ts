import { env } from "@/env";


interface GetBlogParams {
     isFeatured?: boolean;
     search?:string;
}

interface serviceOptions {
     cache?: RequestCache;
     revalidate?: number;
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
     }

};