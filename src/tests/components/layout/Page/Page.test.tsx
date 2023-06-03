// React
import React from "react";

// Component
import Page from "components/layout/Page/Page";

// Test Utils
import { renderWithProviders } from "utils/tests";

// Tests
describe("Tests for <Page />", () => {
  it("Renders with default props", () => {
    const { container } = renderWithProviders(<Page />);
    // Creates the snapshot test
    expect(container).toMatchSnapshot();
  });
});
