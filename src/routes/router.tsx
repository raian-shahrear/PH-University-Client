import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { routesGenerator } from "../utils/routesGenerator";
import { adminRouteArray } from "./admin.routes";
import { facultyRouteArray } from "./faculty.routes";
import { studentRouteArray } from "./student.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminRouteArray),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyRouteArray),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentRouteArray),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
