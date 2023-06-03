/* eslint-disable react/display-name */
// React
import React from "react";

// Router
import { NavLink as NavLinkReactRouter, NavLinkProps as NavLinkReactRouterProps } from "react-router-dom";

export interface NavLinkProps extends NavLinkReactRouterProps {
  activeClassName: string;
}

// Component wrapper to forward props to NavLink from React Router
const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props: NavLinkProps, ref) => {
  return (
    <NavLinkReactRouter
      ref={ref}
      to={props.to}
      className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ""}`}
    >
      {props.children}
    </NavLinkReactRouter>
  );
});

export default NavLink;
