import { Route } from "@/types";

export  const adminRoutes:Route[] = [
  {
    title: "Admin management",
    items: [
        {
            title: "Admin analytics",
            url: "/admin-analytics"
        },
        {
            title: "Admin dashboard",
            url: "/admin-dashboard"
        }
    ]
  }

];