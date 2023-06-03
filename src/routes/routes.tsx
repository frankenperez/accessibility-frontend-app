// React
import React from "react";

// Routing
import type { RouteObject } from "react-router-dom";
import { ROUTES } from "constants/routes";
import PublicRoute from "routes/PublicRoute/PublicRoute";

// Public Pages
const Home = React.lazy(() => import("pages/Home/Home"));

const routes: RouteObject[] = [
  {
    element: <PublicRoute />,
    children: [{ path: ROUTES.HOME, element: <Home /> }]
  }
];

export default routes;
