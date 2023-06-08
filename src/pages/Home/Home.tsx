// React
import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import StyledHome from "./Home.style";

// Images
import img01 from "assets/images/img10029747.webp";
import img02 from "assets/images/img7188938.jpeg";

export default function Home() {
  const { t } = useTranslation("app");

  return (
    <StyledHome>
      <h1>{t("home.title")}</h1>
      <div className="gallery">
        <img src={img01}></img>
        <img src={img02}></img>
      </div>
    </StyledHome>
  );
}
