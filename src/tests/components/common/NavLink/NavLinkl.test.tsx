// React
import React from "react";

// Component
import NavLink, { NavLinkProps } from "components/common/NavLink/NavLink";

//Test Library
import { screen, fireEvent } from "@testing-library/react";

//Test Utils
import { renderWithProviders } from "utils/tests";

// Defaults
const defaultProps: NavLinkProps = {
  to: "/",
  activeClassName: "active"
};

describe("NavLink", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<NavLink {...defaultProps}>Link</NavLink>);

    expect(container).toMatchSnapshot();
  });

  it("changes className when active", () => {
    renderWithProviders(<NavLink {...defaultProps}>Link</NavLink>);

    const link = screen.getByText("Link");

    expect(link.className).toContain("active");
  });

  it("updates URL when clicked", async () => {
    const combinedProps = { ...defaultProps, to: "/new-page" };

    renderWithProviders(<NavLink {...combinedProps}>Link</NavLink>);
    const link = screen.getByText("Link");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/new-page");
  });
});
