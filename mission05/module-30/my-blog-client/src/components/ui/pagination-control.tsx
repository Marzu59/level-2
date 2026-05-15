

"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";
import { useRouter, useSearchParams } from "next/navigation";


interface PaginationControlProps {
    meta: {
        limit: number;
        page: number;
        total: number;
        totalPages: number;
    };
}

export default function PaginationControls( {meta}: PaginationControlProps) {
  

    const {limit:pageSize, page:currentPage, total,totalPages} = meta;
//   console.log(limit)
    const searchParams = useSearchParams();
    // console.log(searchParams.get("page"))
    const router = useRouter()

    
   

    const nevigateToPage = (pagee:number)=>{
        const params = new URLSearchParams(searchParams.toString());
    params.set("page", pagee.toString())  
        router.push(`?${params.toString()}`)
      
        //  console.log(params.get("page"))
    };

  //* Showing 1 to 10 of 21 -> page 1
  //* Showing 11 to 20 of 21 -> page 2
   const start =   (currentPage -1) * pageSize +1;
    const end =   Math.min(currentPage * pageSize, total)
 

  return (
    <div className="flex items-center justify-between px-2 py-4 border-t mt-4">
      <div className="text-sm text-muted-foreground">
        Showing {start} to {end} of {total} results
      </div>

      <div className="flex items-center space-x-2">
        <Button >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button onClick={()=>nevigateToPage(currentPage -1)}
         disabled={currentPage == 1}
          variant="outline"
          size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">
            
          </span>
        </div>

        <Button onClick={()=> nevigateToPage(currentPage + 1)}
        disabled={currentPage == totalPages}
          variant="outline"
          size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
          {currentPage} of  {totalPages} pages
        <Button
          variant="outline"
          size="icon">
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}