

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
  

    const {limit, page, total,totalPages} = meta;
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
  
 

  return (
    <div className="flex items-center justify-between px-2 py-4 border-t mt-4">
      <div className="text-sm text-muted-foreground">
        Showing
      </div>

      <div className="flex items-center space-x-2">
        <Button >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">
            
          </span>
        </div>

        <Button onClick={()=> nevigateToPage(page + 1)}
          variant="outline"
          size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
         0 of 0 page
        <Button
          variant="outline"
          size="icon">
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}