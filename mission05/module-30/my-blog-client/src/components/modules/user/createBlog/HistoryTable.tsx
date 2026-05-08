import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Blogpost } from "@/types";


export default function HistoryTable ({posts}: {posts:Blogpost[]}){
 
    return(
      
    <div className="border rounded-md">

        <h1>this is history component</h1>

        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-max">title</TableHead>
      <TableHead>tags</TableHead>
      <TableHead>content</TableHead>
      <TableHead className="text-right">views</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* <TableRow>
      <TableCell >INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>


          

    </TableRow> */}

    {
        posts.map(item=>(
            <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.tags}</TableCell>
                <TableCell>{item.content}</TableCell>
                <TableCell className="text-right">{item.views}</TableCell>

            </TableRow>
        ))
    }


  </TableBody>
</Table>
 
      
    </div>

    );
 
};