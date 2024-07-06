import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { TRouteArray } from "../types";

export const adminRouteArray: TRouteArray[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

/* For Router 
===================*/
// export const adminRoutes = adminRouteArray.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) =>
//       acc.push({
//         path: child.path!,
//         element: child.element,
//       })
//     );
//   }
//   return acc;
// }, []);

/* For Sidebar of Layout 
=======================*/
// export const adminSidebarItems = adminRouteArray.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.name && item.path) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       const children = item.children.map((child) => {
//         return {
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         };
//       });
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: children,
//       });
//     }
//     return acc;
//   },
//   []
// );

/*=================== 
hard coded way 
=====================*/
/* For Router
=====================*/
// export const adminRoutes = [
//     {
//       path: "dashboard",
//       element: <AdminDashboard />,
//     },
//     {
//       path: "create-admin",
//       element: <CreateAdmin />,
//     },
//     {
//       path: "create-faculty",
//       element: <CreateFaculty />,
//     },
//     {
//       path: "create-student",
//       element: <CreateStudent />,
//     },
//   ]

/* For Sidebar of Layout
========================== */
// export const adminSidebarItems= [
//     {
//       key: "Dashboard",
//       label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//     },
//     {
//       key: "User Management",
//       label: "User Management",
//       children: [
//         {
//           key: "Create Admin",
//           label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//         },
//         {
//           key: "Create Faculty",
//           label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//         },
//         {
//           key: "Create Student",
//           label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//         },
//       ],
//     },
//   ];
