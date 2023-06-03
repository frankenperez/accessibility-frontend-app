// React
import React from "react";

// Routing
import { Outlet } from "react-router-dom";

// Components
import Page from "components/layout/Page/Page";

interface UnprotectedRouteProps {
  children?: React.ReactElement;
}

export default function PublicRoute({ children }: UnprotectedRouteProps) {
  return <Page>{children ? children : <Outlet />}</Page>;
}
