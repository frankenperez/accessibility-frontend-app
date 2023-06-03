// React
import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import StyledHome from "./Home.style";

export default function Home() {
  const { t } = useTranslation("app");

  return (
    <StyledHome>
      <h1>{t("home.title")}</h1>
    </StyledHome>
  );
}
