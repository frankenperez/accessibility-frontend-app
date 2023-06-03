// React
import React from "react";

// Layout Components
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";

// Styles
import StyledPage from "./Page.style";

// Definitions
export interface PageProps {
  children?: React.ReactNode;
  showHeader?: boolean;
}

export default function Page({ children }: PageProps) {
  return (
    <StyledPage>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledPage>
  );
}
