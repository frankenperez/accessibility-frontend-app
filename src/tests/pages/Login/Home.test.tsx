// React
import React from "react";

// Component
import Home from "pages/Home/Home";

// Test Utils
import { renderWithProviders, runAxe } from "utils/tests";

// Tests
describe("Tests for <Home />", () => {
  it("Renders with default props", () => {
    const { container } = renderWithProviders(<Home />);
    // Creates the snapshot test
    expect(container).toMatchSnapshot();
  });
  it("Renders with no accessibility violations", async () => {
    const { container } = renderWithProviders(<Home />);
    // Check a11y violations
    const results = await runAxe(container);
    expect(results).toHaveNoViolations();
  });
});
