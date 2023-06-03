// React
import React from "react";

// Components
import NavLink from "components/common/NavLink/NavLink";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import StyledFooter from "./Footer.style";

// Footer
export default function Footer(): JSX.Element {
  const { t } = useTranslation("app");
  // TODO: Get footerItems
  const footerItems = [
    {
      label: t("footer.contact"),
      url: "#"
    },
    {
      label: t("footer.privacy"),
      url: "#"
    },
    {
      label: t("footer.terms"),
      url: "#"
    }
  ];
  return (
    <StyledFooter>
      <nav className="navigation">
        <ul>
          {footerItems.map((link) => {
            const { label, url } = link;
            return (
              <li key={label}>
                <NavLink className="link" to={url} target="_blank" rel="noreferrer" activeClassName="active">
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledFooter>
  );
}
