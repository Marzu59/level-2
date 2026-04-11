import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/role";




export async function proxy(request:NextRequest){
const pathName = request.nextUrl.pathname;

  let isAuthenicated = false;
  let isAdmin = false;

  const {data } = await userService.getSession()  ;

  console.log(data)

  if(data){
    isAuthenicated = true;
    //If they match, isAdmin becomes true, otherwise false
    isAdmin = data.user?.role === Roles.admin ;
    
 
  }
  if(!isAuthenicated){
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if(!isAdmin && pathName.startsWith("/admin-dashboard") ){
    return NextResponse.redirect(new URL("/user-dashboard", request.url));
  }

  if(isAdmin && pathName.startsWith("/user-dashboard")){
    return NextResponse.redirect(new URL("/admin-dashboard", request.url))
  }


  return NextResponse.next();

};

export const config = {

 matcher: ["/dashboard","/dashboard/:path*", "/admin-dashboard","/admin-dashboard/:path*", "/user-dashboard","/user-dashboard/:path*"],
    
};





//clean-code

//
// import { NextRequest, NextResponse } from "next/server";
// import { userService } from "./services/user.service";
// import { Roles } from "./constants/role";

// export async function proxy(request: NextRequest) {
//   const pathName = request.nextUrl.pathname;

//   let isAuthenticated = false;
//   let isAdmin = false;

//   try {
//     const { data } = await userService.getSession();

//     if (data) {
//       isAuthenticated = true;
//       isAdmin = data.user.role === Roles.admin;
//     }
//   } catch {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // Redirect /dashboard to the appropriate role-based dashboard
//   if (pathName === "/dashboard") {
//     return NextResponse.redirect(
//       new URL(isAdmin ? "/admin-dashboard" : "/user-dashboard", request.url)
//     );
//   }

//   if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
//     return NextResponse.redirect(new URL("/user-dashboard", request.url));
//   }

//   if (isAdmin && pathName.startsWith("/user-dashboard")) {
//     return NextResponse.redirect(new URL("/admin-dashboard", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/admin-dashboard/:path*", "/user-dashboard/:path*"],
// }