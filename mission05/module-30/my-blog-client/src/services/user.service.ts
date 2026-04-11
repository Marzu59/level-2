import { env } from "@/env";
import { cookies } from "next/headers";


 const AUTH_URL = env.AUTH_URL;

// type serviceResponse= {
      
//       error:  string | null  
     
// }




export const userService = {

    getSession: async function () {

        try {

            const cookieStore = await cookies();
            // console.log(cookieStore.get("better-auth.session_token"))

            const res = await fetch(`${AUTH_URL}/get-session`, {
                headers: {
                    Cookie: cookieStore.toString()
                },
                cache: 'no-store',
            });
            
             const session = await res.json()

             if(session === null){
                return {data:null, error:"session is missing"}
             }

             return {data: session, error:null}


        }

        catch (error) {
             if(error instanceof Error){
               return {data:null, error: error.message}
                
             }

             return {data:null, error: "something is wrong"}

        };

    }



}