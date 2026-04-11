// export  const userRoutes = [
//   {
//     title: "user management",
//     items: [
//         {
//             title: "user analytics",
//             url: "/user-analytics"
//         },
//         {
//             title: "user dashboard",
//             url: "/user-dashboard"
//         }
//     ]
//   }

// ];




export interface Route {
  title:string;
  items: {
    title:string;
    url:string;
  }[];


}