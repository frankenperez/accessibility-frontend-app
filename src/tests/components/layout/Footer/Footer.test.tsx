// React
import React from "react";

// Component
import Footer from "components/layout/Footer/Footer";

// Test Utils
import { renderWithProviders } from "utils/tests";

// Tests
describe("Tests for <Footer />", () => {
  it("Renders with default props", () => {
    const { container } = renderWithProviders(<Footer />);
    // Creates the snapshot test
    expect(container).toMatchSnapshot();
  });
});
