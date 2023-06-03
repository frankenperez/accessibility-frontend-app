// React
import React from "react";

// Component
import Home from "pages/Home/Home";

// Test Utils
import { renderWithProviders } from "utils/tests";

// Tests
describe("Tests for <Home />", () => {
  it("Renders with default props", () => {
    const { container } = renderWithProviders(<Home />);
    // Creates the snapshot test
    expect(container).toMatchSnapshot();
  });
});
