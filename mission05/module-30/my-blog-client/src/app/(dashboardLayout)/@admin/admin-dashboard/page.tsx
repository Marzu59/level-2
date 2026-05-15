import { redirect } from "next/navigation";


export default function AdminDashboard (){

    return redirect("/admin-dashboard/admin-blog");
    // return (
    //     <div>
    //         <h1>admin default</h1>
    //     </div>
    // )
};