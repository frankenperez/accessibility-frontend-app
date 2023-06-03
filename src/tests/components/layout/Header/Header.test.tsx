// React
import React from "react";

// Component
import Header from "components/layout/Header/Header";

// Test Utils
import { renderWithProviders } from "utils/tests";

// Tests
describe("Tests for <Header />", () => {
  it("Renders with default props", () => {
    const { container } = renderWithProviders(<Header />);
    // Creates the snapshot test
    expect(container).toMatchSnapshot();
  });
});
