import BlogCard from "@/components/modules/homepage/blogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.services";
import { userService } from "@/services/user.service";
import { Blogpost } from "@/types";
import { cookies } from "next/headers";


export default async function Home() {
  
  //  const session  = await authClient.getSession();
  //  console.log(session)

  // const cookieStore = await cookies();
  // // console.log(cookieStore.get("better-auth.session_token"))

  // const res = await fetch("http://localhost:4000/api/auth/get-session",{
  //   headers: {
  //     Cookie: cookieStore.toString()
  //   },
  //   cache: 'no-store',
  // });
  // console.log(await res.json())

 
    // const {data:sessionData} = await userService.getSession()
// console.log(sessionData)
  
const {data } = await blogService.getBlogposts({search:""},{cache: "no-store"})
console.log(data)


  return (
    <div>

        <Button> Click here</Button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1rem' }}>
          {
          data?.data?.map((post:Blogpost)=> <BlogCard key={post.id} post={post} /> )
         }

        </div>
         
    </div>
  );
}
