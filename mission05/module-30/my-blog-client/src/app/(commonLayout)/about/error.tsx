"use client";

import { useEffect } from "react";

export default function aboutError ({error, reset}:
    {error: Error & {digest?:string};
      reset:()=>void;    }){
    
  
   useEffect(()=>{
       
    console.log(error)

      
   }, [])

    return(
        <div>


            <h1>someThing went wrong: Please try again later</h1>
            <button onClick={()=>reset()}>Retry</button>
        </div>
    )
}