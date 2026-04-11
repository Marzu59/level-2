"use client"
import { getBlogsAction } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export default  function AboutPage(){
// await new Promise((resolve)=>setTimeout(resolve, 4000))

// throw new Error("something  went wrong");
 
   const [data, setData] = useState();
   console.log(data)
  const [err,  setError] = useState< string | null>(null)   
  console.log(err)
   useEffect(()=>{
    
    (async ()=>{
          const {data, error} = await getBlogsAction();
          setData(data)
          setError(error)

    })();

   },[])


  return (
    
    <div>



        <h1>this  is about page component</h1>
    </div>




  );


}