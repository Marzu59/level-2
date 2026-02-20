import Link from "next/link";


export default function PracticeLayout(
    {
        children,marketingSlot, salesSlot
    }: {children:React.ReactNode;
        marketingSlot:React.ReactNode;
        salesSlot:React.ReactNode;
    }){


    return(
        <div>
            <nav className="flex gap-10 ">

                <Link className="hover:underline" href="/development">
                Development</Link>
                <Link className="hover:underline" href="/marketing">
                marketintg</Link>
                <Link className="hover:underline" href="/marketing/settings">
                settings</Link>
                <Link className="hover:underline" href="/sales">
                sales</Link>

            </nav>
          
          <div className="flex">
             {marketingSlot}
            {salesSlot}
          </div>


          <div className="">
            {children}
          </div>

          

        </div>
    )
}